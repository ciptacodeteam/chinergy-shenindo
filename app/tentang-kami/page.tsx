import SectionTitle from '@/components/titles/SectionTitle';
import {
  IconCertificate,
  IconGlobe,
  IconTools,
  IconUsers,
} from '@tabler/icons-react';
import Image from 'next/image';

const AboutPage = () => {
  return (
    <main>
      <SectionTitle
        title='Tentang Kami'
        description='Kami adalah tim yang berdedikasi untuk menyediakan informasi dan layanan terbaik bagi Anda.'
      />

      <section className='py-16 bg-white text-primary'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-16'>
            <h2 className='text-3xl font-bold text-primary mb-4 text-balance'>
              Mengenal CV. Chinergi Shenindo
            </h2>
            <p className='text-lg text-gray-600 max-w-3xl mx-auto text-pretty'>
              Mitra terpercaya Anda dalam solusi alat berat, berkomitmen pada
              kualitas dan inovasi.
            </p>
          </div>

          {/* Who We Are Section */}
          <div className='grid md:grid-cols-2 gap-12 items-center mb-20'>
            {/* Image Section */}
            <div className='relative w-full h-96 rounded-2xl overflow-hidden shadow-2xl group'>
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
            {/* Text Section */}
            <div className='flex flex-col justify-center h-full'>
              <div className='space-y-5 text-lg'>
                <p className='text-gray-800 leading-relaxed text-pretty'>
                  <span className='font-semibold text-primary'>
                    CV. Chinergi Shenindo
                  </span>{' '}
                  adalah perusahaan yang berdedikasi menyediakan layanan terbaik
                  di bidang{' '}
                  <span className='font-semibold'>
                    jasa pabrikasi, reparasi, dan pengadaan spare parts alat
                    berat
                  </span>
                  . Berbekal pengalaman bertahun-tahun, kami membangun reputasi
                  sebagai mitra solusi yang{' '}
                  <span className='font-semibold'>handal dan efisien</span>{' '}
                  untuk berbagai industri.
                </p>
                <ul className='space-y-4'>
                  <li className='flex items-start gap-3'>
                    <div>
                      <IconCertificate className='text-secondary' size={28} />
                    </div>
                    <span className='text-lg text-gray-800'>
                      <span className='font-semibold text-primary'>
                        Profesional & Berpengalaman
                      </span>{' '}
                      di bidang pabrikasi, reparasi, dan pengadaan spare parts
                      alat berat.
                    </span>
                  </li>
                  <li className='flex items-start gap-3'>
                    <div>
                      <IconTools className='text-secondary' size={28} />
                    </div>
                    <span className='text-lg text-gray-800'>
                      <span className='font-semibold text-primary'>
                        Layanan Berkualitas
                      </span>{' '}
                      dengan teknisi ahli dan produk teruji.
                    </span>
                  </li>
                  <li className='flex items-start gap-3'>
                    <div>
                      <IconGlobe className='text-secondary' size={28} />
                    </div>
                    <span className='text-lg text-gray-800'>
                      <span className='font-semibold text-primary'>
                        Jangkauan Luas
                      </span>{' '}
                      dan kemitraan strategis di seluruh Indonesia.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

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
                className='p-4 py-8 border border-gray-200 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 bg-third'
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
                      <div className='w-12 h-12 rounded-full bg-secondary flex items-center justify-center text-white font-bold text-xl shadow-lg'>
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

          {/* Why Choose Us Section */}
          <div className='text-center'>
            <h3 className='text-3xl font-semibold text-primary mb-8 text-balance'>
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
                  className='flex flex-col items-center p-4 py-8 bg-third rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group'
                >
                  {<item.icon size={42} className='text-primary mb-4' />}
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
        </div>
      </section>
    </main>
  );
};
export default AboutPage;
