'use client';
import SectionTitle from '@/components/titles/SectionTitle';
import { getRandomImage } from '@/lib/utils';
import { IconSettings } from '@tabler/icons-react';
import Image from 'next/image';
import React, { useState } from 'react';

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
    images: [getRandomImage(), getRandomImage(), getRandomImage()],
  },
  {
    title: 'Starting Motor & Alternator',
    description:
      'Layanan perbaikan dan pemeliharaan untuk starting motor dan alternator guna memastikan performa optimal mesin diesel Anda.',
    icon: <IconSettings size={32} className='text-primary' />,
    images: [getRandomImage(), getRandomImage(), getRandomImage()],
  },
  {
    title: 'Pompa',
    description:
      'Layanan perbaikan dan pemeliharaan untuk berbagai jenis pompa guna memastikan performa optimal sistem Anda.',
    icon: <IconSettings size={32} className='text-primary' />,
    images: [getRandomImage(), getRandomImage(), getRandomImage()],
  },
  {
    title: 'Radiator',
    description:
      'Layanan perbaikan dan pemeliharaan untuk radiator guna memastikan performa optimal sistem pendinginan Anda.',
    icon: <IconSettings size={32} className='text-primary' />,
    images: [getRandomImage(), getRandomImage(), getRandomImage()],
  },
  {
    title: 'Jack Cylinder',
    description:
      'Layanan perbaikan dan pemeliharaan untuk jack cylinder guna memastikan performa optimal sistem hidrolik Anda.',
    icon: <IconSettings size={32} className='text-primary' />,
    images: [getRandomImage(), getRandomImage(), getRandomImage()],
  },
  {
    title: 'Travel Motor',
    description:
      'Layanan perbaikan dan pemeliharaan untuk travel motor guna memastikan performa optimal sistem transportasi Anda.',
    icon: <IconSettings size={32} className='text-primary' />,
    images: [getRandomImage(), getRandomImage(), getRandomImage()],
  },
  {
    title: 'Hose',
    description:
      'Layanan perbaikan dan pemeliharaan untuk hose guna memastikan performa optimal sistem hidrolik Anda.',
    icon: <IconSettings size={32} className='text-primary' />,
    images: [getRandomImage(), getRandomImage(), getRandomImage()],
  },
  {
    title: 'Komputer Excavator',
    description:
      'Layanan perbaikan dan pemeliharaan untuk komputer excavator guna memastikan performa optimal alat berat Anda.',
    icon: <IconSettings size={32} className='text-primary' />,
    images: [getRandomImage(), getRandomImage(), getRandomImage()],
  },
  {
    title: 'PTO Dump Truck',
    description:
      'Layanan perbaikan dan pemeliharaan untuk PTO dump truck guna memastikan performa optimal kendaraan angkut Anda.',
    icon: <IconSettings size={32} className='text-primary' />,
    images: [getRandomImage(), getRandomImage(), getRandomImage()],
  },
  {
    title: 'Final Drive',
    description:
      'Layanan perbaikan dan pemeliharaan untuk final drive guna memastikan performa optimal sistem transmisi Anda.',
    icon: <IconSettings size={32} className='text-primary' />,
    images: [getRandomImage(), getRandomImage(), getRandomImage()],
  },
  {
    title: 'Transmisi',
    description:
      'Layanan perbaikan dan pemeliharaan untuk transmisi guna memastikan performa optimal sistem penggerak Anda.',
    icon: <IconSettings size={32} className='text-primary' />,
    images: [getRandomImage(), getRandomImage(), getRandomImage()],
  },
  {
    title: 'Power Steering',
    description:
      'Layanan perbaikan dan pemeliharaan untuk power steering guna memastikan performa optimal sistem kemudi Anda.',
    icon: <IconSettings size={32} className='text-primary' />,
    images: [getRandomImage(), getRandomImage(), getRandomImage()],
  },
  {
    title: 'Exhaust Engine',
    description:
      'Layanan perbaikan dan pemeliharaan untuk exhaust engine guna memastikan performa optimal sistem pembuangan Anda.',
    icon: <IconSettings size={32} className='text-primary' />,
    images: [getRandomImage(), getRandomImage(), getRandomImage()],
  },
];

type ReparationCardProps = {
  item: Reparation;
};

