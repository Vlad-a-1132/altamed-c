'use client'

import { useState, FormEvent, useEffect } from 'react'

interface Doctor {
  id: number;
  name: string;
  specialization: string;
}

interface Service {
  id: number;
  name: string;
  price: number;
  categoryId: number;
  category: {
    id: number;
    name: string;
  };
}

export default function AppointmentForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    serviceType: '',
    doctorId: '',
    appointmentDate: '',
    appointmentTime: '',
    notes: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')
  const [doctors, setDoctors] = useState<Doctor[]>([])
  const [services, setServices] = useState<Service[]>([])

  // Fetch doctors and services on component mount
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch doctors
        const doctorsResponse = await fetch('/api/doctors');
        if (doctorsResponse.ok) {
          const doctorsData = await doctorsResponse.json();
          setDoctors(doctorsData);
        }
        
        // Fetch services
        const servicesResponse = await fetch('/api/services');
        if (servicesResponse.ok) {
          const servicesData = await servicesResponse.json();
          setServices(servicesData);
        }
      } catch (error) {
        console.error('Error fetching form data:', error);
      }
    };
    
    fetchData();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setErrorMessage('')

    try {
      const response = await fetch('/api/appointments', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Ошибка при отправке формы');
      }
      
      setIsSubmitted(true)
      setFormData({
        fullName: '',
        phone: '',
        email: '',
        serviceType: '',
        doctorId: '',
        appointmentDate: '',
        appointmentTime: '',
        notes: ''
      })
    } catch (error) {
      if (error instanceof Error) {
        setErrorMessage(error.message || 'Произошла ошибка при отправке формы. Пожалуйста, попробуйте еще раз.');
      } else {
        setErrorMessage('Произошла ошибка при отправке формы. Пожалуйста, попробуйте еще раз.');
      }
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <div className="text-center py-8">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-4">Спасибо за вашу заявку!</h3>
        <p className="text-gray-600 mb-6">
          Мы получили вашу заявку на запись к врачу и свяжемся с вами в ближайшее время для подтверждения.
        </p>
        <button
          onClick={() => setIsSubmitted(false)}
          className="bg-blue-600 text-white py-2 px-6 rounded-md font-medium hover:bg-blue-700 transition"
        >
          Создать новую заявку
        </button>
      </div>
    )
  }

  // Get tomorrow's date as minimum appointment date
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const minDate = tomorrow.toISOString().split('T')[0];

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">
            ФИО <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            placeholder="Иванов Иван Иванович"
          />
        </div>
        
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
            Телефон <span className="text-red-500">*</span>
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            placeholder="+7 (___) ___-__-__"
          />
        </div>
        
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            Email <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            placeholder="example@email.com"
          />
        </div>

        <div>
          <label htmlFor="serviceType" className="block text-sm font-medium text-gray-700 mb-1">
            Услуга <span className="text-red-500">*</span>
          </label>
          <select
            id="serviceType"
            name="serviceType"
            value={formData.serviceType}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="">Выберите услугу</option>
            {services.map((service) => (
              <option key={service.id} value={service.id}>
                {service.name} - {service.price.toLocaleString('ru-RU')} ₽
              </option>
            ))}
          </select>
        </div>
        
        <div>
          <label htmlFor="doctorId" className="block text-sm font-medium text-gray-700 mb-1">
            Врач <span className="text-red-500">*</span>
          </label>
          <select
            id="doctorId"
            name="doctorId"
            value={formData.doctorId}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="">Выберите врача</option>
            {doctors.map((doctor) => (
              <option key={doctor.id} value={doctor.id}>
                {doctor.name} - {doctor.specialization}
              </option>
            ))}
          </select>
        </div>
        
        <div>
          <label htmlFor="appointmentDate" className="block text-sm font-medium text-gray-700 mb-1">
            Дата приема <span className="text-red-500">*</span>
          </label>
          <input
            type="date"
            id="appointmentDate"
            name="appointmentDate"
            value={formData.appointmentDate}
            onChange={handleChange}
            min={minDate}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        
        <div>
          <label htmlFor="appointmentTime" className="block text-sm font-medium text-gray-700 mb-1">
            Время приема <span className="text-red-500">*</span>
          </label>
          <select
            id="appointmentTime"
            name="appointmentTime"
            value={formData.appointmentTime}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="">Выберите время</option>
            <option value="09:00">09:00</option>
            <option value="10:00">10:00</option>
            <option value="11:00">11:00</option>
            <option value="12:00">12:00</option>
            <option value="13:00">13:00</option>
            <option value="14:00">14:00</option>
            <option value="15:00">15:00</option>
            <option value="16:00">16:00</option>
            <option value="17:00">17:00</option>
            <option value="18:00">18:00</option>
            <option value="19:00">19:00</option>
          </select>
        </div>
      </div>
      
      <div>
        <label htmlFor="notes" className="block text-sm font-medium text-gray-700 mb-1">
          Дополнительная информация
        </label>
        <textarea
          id="notes"
          name="notes"
          value={formData.notes}
          onChange={handleChange}
          rows={4}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
          placeholder="Укажите дополнительную информацию, если необходимо"
        ></textarea>
      </div>
      
      {errorMessage && (
        <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-md">
          {errorMessage}
        </div>
      )}
      
      <div className="flex items-center justify-between">
        <p className="text-sm text-gray-500">
          Поля, отмеченные <span className="text-red-500">*</span>, обязательны для заполнения
        </p>
        <button
          type="submit"
          disabled={isSubmitting}
          className={`px-6 py-3 rounded-md font-medium ${
            isSubmitting
              ? 'bg-gray-400 cursor-not-allowed'
              : 'bg-blue-600 text-white hover:bg-blue-700'
          } transition`}
        >
          {isSubmitting ? 'Отправка...' : 'Записаться на прием'}
        </button>
      </div>
    </form>
  )
} 