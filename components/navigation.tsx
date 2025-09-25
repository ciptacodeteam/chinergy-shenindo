'use client';

import Link from 'next/link';
import Image from 'next/image';

import { usePathname } from 'next/navigation';
import { useState } from 'react';

import logo from '@/public/img/logo.webp';

export default function NavigationBar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const menus = [
    { name: 'Beranda', href: '/' },
    { name: 'Tentang Kami', href: '/tentang-kami' },
    { name: 'Layanan', href: '/layanan' },
    { name: 'Produk', href: '/produk' },
    { name: 'Kontak', href: '/kontak' },
  ];

  return (
    <>
      <section>
        <div className='bg-primary'>
          <div className='max-w-7xl mx-auto py-3'>
            <div className='flex justify-between items-center'>
              <div className='flex gap-8'>
                <div className='flex items-center'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    strokeWidth='2'
                    stroke='currentColor'
                    className='size-5 text-white me-2'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z'
                    />
                  </svg>
                  <p className='text-white text-sm'>+62 811 9111 0292</p>
                </div>
                <div className='flex items-center'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    strokeWidth='2'
                    stroke='currentColor'
                    className='size-5 text-white me-2'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M16.5 12a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 1 0-2.636 6.364M16.5 12V8.25'
                    />
                  </svg>

                  <p className='text-white text-sm'>
                    chinergishenindoid@gmail.com
                  </p>
                </div>
                <div className='flex items-center'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    strokeWidth='2'
                    stroke='currentColor'
                    className='size-5 text-white me-2'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z'
                    />
                  </svg>
                  <p className='text-white text-sm'>
                    Mon - Sat 8:00 - 17:30, Sunday - CLOSED
                  </p>
                </div>
              </div>
              <div className='flex gap-6'>
                <Link href={''}>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    x='0px'
                    y='0px'
                    width='22'
                    height='22'
                    viewBox='0 0 30 30'
                    fill='currentColor'
                    className='text-white hover:!text-white cursor-pointer'
                  >
                    <path d='M 15 3 C 8.373 3 3 8.373 3 15 C 3 17.251208 3.6323415 19.350068 4.7109375 21.150391 L 3.1074219 27 L 9.0820312 25.431641 C 10.829354 26.425062 12.84649 27 15 27 C 21.627 27 27 21.627 27 15 C 27 8.373 21.627 3 15 3 z M 10.892578 9.4023438 C 11.087578 9.4023438 11.287937 9.4011562 11.460938 9.4101562 C 11.674938 9.4151563 11.907859 9.4308281 12.130859 9.9238281 C 12.395859 10.509828 12.972875 11.979906 13.046875 12.128906 C 13.120875 12.277906 13.173313 12.453437 13.070312 12.648438 C 12.972312 12.848437 12.921344 12.969484 12.777344 13.146484 C 12.628344 13.318484 12.465078 13.532109 12.330078 13.662109 C 12.181078 13.811109 12.027219 13.974484 12.199219 14.271484 C 12.371219 14.568484 12.968563 15.542125 13.851562 16.328125 C 14.986562 17.342125 15.944188 17.653734 16.242188 17.802734 C 16.540187 17.951734 16.712766 17.928516 16.884766 17.728516 C 17.061766 17.533516 17.628125 16.864406 17.828125 16.566406 C 18.023125 16.268406 18.222188 16.319969 18.492188 16.417969 C 18.766188 16.515969 20.227391 17.235766 20.525391 17.384766 C 20.823391 17.533766 21.01875 17.607516 21.09375 17.728516 C 21.17075 17.853516 21.170828 18.448578 20.923828 19.142578 C 20.676828 19.835578 19.463922 20.505734 18.919922 20.552734 C 18.370922 20.603734 17.858562 20.7995 15.351562 19.8125 C 12.327563 18.6215 10.420484 15.524219 10.271484 15.324219 C 10.122484 15.129219 9.0605469 13.713906 9.0605469 12.253906 C 9.0605469 10.788906 9.8286563 10.071437 10.097656 9.7734375 C 10.371656 9.4754375 10.692578 9.4023438 10.892578 9.4023438 z'></path>
                  </svg>
                </Link>

                <Link href={''}>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    x='0px'
                    y='0px'
                    width='22'
                    height='22'
                    viewBox='0 0 30 30'
                    fill='currentColor'
                    className='text-white cursor-pointer'
                  >
                    <path d='M 9.9980469 3 C 6.1390469 3 3 6.1419531 3 10.001953 L 3 20.001953 C 3 23.860953 6.1419531 27 10.001953 27 L 20.001953 27 C 23.860953 27 27 23.858047 27 19.998047 L 27 9.9980469 C 27 6.1390469 23.858047 3 19.998047 3 L 9.9980469 3 z M 22 7 C 22.552 7 23 7.448 23 8 C 23 8.552 22.552 9 22 9 C 21.448 9 21 8.552 21 8 C 21 7.448 21.448 7 22 7 z M 15 9 C 18.309 9 21 11.691 21 15 C 21 18.309 18.309 21 15 21 C 11.691 21 9 18.309 9 15 C 9 11.691 11.691 9 15 9 z M 15 11 A 4 4 0 0 0 11 15 A 4 4 0 0 0 15 19 A 4 4 0 0 0 19 15 A 4 4 0 0 0 15 11 z'></path>
                  </svg>
                </Link>

                <Link href={''}>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 22 22'
                    fill='currentColor'
                    className='text-white size-5 hover:!text-white cursor-pointer'
                  >
                    <path d='M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z' />
                    <path d='M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z' />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className='flex bg-third'>
          <Link
            href={''}
            className='w-1/4 font-bold py-4 flex justify-center items-center'
          >
            <Image src={logo} alt='logo' className='w-15 me-4' />
            <div className='text-xl leading-6'>
              <p className='text-primary'>CHINERGI</p>
              <p className='text-primary'>SHENINDO</p>
            </div>
          </Link>

          <nav className='flex-1 bg-white'>
            <ul className='grid grid-cols-5 border-gray-200 divide-x border-y h-full text-center font-medium'>
              {menus.map((menu, idx) => (
                <li
                  key={idx}
                  className='relative z-10 border-gray-200 flex items-center justify-center group'
                >
                  <Link
                    href={menu.href}
                    className={`flex items-center justify-center transition-colors duration-300 
                                            ${
                                              pathname === menu.href
                                                ? 'text-secondary'
                                                : 'text-primary'
                                            }`}
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
        className={`fixed top-0 right-0 h-full w-[400px] bg-white shadow-lg z-50 transform transition-transform duration-500 px-10 py-12 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
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

        <div>
          <p className='text-primary text-sm'>
            CV. Chinergi Shenindo menyediakan berbagai pelayanan seperti di
            bidang jasa pabrikasi, reparasi serta pengadaan spare parts untuk
            memenuhi kebutuhan mitra kami.
          </p>
        </div>

        <div>
          <h1 className='font-semibold text-primary text-2xl mt-16 mb-6'>
            Contact Info
          </h1>

          <div className='space-y-5'>
            <div className='flex items-center'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth='2'
                stroke='currentColor'
                className='size-5 text-secondary me-4 flex-shrink-0'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z'
                />
              </svg>
              <p className='text-primary'>+62 811 9111 0292</p>
            </div>
            <div className='flex items-center'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth='2'
                stroke='currentColor'
                className='size-5 text-secondary me-4 flex-shrink-0 mt-1'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M16.5 12a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 1 0-2.636 6.364M16.5 12V8.25'
                />
              </svg>

              <p className='text-primary'>chinergishenindoid@gmail.com</p>
            </div>
            <div className='flex items-center'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth='2'
                stroke='currentColor'
                className='size-5 text-secondary me-4 flex-shrink-0'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z'
                />
              </svg>
              <p className='text-primary'>
                Jl. Cemara, No.86, Pulo Brayan Darat II, Medan Timur, North
                Sumatra 20239
              </p>
            </div>
          </div>
        </div>

        <div>
          <h1 className='font-semibold text-primary text-2xl mt-16 mb-6'>
            Follow Us
          </h1>

          <div className='flex gap-4'>
            <div className='bg-gray-50 border border-gray-200 p-3 hover:bg-secondary transition-colors duration-300 group'>
              <Link href={''}>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='22'
                  height='22'
                  viewBox='0 0 30 30'
                  fill='currentColor'
                  className='text-secondary group-hover:fill-white transition-colors duration-300'
                >
                  <path d='M 15 3 C 8.373 3 3 8.373 3 15 C 3 17.251208 3.6323415 19.350068 4.7109375 21.150391 L 3.1074219 27 L 9.0820312 25.431641 C 10.829354 26.425062 12.84649 27 15 27 C 21.627 27 27 21.627 27 15 C 27 8.373 21.627 3 15 3 z M 10.892578 9.4023438 C 11.087578 9.4023438 11.287937 9.4011562 11.460938 9.4101562 C 11.674938 9.4151563 11.907859 9.4308281 12.130859 9.9238281 C 12.395859 10.509828 12.972875 11.979906 13.046875 12.128906 C 13.120875 12.277906 13.173313 12.453437 13.070312 12.648438 C 12.972312 12.848437 12.921344 12.969484 12.777344 13.146484 C 12.628344 13.318484 12.465078 13.532109 12.330078 13.662109 C 12.181078 13.811109 12.027219 13.974484 12.199219 14.271484 C 12.371219 14.568484 12.968563 15.542125 13.851562 16.328125 C 14.986562 17.342125 15.944188 17.653734 16.242188 17.802734 C 16.540187 17.951734 16.712766 17.928516 16.884766 17.728516 C 17.061766 17.533516 17.628125 16.864406 17.828125 16.566406 C 18.023125 16.268406 18.222188 16.319969 18.492188 16.417969 C 18.766188 16.515969 20.227391 17.235766 20.525391 17.384766 C 20.823391 17.533766 21.01875 17.607516 21.09375 17.728516 C 21.17075 17.853516 21.170828 18.448578 20.923828 19.142578 C 20.676828 19.835578 19.463922 20.505734 18.919922 20.552734 C 18.370922 20.603734 17.858562 20.7995 15.351562 19.8125 C 12.327563 18.6215 10.420484 15.524219 10.271484 15.324219 C 10.122484 15.129219 9.0605469 13.713906 9.0605469 12.253906 C 9.0605469 10.788906 9.8286563 10.071437 10.097656 9.7734375 C 10.371656 9.475437 10.692578 9.4023438 10.892578 9.4023438 z'></path>
                </svg>
              </Link>
            </div>

            <div className='bg-gray-50 border border-gray-200 p-3 hover:bg-secondary transition-colors duration-300 group'>
              <Link href={''}>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  x='0px'
                  y='0px'
                  width='22'
                  height='22'
                  viewBox='0 0 30 30'
                  fill='currentColor'
                  className='text-secondary group-hover:fill-white transition-colors duration-300'
                >
                  <path d='M 9.9980469 3 C 6.1390469 3 3 6.1419531 3 10.001953 L 3 20.001953 C 3 23.860953 6.1419531 27 10.001953 27 L 20.001953 27 C 23.860953 27 27 23.858047 27 19.998047 L 27 9.9980469 C 27 6.1390469 23.858047 3 19.998047 3 L 9.9980469 3 z M 22 7 C 22.552 7 23 7.448 23 8 C 23 8.552 22.552 9 22 9 C 21.448 9 21 8.552 21 8 C 21 7.448 21.448 7 22 7 z M 15 9 C 18.309 9 21 11.691 21 15 C 21 18.309 18.309 21 15 21 C 11.691 21 9 18.309 9 15 C 9 11.691 11.691 9 15 9 z M 15 11 A 4 4 0 0 0 11 15 A 4 4 0 0 0 15 19 A 4 4 0 0 0 19 15 A 4 4 0 0 0 15 11 z'></path>
                </svg>
              </Link>
            </div>

            <div className='bg-gray-50 border border-gray-200 p-3 hover:bg-secondary transition-colors duration-300 group'>
              <Link href={''}>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 22 22'
                  fill='currentColor'
                  className='text-secondary group-hover:fill-white transition-colors duration-300 size-5'
                >
                  <path d='M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z' />
                  <path d='M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z' />
                </svg>
              </Link>
            </div>
          </div>
        </div>
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
