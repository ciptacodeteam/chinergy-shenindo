import SectionTitle from '@/components/titles/SectionTitle';
import {
  IconCertificate,
  IconGlobe,
  IconPhone,
  IconTools,
  IconUsers,
} from '@tabler/icons-react';
import Image from 'next/image';
import Link from 'next/link';

const companyBenefits = [
  {
    icon: IconCertificate,
    title: 'Profesional & Berpengalaman',
    description:
      'Di bidang pabrikasi, reparasi, dan pengadaan spare parts alat berat.',
  },
  {
    icon: IconTools,
    title: 'Layanan Berkualitas',
    description: 'Dengan teknisi ahli dan produk teruji.',
  },
  {
    icon: IconCertificate,
    title: 'Jangkauan Luas',
    description: 'Dengan kemitraan strategis di seluruh Indonesia.',
  },
];

const AboutPage = () => {
  return (
    <main>
      <SectionTitle
        title='Tentang Kami'
        description='Kami adalah tim yang berdedikasi untuk menyediakan informasi dan layanan terbaik bagi Anda.'
      />

      <section className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16'>
        {/* Who We Are Section */}
        <div className='grid md:grid-cols-2 gap-16 items-center mb-20'>
          {/* Text Section */}
          <div className='flex flex-col justify-center h-full'>
            <div className='space-y-5 '>
              <header>
                <h2 className='text-2xl font-extrabold font-popins text-primary text-balance'>
                  Profil Perusahaan
                </h2>
                <p className='text-gray-800 leading-relaxed text-pretty italic'>
                  CV. Chinergi Shenindo
                </p>
              </header>
              <p className='text-gray-800 leading-relaxed text-pretty text-sm mb-8'>
                CV. Chinergi Shenindo adalah perusahaan yang berdedikasi
                menyediakan layanan terbaik di bidang jasa pabrikasi, reparasi,
                dan pengadaan spare parts alat berat . Berbekal pengalaman
                bertahun-tahun, kami membangun reputasi sebagai mitra solusi
                yang handal dan efisien untuk berbagai industri.
              </p>
              <ul className='space-y-4'>
                {companyBenefits.map((benefit) => (
                  <li
                    key={benefit.title}
                    className='flex items-start gap-3 border-b pb-4 border-gray-200 last:border-0'
                  >
                    <div className='bg-primary p-2 rounded-full flex items-center justify-center'>
                      <benefit.icon
                        className='text-white'
                        size={24}
                        strokeWidth={1}
                      />
                    </div>
                    <div>
                      <p className='font-semibold text-primary text-sm'>
                        {benefit.title}
                      </p>
                      <p className='text-gray-800 text-sm leading-relaxed italic'>
                        {benefit.description}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          {/* Image Section */}
          <div className='relative w-full h-full overflow-hidden group'>
            <Image
              src='/img/img1.webp'
              alt='Heavy equipment repair'
              fill
              className='object-cover transition-transform duration-500 group-hover:scale-105 group-hover:brightness-50'
              priority
            />
            <div className='absolute inset-0 bg-primary/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
              <span className='text-white text-3xl font-bold tracking-wide text-center px-6 drop-shadow-lg'>
                Keahlian Kami
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Mission, Vision, Values Section */}
        <div className='grid md:grid-cols-3 gap-8 text-center mb-20'>
          {[
            {
              title: 'Misi Kami',
              desc: 'Menjadi penyedia solusi alat berat terkemuka yang inovatif dan terpercaya, memberikan nilai tambah maksimal bagi pelanggan melalui layanan dan produk unggulan.',
            },
            {
              title: 'Visi Kami',
              desc: 'Membangun kemitraan jangka panjang yang kokoh dengan pelanggan, didasari oleh kualitas layanan dan produk yang tak tertandingi, serta integritas bisnis yang tinggi.',
            },
            {
              title: 'Nilai Kami',
              desc: 'Profesionalisme, Kualitas, Inovasi, Integritas, dan Kepuasan Pelanggan adalah inti dari setiap tindakan dan keputusan yang kami ambil.',
            },
          ].map((item) => (
            <div
              key={item.title}
              className='p-4 py-8 border border-gray-200 transition-shadow duration-300 bg-third'
            >
              <h4 className='text-2xl font-semibold text-primary mb-4'>
                {item.title}
              </h4>
              <p className='text-gray-700 leading-relaxed text-pretty'>
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Our History/Milestones Section */}
        <div className='mb-20'>
          <h3 className='text-3xl font-semibold text-primary text-center mb-12 text-balance'>
            Perjalanan Kami
          </h3>
          <div className='relative'>
            <div className='absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-secondary hidden md:block'></div>
            <ul className='space-y-16'>
              {[
                {
                  year: '2010',
                  title: 'Pendirian Perusahaan',
                  desc: 'CV. Chinergi Shenindo didirikan dengan visi untuk menjadi penyedia solusi alat berat terkemuka di Indonesia. Memulai perjalanan dengan fokus pada reparasi dan pengadaan spare parts.',
                  align: 'left',
                },
                {
                  year: '2015',
                  title: 'Ekspansi Layanan Pabrikasi',
                  desc: 'Memperluas jangkauan layanan dengan memperkenalkan divisi pabrikasi, memenuhi permintaan pasar akan komponen alat berat yang presisi dan berkualitas tinggi.',
                  align: 'right',
                },
                {
                  year: '2020',
                  title: 'Kemitraan Strategis',
                  desc: 'Membangun kemitraan strategis dengan produsen spare parts terkemuka, memperkuat rantai pasokan dan menjamin ketersediaan produk asli untuk pelanggan.',
                  align: 'left',
                },
                {
                  year: '2025',
                  title: 'Inovasi Digital',
                  desc: 'Meluncurkan platform digital untuk mempermudah akses pelanggan terhadap informasi produk, layanan, dan dukungan teknis, meningkatkan efisiensi dan kepuasan pelanggan.',
                  align: 'right',
                },
              ].map((milestone, idx) => (
                <li
                  key={milestone.year}
                  className='flex flex-col md:flex-row items-center justify-between md:even:flex-row-reverse'
                >
                  <div
                    className={`md:w-1/2 p-4 flex justify-center ${
                      milestone.align === 'right'
                        ? 'md:justify-end md:odd:justify-start'
                        : 'md:justify-start md:odd:justify-end'
                    }`}
                  >
                    <div className='w-12 h-12 rounded-full bg-secondary flex items-center justify-center text-white font-bold text-xl'>
                      {idx + 1}
                    </div>
                  </div>
                  <div
                    className={`md:w-1/2 p-4 text-center ${
                      milestone.align === 'left'
                        ? 'md:text-left'
                        : 'md:text-right'
                    }`}
                  >
                    <h4 className='text-2xl font-bold text-primary mb-2'>
                      {milestone.year} - {milestone.title}
                    </h4>
                    <p className='text-gray-700 text-pretty'>
                      {milestone.desc}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16'>
        {/* Why Choose Us Section */}
        <div className='text-center'>
          <h3 className='text-3xl font-semibold text-primary mb-10 text-balance'>
            Mengapa Memilih Kami?
          </h3>
          <ul className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
            {[
              {
                icon: IconGlobe,
                alt: 'Jangkauan Luas',
                title: 'Jangkauan Luas',
                desc: 'Melayani kebutuhan di berbagai wilayah dengan jaringan distribusi yang kuat.',
              },
              {
                icon: IconTools,
                alt: 'Tim Ahli',
                title: 'Tim Ahli',
                desc: 'Didukung oleh teknisi dan insinyur berpengalaman yang siap memberikan solusi terbaik.',
              },
              {
                icon: IconCertificate,
                alt: 'Produk Berkualitas',
                title: 'Produk Berkualitas',
                desc: 'Menyediakan spare parts asli dan teruji, serta hasil pabrikasi dengan standar presisi tinggi.',
              },
              {
                icon: IconUsers,
                alt: 'Fokus Pelanggan',
                title: 'Fokus Pelanggan',
                desc: 'Kepuasan Anda adalah prioritas utama kami, dengan layanan yang responsif dan personal.',
              },
            ].map((item) => (
              <li
                key={item.title}
                className='flex flex-col items-center p-4 py-8 bg-third rounded-xl transition-all duration-300 group'
              >
                <div className='bg-primary p-3 rounded-full mb-4 flex items-center justify-center transition-colors duration-300'>
                  {<item.icon size={32} className='text-white' />}
                </div>
                <h5 className='text-xl font-semibold text-primary mb-2'>
                  {item.title}
                </h5>
                <p className='text-gray-700 text-center text-pretty text-sm'>
                  {item.desc}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className='mt-8'>
        <div className='p-8 py-12 flex flex-col items-center text-center relative before:bg-[url("/img/img3.webp")] before:bg-cover before:bg-center before:contents-[""] before:absolute before:inset-0 before:brightness-50 before:-z-10'>
          <h3 className='text-3xl font-bold text-white mb-4'>
            Siap Bermitra dengan Kami?
          </h3>
          <p className='text-lg text-gray-300 mb-8 max-w-2xl'>
            Hubungi kami untuk konsultasi atau penawaran solusi alat berat dan
            spare parts.
          </p>
          <Link
            prefetch
            href='/kontak'
            className='bg-secondary text-white font-semibold px-8 py-3 rounded-lg hover:bg-secondary/80 transition-colors duration-200 flex items-center justify-center'
          >
            <IconPhone className='inline mr-2' size={20} />
            Hubungi Kami
          </Link>
        </div>
      </section>
    </main>
  );
};
export default AboutPage;
