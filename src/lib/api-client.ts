// API client for making requests to our backend

const API_BASE_URL = '';  // empty string for same-origin requests

// Generic types for API responses
interface ListResponse<T> {
  items: T[];
  total: number;
  limit: number;
  offset: number;
}

// Doctors
export interface Doctor {
  id: number;
  name: string;
  specialization: string;
  photo?: string;
  description?: string;
  experience?: number;
  createdAt: string;
  updatedAt: string;
}

// Services
export interface Service {
  id: number;
  name: string;
  description?: string;
  price: number;
  categoryId: number;
  category: Category;
  createdAt: string;
  updatedAt: string;
}

// Categories
export interface Category {
  id: number;
  name: string;
  description?: string;
  createdAt: string;
  updatedAt: string;
}

// Appointments
export interface Appointment {
  id: number;
  date: string;
  patientId: number;
  doctorId: number;
  status: string;
  notes?: string;
  doctor: Doctor;
  patient: Patient;
  createdAt: string;
  updatedAt: string;
}

// Patients
export interface Patient {
  id: number;
  name: string;
  email: string;
  phone?: string;
  createdAt: string;
  updatedAt: string;
}

// Articles
export interface Article {
  id: number;
  title: string;
  content: string;
  image?: string;
  createdAt: string;
  updatedAt: string;
}

// Create appointment data interface
export interface CreateAppointmentData {
  fullName: string;
  email: string;
  phone: string;
  doctorId: string;
  appointmentDate: string;
  appointmentTime: string;
  notes?: string;
}

// API functions for fetching data

// Fetch all doctors
export async function getDoctors(): Promise<Doctor[]> {
  const response = await fetch(`${API_BASE_URL}/api/doctors`);
  if (!response.ok) {
    throw new Error('Failed to fetch doctors');
  }
  return response.json();
}

// Fetch a specific doctor
export async function getDoctor(id: number): Promise<Doctor> {
  const response = await fetch(`${API_BASE_URL}/api/doctors/${id}`);
  if (!response.ok) {
    throw new Error('Failed to fetch doctor');
  }
  return response.json();
}

// Fetch all services
export async function getServices(categoryId?: number): Promise<Service[]> {
  const url = categoryId
    ? `${API_BASE_URL}/api/services?categoryId=${categoryId}`
    : `${API_BASE_URL}/api/services`;
    
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error('Failed to fetch services');
  }
  return response.json();
}

// Fetch all categories
export async function getCategories(includeServices: boolean = false): Promise<Category[]> {
  const url = `${API_BASE_URL}/api/categories?includeServices=${includeServices}`;
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error('Failed to fetch categories');
  }
  return response.json();
}

// Fetch articles with pagination
export async function getArticles(
  limit: number = 10,
  offset: number = 0
): Promise<ListResponse<Article>> {
  const response = await fetch(
    `${API_BASE_URL}/api/articles?limit=${limit}&offset=${offset}`
  );
  if (!response.ok) {
    throw new Error('Failed to fetch articles');
  }
  return response.json();
}

// Fetch a specific article
export async function getArticle(id: number): Promise<Article> {
  const response = await fetch(`${API_BASE_URL}/api/articles/${id}`);
  if (!response.ok) {
    throw new Error('Failed to fetch article');
  }
  return response.json();
}

// Create an appointment
export async function createAppointment(appointmentData: CreateAppointmentData): Promise<Appointment> {
  const response = await fetch(`${API_BASE_URL}/api/appointments`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(appointmentData),
  });
  
  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.error || 'Failed to create appointment');
  }
  
  return response.json();
} 