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
