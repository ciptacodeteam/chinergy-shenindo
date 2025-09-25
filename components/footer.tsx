import Link from 'next/link';
import Image from 'next/image';

import logo from '@/public/img/logo.webp';
import { EMAIL, MAPS_EMBED_LINK, PHONE_NUMBER } from '@/lib/constants';
import Copyright from './footers/Copyright';
import { IconMail, IconPhone } from '@tabler/icons-react';
import { getEmailMessageUrl, getWhatsappMessageUrl } from '@/lib/utils';

export default function FooterSection() {
  return (
    <>
      <section className='relative bg-primary overflow-hidden'>
        {/* background image transparan */}
        <div className="absolute inset-0 bg-[url('/img/map_img.webp')] bg-cover bg-no-repeat opacity-15"></div>

        {/* content */}
        <div className='relative max-w-7xl mx-auto z-10'>
          <div className='grid grid-cols-4 mt-20 mb-20'>
            <div>
              <div className='flex items-center mb-6'>
                <Image src={logo} alt='logo' className='w-15 me-4' />
                <div className='text-xl text-white font-bold leading-6'>
                  <p>CHINERGI</p>
                  <p>SHENINDO</p>
                </div>
              </div>
              <p className='text-white text-sm mb-12'>
                CV. Chinergi Shenindo menyediakan berbagai pelayanan seperti di
                bidang jasa pabrikasi, reparasi serta pengadaan spare parts
                untuk memenuhi kebutuhan mitra kami.
              </p>

              <Link
                href={'/tentang-kami'}
                className='py-4 font-semibold px-6 bg-secondary text-white hover:!bg-white hover:text-secondary transition-colors duration-300'
                prefetch
              >
                Tentang Kami
              </Link>
            </div>
            <div className='flex flex-col justify-center items-center'>
              <div>
                <h1 className='font-bold text-white'>Tautan Perusahaan</h1>

                <div className='h-1 w-16 bg-secondary mt-6 mb-6'></div>

                <div className='space-y-3'>
                  <div className='flex items-center group cursor-pointer transition-all duration-300'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='12'
                      height='12'
                      viewBox='0 0 24 24'
                      fill='none'
                      stroke='currentColor'
                      strokeWidth='4'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      className='lucide lucide-chevron-right-icon text-gray-300 mt-0.5 lucide-chevron-right transition-all duration-300 group-hover:text-white group-hover:translate-x-1'
                    >
                      <path d='m9 18 6-6-6-6' />
                    </svg>
                    <p className='text-gray-300 font-semibold ms-2 transition-colors duration-300 group-hover:text-white'>
                      Beranda
                    </p>
                  </div>

                  <div className='flex items-center group cursor-pointer transition-all duration-300'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='12'
                      height='12'
                      viewBox='0 0 24 24'
                      fill='none'
                      stroke='currentColor'
                      strokeWidth='4'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      className='lucide lucide-chevron-right-icon text-gray-300 mt-0.5 lucide-chevron-right transition-all duration-300 group-hover:text-white group-hover:translate-x-1'
                    >
                      <path d='m9 18 6-6-6-6' />
                    </svg>
                    <p className='text-gray-300 font-semibold ms-2 transition-colors duration-300 group-hover:text-white'>
                      Tentang Kami
                    </p>
                  </div>

                  <div className='flex items-center group cursor-pointer transition-all duration-300'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='12'
                      height='12'
                      viewBox='0 0 24 24'
                      fill='none'
                      stroke='currentColor'
                      strokeWidth='4'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      className='lucide lucide-chevron-right-icon text-gray-300 mt-0.5 lucide-chevron-right transition-all duration-300 group-hover:text-white group-hover:translate-x-1'
                    >
                      <path d='m9 18 6-6-6-6' />
                    </svg>
                    <p className='text-gray-300 font-semibold ms-2 transition-colors duration-300 group-hover:text-white'>
                      Layanan
                    </p>
                  </div>

                  <div className='flex items-center group cursor-pointer transition-all duration-300'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='12'
                      height='12'
                      viewBox='0 0 24 24'
                      fill='none'
                      stroke='currentColor'
                      strokeWidth='4'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      className='lucide lucide-chevron-right-icon text-gray-300 mt-0.5 lucide-chevron-right transition-all duration-300 group-hover:text-white group-hover:translate-x-1'
                    >
                      <path d='m9 18 6-6-6-6' />
                    </svg>
                    <p className='text-gray-300 font-semibold ms-2 transition-colors duration-300 group-hover:text-white'>
                      Produk
                    </p>
                  </div>

                  <div className='flex items-center group cursor-pointer transition-all duration-300'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='12'
                      height='12'
                      viewBox='0 0 24 24'
                      fill='none'
                      stroke='currentColor'
                      strokeWidth='4'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      className='lucide lucide-chevron-right-icon text-gray-300 mt-0.5 lucide-chevron-right transition-all duration-300 group-hover:text-white group-hover:translate-x-1'
                    >
                      <path d='m9 18 6-6-6-6' />
                    </svg>
                    <p className='text-gray-300 font-semibold ms-2 transition-colors duration-300 group-hover:text-white'>
                      Kontak
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h1 className='font-bold text-white'>Our Contact</h1>

              <div className='h-1 w-16 bg-secondary mt-6 mb-6'></div>

              <div className='space-y-3'>
                <div className='flex items-center group cursor-pointer transition-all duration-300'>
                  <IconPhone
                    size={16}
                    className='text-gray-300 me-1 group-hover:text-white'
                  />
                  <Link
                    href={getWhatsappMessageUrl(
                      PHONE_NUMBER,
                      'Halo, saya ingin menghubungi Anda mengenai layanan alat berat dan spare parts.'
                    )}
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <p className='text-gray-300 text-sm ms-2 transition-colors duration-300 group-hover:text-white'>
                      {PHONE_NUMBER.replace(
                        /(\+62)(\d{3})(\d{4})(\d{4})/,
                        '+62 $2-$3-$4'
                      )}
                    </p>
                  </Link>
                </div>

                <div className='flex items-center group cursor-pointer transition-all duration-300'>
                  <IconMail
                    size={16}
                    className='text-gray-300 me-1 group-hover:text-white'
                  />
                  <Link
                    href={getEmailMessageUrl(
                      EMAIL,
                      'Pertanyaan tentang layanan alat berat dan spare parts',
                      'Halo, saya ingin menghubungi Anda mengenai layanan alat berat dan spare parts.'
                    )}
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <p className='text-gray-300 text-sm ms-2 transition-colors duration-300 group-hover:text-white'>
                      {EMAIL}
                    </p>
                  </Link>
                </div>
              </div>
            </div>

            <div>
              <h1 className='font-bold text-white'>Our Location</h1>

              <div className='h-1 w-16 bg-secondary mt-6 mb-6'></div>

              <div>
                <iframe src={MAPS_EMBED_LINK} loading='lazy'></iframe>
              </div>
            </div>
          </div>
        </div>

        <Copyright />
      </section>
    </>
  );
}
