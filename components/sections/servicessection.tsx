import Link from 'next/link';

import FactoryIcon from '@/assets/icons/factory.svg';
import ReparationIcon from '@/assets/icons/reparation.svg';
import SpearpartIcon from '@/assets/icons/spearpart.svg';

export default function ServicesSection() {
  return (
    <section>
      <div className='max-w-7xl mx-auto pt-16 pb-24 px-4 sm:px-6 lg:px-8'>
        <div className='flex flex-col gap-8 lg:flex-row lg:justify-between lg:items-center'>
          <div>
            <h2 className='text-3xl sm:text-4xl lg:text-6xl font-extrabold text-primary'>
              Layanan Kami
            </h2>
            <p className='text-gray-500 mt-3 w-full lg:w-2/3 text-base sm:text-lg'>
              Layanan Komprehensif dan Profesional untuk Menunjang Operasional
              dan Kebutuhan Industri.
            </p>
          </div>
          <div>
            <Link href='/kontak'>
              <button className='mt-4 sm:mt-8 py-3 sm:py-4 px-4 sm:px-6 bg-secondary text-white font-semibold hover:!bg-secondary/90 transition-colors duration-300'>
                Pelajari Lebih Lanjut
              </button>
            </Link>
          </div>
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-10 gap-6 sm:gap-8 items-stretch'>
          <div className='group h-full'>
            <div className='border h-full border-gray-200 transition-colors duration-300 group-hover:bg-primary flex flex-col justify-between rounded-lg overflow-hidden'>
              <div className='px-6 py-8 sm:px-10 sm:py-10'>
                <div className='size-12 sm:size-16 mb-6 text-secondary'>
                  <FactoryIcon
                    width={48}
                    height={48}
                    className='sm:w-16 sm:h-16'
                  />
                </div>
                <h3 className='text-xl sm:text-2xl lg:text-3xl font-bold text-primary group-hover:!text-white transition-colors duration-300'>
                  Pabrikasi
                </h3>
                <p className='text-gray-500 mt-4 group-hover:text-white transition-colors duration-300 text-sm sm:text-base'>
                  Pembuatan dan perakitan dengan standar presisi tinggi untuk
                  mendukung kebutuhan industri Anda.
                </p>
              </div>
              <div className='w-full h-2 bg-secondary'></div>
            </div>
          </div>

          <div className='group h-full'>
            <div className='border h-full border-gray-200 transition-colors duration-300 group-hover:bg-primary flex flex-col justify-between rounded-lg overflow-hidden'>
              <div className='px-6 py-8 sm:px-10 sm:py-10'>
                <div className='size-12 sm:size-16 mb-6 text-secondary'>
                  <ReparationIcon
                    width={48}
                    height={48}
                    className='sm:w-16 sm:h-16'
                  />
                </div>
                <h3 className='text-xl sm:text-2xl lg:text-3xl font-bold text-primary group-hover:!text-white transition-colors duration-300'>
                  Reparasi
                </h3>
                <p className='text-gray-500 mt-4 group-hover:!text-white transition-colors duration-300 text-sm sm:text-base'>
                  Perbaikan cepat dan handal untuk menjaga performa optimal
                  peralatan Anda.
                </p>
              </div>
              <div className='w-full h-2 bg-secondary'></div>
            </div>
          </div>

          <div className='group h-full'>
            <div className='border border-gray-200 h-full transition-colors duration-300 group-hover:bg-primary flex flex-col justify-between rounded-lg overflow-hidden'>
              <div className='px-6 py-8 sm:px-10 sm:py-10'>
                <div className='size-12 sm:size-16 mb-6 text-secondary'>
                  <SpearpartIcon
                    width={48}
                    height={48}
                    className='sm:w-16 sm:h-16'
                  />
                </div>
                <h3 className='text-xl sm:text-2xl lg:text-3xl font-bold text-primary group-hover:!text-white transition-colors duration-300'>
                  Spare Parts
                </h3>
                <p className='text-gray-500 mt-4 group-hover:!text-white transition-colors duration-300 text-sm sm:text-base'>
                  Pengadaan spare parts berkualitas untuk menjamin kelancaran
                  operasional Anda.
                </p>
              </div>
              <div className='w-full h-2 bg-secondary'></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
