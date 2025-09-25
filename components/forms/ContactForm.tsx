'use client';

import { PHONE_NUMBER } from '@/lib/constants';
import { getWhatsappMessageUrl } from '@/lib/utils';
import { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);
    // Simulate API call
    await new Promise((res) => setTimeout(res, 1000));

    const waUrl = getWhatsappMessageUrl(
      PHONE_NUMBER,
      `Halo, saya ingin menghubungi Anda mengenai layanan alat berat dan spare parts.\n\nNama: ${formData.name}\nNomor Telepon: ${formData.phone}\nSubjek: ${formData.subject}\nPesan: ${formData.message}`
    );

    // Create an anchor tag and trigger click for best practice
    const a = document.createElement('a');
    a.href = waUrl;
    a.target = '_blank';
    a.rel = 'noopener noreferrer';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);

    setLoading(false);
    setSuccess(true);
    setFormData({ name: '', phone: '', subject: '', message: '' });
  };

  return (
    <div className='p-8 rounded-2xl shadow-xl bg-white border border-gray-100'>
      <h3 className='text-2xl font-bold text-primary mb-6'>Hubungi Kami</h3>
      <form onSubmit={handleSubmit} className='space-y-5'>
        <input
          type='text'
          name='name'
          placeholder='Nama Lengkap'
          value={formData.name}
          onChange={handleChange}
          className='w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary text-lg bg-gray-50 border-gray-200'
          required
        />
        <input
          type='tel'
          name='phone'
          inputMode='tel'
          onBeforeInput={(e) => {
            const char = e.data;
            if (char && !/[\d+\- ]/.test(char)) {
              e.preventDefault();
            }
          }}
          placeholder='Nomor Telepon'
          value={formData.phone}
          onChange={handleChange}
          className='w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary text-lg bg-gray-50 border-gray-200'
          required
        />
        <input
          type='text'
          name='subject'
          placeholder='Subjek'
          value={formData.subject}
          onChange={handleChange}
          className='w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary text-lg bg-gray-50 border-gray-200'
          required
        />
        <textarea
          name='message'
          placeholder='Pesan Anda'
          rows={5}
          value={formData.message}
          onChange={handleChange}
          className='w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 text-lg bg-gray-50 resize-none border-gray-200 focus:ring-secondary'
          required
        />
        <button
          type='submit'
          disabled={loading}
          className='w-full py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary-hover transition-colors duration-200 text-lg flex items-center justify-center'
        >
          {loading ? 'Mengirim...' : 'Kirim Pesan'}
        </button>
        {success && (
          <div className='text-green-600 text-center font-medium mt-2'>
            Pesan Anda telah terkirim!
          </div>
        )}
      </form>
    </div>
  );
};
export default ContactForm;
