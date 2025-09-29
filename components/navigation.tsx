'use client';

import Image from 'next/image';
import Link from 'next/link';

import { usePathname } from 'next/navigation';
import { useState } from 'react';

import { EMAIL, PHONE_NUMBER } from '@/lib/constants';
import { cn, getEmailMessageUrl, getWhatsappMessageUrl } from '@/lib/utils';
import logo from '@/public/img/logo.webp';
import {
  IconAt,
  IconBrandInstagramFilled,
  IconBrandWhatsappFilled,
  IconClock,
  IconMailFilled,
  IconMapPin,
  IconPhone,
} from '@tabler/icons-react';

export default function NavigationBar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const menus = [
    { name: 'Beranda', href: '/' },
    { name: 'Pabrikasi', href: '/pabrikasi' },
    { name: 'Reparasi', href: '/reparasi' },
    { name: 'Spare Parts', href: '/sparepart' },
    { name: 'Tentang Kami', href: '/tentang-kami'},
    { name: 'Kontak', href: '/kontak' },
  ];

  return (
    <>
      <section>
        <div className='bg-primary'>
          <div className='max-w-7xl mx-auto py-3'>
            <div className='flex justify-between items-center px-4'>
              <div className='gap-8 hidden lg:flex'>
                <div className='flex items-center'>
                  <div>
                    <IconPhone className='size-5 text-white me-2' />
                  </div>
                  <p className='text-white text-sm'>
                    {PHONE_NUMBER.replace(
                      /(\+62)(\d{3})(\d{4})(\d{4})/,
                      '+62 $2-$3-$4'
                    )}
                  </p>
                </div>
                <div className='flex items-center'>
                  <div>
                    <IconAt className='size-5 text-white me-2' />
                  </div>

                  <p className='text-white text-sm'>{EMAIL}</p>
                </div>
                <div className='flex items-center'>
                  <div>
                    <IconClock className='size-5 text-white me-2' />
                  </div>
                  <p className='text-white text-sm'>
                    Senin - Sabtu: 08.00 - 17.30 WIB
                  </p>
                </div>
              </div>

              <p className='text-white text-sm block lg:hidden font-semibold'>
                Kontak Kami
              </p>

              <div className='flex items-center gap-4 lg:gap-6'>
                <Link
                  href={getWhatsappMessageUrl(
                    PHONE_NUMBER,
                    'Halo, saya ingin bertanya tentang layanan dan produk dari Chinergy Shenindo.'
                  )}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='hover:scale-110 transition-transform duration-300'
                >
                  <IconBrandWhatsappFilled className='size-5 text-white cursor-pointer' />
                </Link>

                <Link
                  href={'#'}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='hover:scale-110 transition-transform duration-300'
                >
                  <IconBrandInstagramFilled className='size-5 text-white cursor-pointer' />
                </Link>

                <Link
                  href={getEmailMessageUrl(
                    EMAIL,
                    'Halo, saya ingin bertanya tentang layanan dan produk dari Chinergy Shenindo.'
                  )}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='hover:scale-110 transition-transform duration-300'
                >
                  <IconMailFilled className='size-5 text-white cursor-pointer' />
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className='flex bg-third mx-auto justify-between'>
          <div className='flex items-center ml-4 lg:ml-0 lg:justify-center w-full lg:max-w-1/4'>
            <Link
              href={'/'}
              className='font-bold py-4 flex justify-center items-center'
              prefetch
            >
              <Image src={logo} alt='logo' className='w-15 me-4' priority />
              <div className='text-xl leading-6'>
                <p className='text-primary'>CHINERGI</p>
                <p className='text-primary'>SHENINDO</p>
              </div>
            </Link>
          </div>

          <nav className='hidden lg:flex lg:flex-1 bg-white'>
            <ul className='grid grid-cols-6 w-full border-gray-200 divide-x border-y h-full text-center font-medium'>
              {menus.map((menu, idx) => (
                <li
                  key={idx}
                  className='relative z-10 border-gray-200 flex items-center justify-center group'
                >
                  <Link
                    href={menu.href}
                    className={cn(
                      'flex items-center justify-center transition-colors duration-300 ',
                      pathname === menu.href ? 'text-secondary' : 'text-primary'
                    )}
                  >
                    {menu.name}
                  </Link>

                  <span className='z-0 absolute inset-0 opacity-0 group-hover:opacity-50 transition-opacity duration-300 stripes-bg pointer-events-none' />
                </li>
              ))}
            </ul>
          </nav>

          <div
            className='group bg-secondary flex items-center justify-center cursor-pointer px-7 py-5'
            onClick={() => setIsOpen(true)}
          >
            <div className='space-y-1 w-5'>
              <span className='block rounded-full h-0.5 w-3 bg-white transition-all duration-300 group-hover:w-5'></span>
              <span className='block rounded-full h-0.5 bg-white transition-all duration-300 group-hover:w-5'></span>
              <span className='block rounded-full h-0.5 w-3 bg-white ml-auto transition-all duration-300 group-hover:w-5'></span>
            </div>
          </div>
        </div>
      </section>

      {/* SIDEBAR */}
      <div
        className={cn(
          'fixed top-0 right-0 h-full w-[400px] bg-white shadow-lg z-50 transform transition-transform duration-500 px-10 py-12 ease-[cubic-bezier(0.22,1,0.36,1)]',
          isOpen ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        <div className='flex justify-between items-center mb-12'>
          <div className='flex items-center'>
            <Image src={logo} alt='logo' className='w-15 me-4' />
            <div className='text-xl text-primary font-bold leading-6'>
              <p>CHINERGY</p>
              <p>SHENINDO</p>
            </div>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className='text-white bg-secondary text-xl font-semibold px-6 py-4 cursor-pointer'
          >
            ✕
          </button>
        </div>

        <main className='block lg:hidden'>
          <ul className='space-y-4'>
            {menus.map((menu, idx) => (
              <li key={idx}>
                <Link
                  href={menu.href}
                  className={cn(
                    'text-primary text-lg hover:text-secondary transition-colors duration-300',
                    pathname === menu.href ? 'font-semibold' : 'font-normal'
                  )}
                  onClick={() => setIsOpen(false)}
                >
                  {menu.name}
                </Link>
              </li>
            ))}
          </ul>
        </main>

        <main className='hidden lg:block mt-16'>
          <p className='text-gray-600 leading-relaxed'>
            CV. Chinergi Shenindo menyediakan berbagai pelayanan seperti di
            bidang jasa pabrikasi, reparasi serta pengadaan spare parts untuk
            memenuhi kebutuhan mitra kami.
          </p>
        </main>

        <main>
          <h1 className='font-semibold text-primary text-lg lg:text-xl mt-16 mb-6'>
            Contact Info
          </h1>

          <div className='space-y-5'>
            <div className='flex items-center'>
              <div>
                <IconPhone className='size-5 text-secondary me-4 flex-shrink-0' />
              </div>
              <p className='text-primary'>
                {PHONE_NUMBER.replace(
                  /(\+62)(\d{3})(\d{4})(\d{4})/,
                  '+62 $2-$3-$4'
                )}
              </p>
            </div>
            <div className='flex items-center'>
              <div>
                <IconAt className='size-5 text-secondary me-4 flex-shrink-0' />
              </div>

              <p className='text-primary'>{EMAIL}</p>
            </div>
            <div className='flex items-center'>
              <div>
                <IconMapPin className='size-5 text-secondary me-4 flex-shrink-0' />
              </div>
              <p className='text-primary'>
                Jl. Cemara, No.86, Pulo Brayan Darat II, Medan Timur, North
                Sumatra 20239
              </p>
            </div>
          </div>
        </main>

        <footer>
          <h1 className='font-semibold text-primary text-lg lg:text-xl mt-16 mb-6'>
            Follow Us
          </h1>

          <div className='flex gap-4'>
            <Link
              href={getWhatsappMessageUrl(
                PHONE_NUMBER,
                'Halo, saya ingin bertanya tentang layanan dan produk dari Chinergy Shenindo.'
              )}
            >
              <div className='bg-gray-50 border border-gray-200 p-3 hover:bg-secondary transition-colors duration-300 group'>
                <IconBrandWhatsappFilled className='text-secondary group-hover:fill-white transition-colors duration-300 size-5' />
              </div>
            </Link>

            <Link href={'#'}>
              <div className='bg-gray-50 border border-gray-200 p-3 hover:bg-secondary transition-colors duration-300 group'>
                <IconBrandInstagramFilled className='text-secondary group-hover:fill-white transition-colors duration-300 size-5' />
              </div>
            </Link>

            <Link
              href={getEmailMessageUrl(
                EMAIL,
                'Halo, saya ingin bertanya tentang layanan dan produk dari Chinergy Shenindo.'
              )}
            >
              <div className='bg-gray-50 border border-gray-200 p-3 hover:bg-secondary transition-colors duration-300 group'>
                <IconMailFilled className='text-secondary group-hover:fill-white transition-colors duration-300 size-5' />
              </div>
            </Link>
          </div>
        </footer>
      </div>

      {isOpen && (
        <div
          className='fixed inset-0 bg-blue-950/50 z-40 transition-opacity duration-500 ease-in-out'
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
}
