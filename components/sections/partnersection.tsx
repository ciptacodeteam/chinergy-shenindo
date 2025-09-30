import { IconBuildings } from '@tabler/icons-react';

export default function PartnerSection() {
  const companies = [
    'PT. Karya Tanah Subur',
    'PT. Surya Panen Subur',
    'PT. Perkebunan Lembah Bhakti',
    'PT. Kimia Tirta Utama',
    'PT. Eka Dura Indonesia',
    'PT. Sawit Asahan Indah',
    'PT. Sari Lembah Subur',
    'PT. Tunggal Perkasa Plantation',
    'PT. Sari Aditya Loka',
  ];

  return (
    <section className='bg-primary py-12 md:py-20 mb-20'>
      <div className='px-4 md:px-0 max-w-7xl mx-auto'>
        <div className='flex flex-col items-center'>
          <h1 className='text-3xl md:text-6xl font-bold text-white text-center'>
            Partner Kami
          </h1>
          <p className='text-white w-full md:w-1/2 mt-3 text-center text-base md:text-lg'>
            Kami telah dipercayai oleh beberapa perusahaan dalam penyediaan jasa
            dan produk yang telah menjadi mitra kami selama ini.
          </p>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-10 md:mt-20'>
          {companies.map((company, i) => (
            <div
              key={i}
              className='flex items-center border border-white/30 rounded-lg p-4 md:p-6 bg-slate-400/20 hover:bg-primary/40 transition duration-300'
            >
              <div className='w-12 h-12 md:w-16 md:h-16 flex items-center justify-center flex-shrink-0'>
                <IconBuildings className='w-8 h-8 md:w-12 md:h-12 text-secondary' />
              </div>
              <h1 className='ml-3 md:ml-4 text-white font-semibold text-base md:text-xl'>
                {company}
              </h1>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
