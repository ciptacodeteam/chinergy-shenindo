import {
  EMAIL,
  MAPS_EMBED_LINK,
  MAPS_LINK,
  PHONE_NUMBER,
} from '@/lib/constants';
import { cn, getEmailMessageUrl, getWhatsappMessageUrl } from '@/lib/utils';
import { IconMail, IconMapPin, IconPhone } from '@tabler/icons-react';
import Link from 'next/link';

const contactData = [
  {
    icon: IconMapPin,
    text: 'Jl. Cemara, No.86, Pulo Brayan Darat II, Medan Timur, North Sumatra 20239',
    link: MAPS_LINK,
  },
  {
    icon: IconPhone,
    text: PHONE_NUMBER.replace(/(\+62)(\d{3})(\d{4})(\d{4})/, '+62 $2-$3-$4'),
    link: getWhatsappMessageUrl(
      PHONE_NUMBER,
      'Halo, saya ingin menghubungi Anda mengenai layanan alat berat dan spare parts.'
    ),
  },
  {
    icon: IconMail,
    text: EMAIL,
    link: getEmailMessageUrl(
      EMAIL,
      'Pertanyaan tentang layanan alat berat dan spare parts',
      'Halo, saya ingin menghubungi Anda mengenai layanan alat berat dan spare parts.'
    ),
  },
];

const ContactDetailCard = () => {
  return (
    <div className='bg-third p-10 rounded-xl shadow-lg h-fit flex flex-col justify-between'>
      <div>
        <h3 className='text-2xl font-semibold text-primary mb-8 text-balance'>
          Informasi Kontak
        </h3>
        <ul className='space-y-4 mb-12'>
          {contactData.map(({ icon: Icon, text, link }, idx) => (
            <li
              key={idx}
              className={cn(
                'flex group',
                idx === 0 ? 'items-start' : 'items-center'
              )}
            >
              <Icon
                size={24}
                className='text-secondary me-4 flex-shrink-0 group-first:mt-1'
              />
              <Link
                href={link}
                className='text-gray-700 text-pretty hover:underline'
                target='_blank'
                rel='noopener noreferrer'
              >
                {text}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className='relative w-full h-64 rounded-lg overflow-hidden shadow-md mt-auto'>
        <iframe
          src={MAPS_EMBED_LINK}
          width='100%'
          height='100%'
          style={{ border: 0 }}
          allowFullScreen={true}
          loading='lazy'
          referrerPolicy='no-referrer-when-downgrade'
        ></iframe>
      </div>
    </div>
  );
};
export default ContactDetailCard;
