'use client';

import Image from 'next/image';
import Link from 'next/link';

import img3 from '@/public/img/img3.webp';
import { motion } from 'framer-motion';

export default function AboutSection() {
  return (
    <section className='max-w-7xl mx-auto mb-42 px-4 sm:px-8 md:px-12 relative'>
      <div className='absolute inset-0 z-0 bg-[url("/img/pattern.jpg")] bg-no-repeat bg-auto ml-auto bg-right py-12 max-w-4xl'></div>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 z-10 relative py-12'>
        <div className='flex justify-center md:justify-end mb-8 md:mb-0'>
          <div className='relative w-full max-w-sm md:max-w-md lg:max-w-lg h-72 md:h-96 overflow-hidden'>
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: '100%' }}
              transition={{ duration: 0.4, delay: 0.1, ease: 'easeInOut' }}
              className='absolute left-0 top-0 h-full bg-primary z-10 rounded-lg'
            />
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: '100%' }}
              transition={{ duration: 0.4, delay: 0.5, ease: 'easeInOut' }}
              className='absolute left-0 top-0 h-full bg-secondary z-20 rounded-lg'
            />
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: '100%' }}
              transition={{ duration: 0.4, delay: 1, ease: 'easeInOut' }}
              className='absolute inset-0 z-30'
            >
              <Image
                src={img3}
                alt='About Us Image'
                className=' shadow-lg object-cover w-full h-full'
                fill
                priority
              />
            </motion.div>
          </div>
        </div>
        <div className='flex flex-col justify-center items-center md:items-start text-center md:text-left'>
          <div>
            <h1 className='mb-2 text-gray-400 text-base md:text-lg'>
              CV. Chinergy Shenindo
            </h1>
            <h1 className='text-2xl md:text-5xl font-bold text-primary'>
              Profil Perusahaan
            </h1>
            <p className='text-gray-500 mt-4 text-sm md:text-base'>
              CV. Chinergy Shenindo adalah perusahan yang terletak di provinsi
              Sumatera Utara tepatnya di kota Medan yang telah berdiri sejak
              tahun 2021. Kami menyediakan berbagai pelayanan seperti di bidang
              jasa pabrikasi, reparasi serta pengadaan spare parts untuk
              memenuhi kebutuhan mitra kami.
            </p>
            <Link href='/kontak'>
              <button className='mt-8 btn-primary hover:shadow-[0_12px_32px_-8px_rgba(171,196,43,0.8)]'>
                Pelajari Lebih Lanjut
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
