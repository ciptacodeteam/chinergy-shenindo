import ContactForm from '@/components/forms/ContactForm';
import ContactDetailCard from '@/components/sections/ContactDetailCard';
import SectionTitle from '@/components/titles/SectionTitle';
import { Button } from '@headlessui/react';
import {
  IconBox,
  IconPhone,
  IconShieldCheck,
  IconStar,
  IconTruckDelivery,
} from '@tabler/icons-react';
import Image from 'next/image';

const advantages = [
  {
    title: 'Stok Lengkap',
    description:
      'Kami memiliki stok spare parts yang lengkap untuk berbagai jenis mesin dan peralatan industri.',
    icon: IconBox,
  },
  {
    title: 'Kualitas Terjamin',
    description:
      'Semua spare parts yang kami sediakan telah melalui proses seleksi ketat untuk memastikan kualitas terbaik.',
    icon: IconShieldCheck,
  },
  {
    title: 'Pengiriman Cepat',
    description:
      'Kami menawarkan layanan pengiriman cepat untuk memastikan spare parts Anda tiba tepat waktu.',
    icon: IconTruckDelivery,
  },
  {
    title: 'Harga Kompetitif',
    description:
      'Kami memberikan harga yang kompetitif tanpa mengorbankan kualitas produk.',
    icon: IconStar,
  },
];

const categories = [
  {
    title: 'Alat Berat',
    description: 'Spare parts untuk berbagai jenis alat berat.',
    imageUrl: '/images/categories/heavy-equipment.jpg',
  },
  {
    title: 'Otomotif',
    description: 'Spare parts untuk kendaraan seperti mobil atau truck.',
    imageUrl: '/images/categories/automotive.jpg',
  },
  {
    title: 'Spare Parts Lainnya',
    description: 'Berbagai spare parts untuk kebutuhan industri lainnya.',
    imageUrl: '/images/categories/others.jpg',
  },
];

const SparePartPage = () => {
  return (
    <>
      <header className='!bg-primary pt-20'>
        <SectionTitle
          title='Spare Parts'
          description='Kami menyediakan berbagai macam spare parts berkualitas tinggi untuk memenuhi kebutuhan industri Anda.'
        />
      </header>

      <main>
        <section className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-6 md:px-12 lg:px-24 py-12 md:py-20'>
          {advantages.map((advantage, index) => (
            <div
              key={index}
              className='flex flex-col items-center text-center p-6 border hover:shadow-md transition-shadow duration-300 border-gray-200'
            >
              <advantage.icon
                className='w-12 h-12 mb-4 text-primary'
                strokeWidth={1.5}
              />
              <h3 className='text-xl font-semibold mb-2'>{advantage.title}</h3>
              <p className='text-gray-600'>{advantage.description}</p>
            </div>
          ))}
        </section>

        <section className='bg-gray-50 py-12 md:py-20 px-6 md:px-12 lg:px-24'>
          <div className='flex flex-col items-center'>
            <h1 className='text-xl md:text-4xl font-bold text-center text-primary'>
              Kategori Spare Parts
            </h1>
            <p className='w-full md:w-1/2 mt-3 text-center text-base md:text-lg text-gray-500'>
              Jelajahi berbagai kategori spare parts yang kami sediakan untuk
              memenuhi kebutuhan spesifik Anda.
            </p>
          </div>

          <main className='grid grid-cols-1 md:grid-cols-3 gap-8 mt-14'>
            {categories.map((category, index) => (
              <div
                key={index}
                className='bg-white rounded-lg overflow-hidden shadow hover:shadow-md transition-shadow duration-300'
              >
                <Image
                  src={category.imageUrl}
                  alt={category.title}
                  width={500}
                  height={300}
                  className='w-full h-48 object-cover'
                />
                <div className='p-6'>
                  <h3 className='text-xl font-semibold mb-2'>
                    {category.title}
                  </h3>
                  <p className='text-gray-600'>{category.description}</p>
                </div>

                <footer>
                  <Button className='w-full bg-primary text-white py-3 hover:bg-primary-dark transition-colors duration-300 flex items-center justify-center'>
                    <IconPhone className='inline w-5 h-5 mr-2' />
                    Hubungi Kami
                  </Button>
                </footer>
              </div>
            ))}
          </main>
        </section>

        <section className='py-16 bg-white text-primary'>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <div className='text-center mb-16'>
              <h2 className='text-3xl font-bold text-primary mb-4 text-balance'>
                Mari Berdiskusi
              </h2>
              <p className='text-base text-gray-600 max-w-3xl mx-auto text-pretty'>
                Kami selalu terbuka untuk pertanyaan, kolaborasi, dan peluang
                baru. Jangan ragu untuk menghubungi kami.
              </p>
            </div>

            <div className='grid md:grid-cols-2 gap-12 items-start'>
              <ContactDetailCard />
              <ContactForm />
            </div>
          </div>
        </section>
      </main>
    </>
  );
};
export default SparePartPage;
