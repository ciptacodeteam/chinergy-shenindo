"use client";

import { FloatingWhatsApp } from "react-floating-whatsapp";

export default function WhatsAppButton() {
  return (
    <FloatingWhatsApp
      phoneNumber="628123456789" // ganti dengan nomor WA kamu
      accountName="CV. Chinergi Shenindo"
      avatar="/logo.png" // opsional: ganti logo brand kamu
      chatMessage="Halo 👋, ada yang bisa kami bantu?"
      statusMessage="Kami akan balas dalam beberapa menit kedepan"
      placeholder="Ketik pesan..."
      allowEsc
      allowClickAway
      notification
      notificationSound
    />
  );
}