const ReparationCard: React.FC<ReparationCardProps> = ({ item }) => {
  return (
    <div className='bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 border border-gray-100 group overflow-hidden flex flex-col'>
      <div className='relative'>
        <Image
          src={item.images[0]}
          alt={item.title}
          width={400}
          height={160}
          className='w-full h-40 object-cover rounded-t-2xl group-hover:scale-105 transition-transform duration-300'
        />
        <div className='absolute top-4 left-4 bg-white/80 rounded-full p-2 shadow-md'>
          {item.icon}
        </div>
      </div>
      <div className='flex-1 flex flex-col p-6'>
        <h3 className='text-lg font-semibold text-primary mb-2 group-hover:underline'>
          {item.title}
        </h3>
        <p className='text-gray-600 mb-4 flex-1'>{item.description}</p>
        <button className='mt-auto inline-flex items-center gap-2 text-primary font-medium hover:underline transition-colors'>
          Lihat Detail
          <svg
            className='w-4 h-4'
            fill='none'
            stroke='currentColor'
            strokeWidth={2}
            viewBox='0 0 24 24'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M9 5l7 7-7 7'
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

type ModalProps = {
  open: boolean;
  onClose: () => void;
  item?: Reparation;
};

const Modal: React.FC<ModalProps> = ({ open, onClose, item }) => {
  const [current, setCurrent] = useState(0);

  if (!open || !item) return null;

  const handlePrev = () => {
    setCurrent((prev) => (prev === 0 ? item.images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrent((prev) => (prev === item.images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className='fixed inset-0 z-50 flex items-center justify-center bg-black/40'>
      <div className='bg-white rounded-2xl shadow-2xl max-w-lg w-full relative p-6 animate-fade-in'>
        <button
          onClick={onClose}
          className='absolute top-4 right-4 text-gray-400 hover:text-primary transition-colors'
          aria-label='Close'
        >
          <svg
            width={24}
            height={24}
            fill='none'
            stroke='currentColor'
            strokeWidth={2}
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M6 18L18 6M6 6l12 12'
            />
          </svg>
        </button>
        <div className='flex flex-col items-center'>
          <div className='relative w-full mb-4'>
            <Image
              src={item.images[current]}
              alt={item.title}
              width={400}
              height={224}
              className='rounded-xl w-full h-56 object-cover shadow'
            />
            {item.images.length > 1 && (
              <>
                <button
                  onClick={handlePrev}
                  className='absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 rounded-full p-2 shadow hover:bg-primary/20 transition'
                  aria-label='Previous'
                >
                  <svg
                    width={20}
                    height={20}
                    fill='none'
                    stroke='currentColor'
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M15 19l-7-7 7-7'
                    />
                  </svg>
                </button>
                <button
                  onClick={handleNext}
                  className='absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 rounded-full p-2 shadow hover:bg-primary/20 transition'
                  aria-label='Next'
                >
                  <svg
                    width={20}
                    height={20}
                    fill='none'
                    stroke='currentColor'
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M9 5l7 7-7 7'
                    />
                  </svg>
                </button>
              </>
            )}
            {item.images.length > 1 && (
              <div className='absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1'>
                {item.images.map((_, idx) => (
                  <span
                    key={idx}
                    className={`block w-2 h-2 rounded-full ${
                      idx === current ? 'bg-primary' : 'bg-gray-300'
                    }`}
                  />
                ))}
              </div>
            )}
          </div>
          <div className='flex items-center gap-3 mb-2'>
            <span className='bg-primary/10 rounded-full p-2'>{item.icon}</span>
            <h3 className='text-xl font-semibold text-primary'>{item.title}</h3>
          </div>
          <p className='text-gray-700 text-center mb-4'>{item.description}</p>
        </div>
      </div>
    </div>
  );
};

const ReparationModal: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<Reparation | undefined>(undefined);

  // Expose modal open logic to cards
  React.useEffect(() => {
    // Attach to window for demo, in real app use context or props
    (window as any).openReparationModal = (item: Reparation) => {
      setSelected(item);
      setOpen(true);
    };
    return () => {
      delete (window as any).openReparationModal;
    };
  }, []);

  return <Modal open={open} onClose={() => setOpen(false)} item={selected} />;
};

const ReparationPage = () => {
  return (
    <>
      <header className='!bg-primary pt-20'>
        <SectionTitle
          title='Reparasi'
          description='Kami menyediakan layanan reparasi berkualitas tinggi untuk memastikan peralatan industri Anda tetap berfungsi optimal.'
        />
      </header>

      <section className='py-16 bg-gray-50'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
            {reparationData.map((item) => (
              <ReparationCard key={item.title} item={item} />
            ))}
          </div>
        </div>
      </section>

      {/* Modern Interactive Section */}
      <section className='py-20 bg-gradient-to-br from-primary/10 via-white to-gray-100'>
        <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='flex flex-col md:flex-row items-center gap-12'>
            <div className='flex-1'>
              <h2 className='text-3xl font-bold text-primary mb-4'>
                Kenapa Pilih Layanan Reparasi Kami?
              </h2>
              <ul className='space-y-4'>
                <li className='flex items-start gap-3'>
                  <span className='inline-flex items-center justify-center h-8 w-8 rounded-full bg-primary/10 text-primary'>
                    <IconSettings size={20} />
                  </span>
                  <span className='text-gray-700 font-medium'>
                    Teknisi berpengalaman & bersertifikat
                  </span>
                </li>
                <li className='flex items-start gap-3'>
                  <span className='inline-flex items-center justify-center h-8 w-8 rounded-full bg-primary/10 text-primary'>
                    <IconSettings size={20} />
                  </span>
                  <span className='text-gray-700 font-medium'>
                    Suku cadang asli & bergaransi
                  </span>
                </li>
                <li className='flex items-start gap-3'>
                  <span className='inline-flex items-center justify-center h-8 w-8 rounded-full bg-primary/10 text-primary'>
                    <IconSettings size={20} />
                  </span>
                  <span className='text-gray-700 font-medium'>
                    Layanan cepat & transparan
                  </span>
                </li>
              </ul>
            </div>
            <div className='flex-1 flex justify-center'>
              <div className='relative group'>
                <Image
                  src={getRandomImage()}
                  alt='Reparasi'
                  width={320}
                  height={224}
                  className='rounded-2xl shadow-xl w-80 h-56 object-cover group-hover:scale-105 transition-transform duration-300'
                />
                <div className='absolute inset-0 bg-primary/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300' />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modal Carousel Logic */}
      <ReparationModal />
    </>
  );
};
export default ReparationPage;
