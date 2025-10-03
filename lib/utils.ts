import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function whatsappMessageFormatter(message: string) {
  return encodeURIComponent(message);
}

export function sendWhatsappMessage(phoneNumber: string, message: string) {
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${whatsappMessageFormatter(
    message
  )}`;
  window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
}

export function getWhatsappMessageUrl(phoneNumber: string, message: string) {
  return `https://wa.me/${phoneNumber}?text=${whatsappMessageFormatter(
    message
  )}`;
}
export function getEmailMessageUrl(
  email: string,
  subject: string,
  body?: string
): string {
  let mailtoUrl = `mailto:${email}?subject=${encodeURIComponent(subject)}`;
  if (body) {
    mailtoUrl += `&body=${encodeURIComponent(body)}`;
  }
  return mailtoUrl;
}

export const getRandomImage = () => {
  const images = [
    'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80',
    'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80',
    'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=400&q=80',
    'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80',
    'https://images.unsplash.com/photo-1520880867055-1e30d1cb001c?auto=format&fit=crop&w=400&q=80',
  ];
  return images[Math.floor(Math.random() * images.length)];
};
