'use client';
import CTASection from '@/components/sections/CTASection';
import SectionTitle from '@/components/titles/SectionTitle';
import { getRandomImage } from '@/lib/utils';
import { IconSettings } from '@tabler/icons-react';
import Image from 'next/image';
import React from 'react';

type Reparation = {
  title: string;
  description: string;
  icon: React.ReactNode;
  images: string[];
};

const reparationData: Reparation[] = [
  {
    title: 'Full Injection Pump (FIP) & Injector',
    description:
      'Layanan perbaikan dan pemeliharaan untuk Full Injection Pump (FIP) dan injector guna memastikan performa optimal mesin diesel Anda.',
    icon: <IconSettings size={32} className='text-primary' />,
    images: [
      getRandomImage(),
      getRandomImage(),
      getRandomImage(),
      getRandomImage(),
      getRandomImage(),
      getRandomImage(),
    ],
  },
  {
    title: 'Starting Motor & Alternator',
    description:
      'Layanan perbaikan dan pemeliharaan untuk starting motor dan alternator guna memastikan performa optimal mesin diesel Anda.',
    icon: <IconSettings size={32} className='text-primary' />,
    images: [
      getRandomImage(),
      getRandomImage(),
      getRandomImage(),
      getRandomImage(),
      getRandomImage(),
    ],
  },
  {
    title: 'Pompa',
    description:
      'Layanan perbaikan dan pemeliharaan untuk berbagai jenis pompa guna memastikan performa optimal sistem Anda.',
    icon: <IconSettings size={32} className='text-primary' />,
    images: [
      getRandomImage(),
      getRandomImage(),
      getRandomImage(),
      getRandomImage(),
      getRandomImage(),
    ],
  },
  {
    title: 'Radiator',
    description:
      'Layanan perbaikan dan pemeliharaan untuk radiator guna memastikan performa optimal sistem pendinginan Anda.',
    icon: <IconSettings size={32} className='text-primary' />,
    images: [
      getRandomImage(),
      getRandomImage(),
      getRandomImage(),
      getRandomImage(),
      getRandomImage(),
    ],
  },
  {
    title: 'Jack Cylinder',
    description:
      'Layanan perbaikan dan pemeliharaan untuk jack cylinder guna memastikan performa optimal sistem hidrolik Anda.',
    icon: <IconSettings size={32} className='text-primary' />,
    images: [
      getRandomImage(),
      getRandomImage(),
      getRandomImage(),
      getRandomImage(),
      getRandomImage(),
    ],
  },
  {
    title: 'Travel Motor',
    description:
      'Layanan perbaikan dan pemeliharaan untuk travel motor guna memastikan performa optimal sistem transportasi Anda.',
    icon: <IconSettings size={32} className='text-primary' />,
    images: [
      getRandomImage(),
      getRandomImage(),
      getRandomImage(),
      getRandomImage(),
      getRandomImage(),
    ],
  },
  {
    title: 'Hose',
    description:
      'Layanan perbaikan dan pemeliharaan untuk hose guna memastikan performa optimal sistem hidrolik Anda.',
    icon: <IconSettings size={32} className='text-primary' />,
    images: [
      getRandomImage(),
      getRandomImage(),
      getRandomImage(),
      getRandomImage(),
      getRandomImage(),
    ],
  },
  {
    title: 'Komputer Excavator',
    description:
      'Layanan perbaikan dan pemeliharaan untuk komputer excavator guna memastikan performa optimal alat berat Anda.',
    icon: <IconSettings size={32} className='text-primary' />,
    images: [
      getRandomImage(),
      getRandomImage(),
      getRandomImage(),
      getRandomImage(),
      getRandomImage(),
    ],
  },
  {
    title: 'PTO Dump Truck',
    description:
      'Layanan perbaikan dan pemeliharaan untuk PTO dump truck guna memastikan performa optimal kendaraan angkut Anda.',
    icon: <IconSettings size={32} className='text-primary' />,
    images: [
      getRandomImage(),
      getRandomImage(),
      getRandomImage(),
      getRandomImage(),
      getRandomImage(),
    ],
  },
  {
    title: 'Final Drive',
    description:
      'Layanan perbaikan dan pemeliharaan untuk final drive guna memastikan performa optimal sistem transmisi Anda.',
    icon: <IconSettings size={32} className='text-primary' />,
    images: [
      getRandomImage(),
      getRandomImage(),
      getRandomImage(),
      getRandomImage(),
      getRandomImage(),
    ],
  },
  {
    title: 'Transmisi',
    description:
      'Layanan perbaikan dan pemeliharaan untuk transmisi guna memastikan performa optimal sistem penggerak Anda.',
    icon: <IconSettings size={32} className='text-primary' />,
    images: [
      getRandomImage(),
      getRandomImage(),
      getRandomImage(),
      getRandomImage(),
      getRandomImage(),
    ],
  },
  {
    title: 'Power Steering',
    description:
      'Layanan perbaikan dan pemeliharaan untuk power steering guna memastikan performa optimal sistem kemudi Anda.',
    icon: <IconSettings size={32} className='text-primary' />,
    images: [
      getRandomImage(),
      getRandomImage(),
      getRandomImage(),
      getRandomImage(),
      getRandomImage(),
    ],
  },
  {
    title: 'Exhaust Engine',
    description:
      'Layanan perbaikan dan pemeliharaan untuk exhaust engine guna memastikan performa optimal sistem pembuangan Anda.',
    icon: <IconSettings size={32} className='text-primary' />,
    images: [
      getRandomImage(),
      getRandomImage(),
      getRandomImage(),
      getRandomImage(),
      getRandomImage(),
    ],
  },
];

const ReparationPage = () => {
  return (
    <>
      <header className='!bg-primary pt-20'>
        <SectionTitle
          title='Reparasi'
          description='Kami menyediakan layanan reparasi berkualitas tinggi untuk memastikan peralatan industri Anda tetap berfungsi optimal.'
        />
      </header>

      <section className='py-16'>
        {reparationData.map((item) => (
          <div key={item.title} className='p-6 even:bg-gray-50 odd:bg-white'>
            <div className=' max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
              <header className='text-center mb-4 px-4 py-8 bg-white border border-gray-200'>
                <h2 className='text-2xl font-semibold text-primary'>
                  {item.title}
                </h2>
                <p className='mt-2 text-gray-500 max-w-3xl mx-auto'>
                  {item.description}
                </p>
              </header>

              <div
                className='mt-10 columns-1 sm:columns-2 md:columns-3'
                style={{ columnGap: '1rem' }}
              >
                {item.images.map((src, index) => {
                  // deterministic "random" height per image so layout is stable across renders
                  const dynamicHeight = 160 + ((index * 73) % 220); // range ~160-379px
                  return (
                    <div
                      key={index}
                      className='inline-block w-full mb-4 break-inside-avoid rounded-lg overflow-hidden bg-white shadow'
                      style={{ height: dynamicHeight }}
                    >
                      <Image
                        src={src}
                        alt={`${item.title} image ${index + 1}`}
                        loading='lazy'
                        width={400}
                        height={dynamicHeight}
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                        }}
                        className='transform hover:scale-105 transition-transform duration-300'
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        ))}
      </section>

      <CTASection
        title='Butuh Bantuan Reparasi?'
        description='Hubungi kami hari ini untuk mendapatkan layanan reparasi terbaik dan menjaga peralatan industri Anda tetap dalam kondisi prima.'
      />
    </>
  );
};
export default ReparationPage;
