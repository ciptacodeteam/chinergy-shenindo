import Image from 'next/image';
import Link from 'next/link';

import img3 from '@/public/img/img3.webp';

export default function AboutSection() {
  return (
    <section className='max-w-7xl mx-auto mb-42 px-4 sm:px-8 md:px-12'>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16'>
        <div className='flex justify-center md:justify-end mb-8 md:mb-0'>
          <Image
            alt='about us'
            src={img3}
            width={350}
            className='rounded-lg w-full max-w-sm md:max-w-none md:w-[450px] h-auto'
            priority
          />
        </div>
        <div className='flex flex-col justify-center items-center md:items-start text-center md:text-left'>
          <div>
            <h1 className='mb-2 text-gray-500 text-base md:text-lg'>
              CV. Chinergy Shenindo
            </h1>
            <h1 className='text-3xl md:text-6xl font-bold text-primary'>
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
              <button className='mt-8 py-3 px-5 md:py-4 md:px-6 bg-secondary text-white font-semibold hover:!bg-secondary/90 transition-colors duration-300 rounded'>
                Pelajari Lebih Lanjut
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
