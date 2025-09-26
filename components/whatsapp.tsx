'use client';

import { PHONE_NUMBER } from '@/lib/constants';
import { FloatingWhatsApp } from 'react-floating-whatsapp';

export default function WhatsAppButton() {
  return (
    <FloatingWhatsApp
      phoneNumber={PHONE_NUMBER.replace('+', '')}
      accountName='CV. Chinergi Shenindo'
      avatar='/img/logo.webp' // opsional: ganti logo brand kamu
      chatMessage='Halo 👋, ada yang bisa kami bantu?'
      statusMessage='24 Jam Layanan'
      placeholder='Ketik pesan...'
      chatboxHeight={400}
      allowEsc
      allowClickAway
      notification
      notificationSound
    />
  );
}
