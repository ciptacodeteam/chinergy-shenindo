import Image from 'next/image';

import img2 from '@/public/img/img2.webp';

import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from '@headlessui/react';
import { MinusSmallIcon, PlusSmallIcon } from '@heroicons/react/24/outline';

const faqs = [
  {
    question: 'Apa itu Chinergy Shenindo?',
    answer:
      'Chinergy Shenindo adalah perusahaan yang bergerak di bidang jasa pabrikasi, reparasi, serta pengadaan spare parts untuk berbagai kebutuhan industri.',
  },
  {
    question: 'Di mana lokasi CV. Chinergy Shenindo?',
    answer:
      'Perusahaan kami berlokasi di Provinsi Sumatera Utara, tepatnya di Jl. Cemara, RW.no: 86, Pulo Brayan Darat II, Kec. Medan Timur, Kota Medan, Sumatera Utara 20239',
  },
  {
    question: 'Layanan apa saja yang ditawarkan?',
    answer:
      'Kami menyediakan jasa layanan pabrikasi, reparasi, serta pengadaan spare parts untuk mendukung kelancaran operasional mitra kami.',
  },
  {
    question: 'Apa keunggulan Chinergy Shenindo dibanding kompetitor?',
    answer:
      'Kami mengutamakan keberlanjutan, efisiensi teknologi, dan jaringan kemitraan yang luas, sehingga setiap proyek dapat berjalan dengan kualitas terbaik dan hasil yang berdampak jangka panjang.',
  },
  {
    question: 'Bagaimana cara menjalin kerja sama dengan Chinergy Shenindo?',
    answer:
      'Anda dapat menghubungi kami melalui kontak resmi untuk diskusi lebih lanjut terkait kebutuhan proyek, peluang investasi, atau potensi kolaborasi bisnis.',
  },
];

export default function FAQSection() {
  return (
    <section className='max-w-7xl mx-auto mb-32 px-4 sm:px-6 lg:px-12'>
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center'>
        <div className='flex justify-center lg:justify-end items-start h-full'>
          <Image
            alt='about us'
            src={img2}
            width={350}
            className='object-contain w-full max-w-md sm:max-w-sm lg:max-w-md'
          />
        </div>

        <div className='mx-auto w-full max-w-2xl px-0 py-8 sm:px-4 lg:px-6 lg:py-12'>
          <h2 className='text-3xl sm:text-4xl lg:text-5xl font-semibold text-primary leading-tight'>
            Pertanyaan yang Sering Diajukan
          </h2>
          <p className='mt-4 text-gray-500'>
            Temukan jawaban atas pertanyaan umum mengenai Chinergy Shenindo,
            layanan, dan peluang kerja sama yang kami tawarkan.
          </p>
          <dl className='mt-8 sm:mt-12 divide-y divide-gray-900/10'>
            {faqs.map((faq) => (
              <Disclosure
                key={faq.question}
                as='div'
                className='py-4 sm:py-6 first:pt-0 last:pb-0'
              >
                <dt>
                  <DisclosureButton className='group flex w-full items-center justify-between text-left text-gray-900'>
                    <span className='text-base sm:text-lg font-semibold'>
                      {faq.question}
                    </span>
                    <span className='ml-4 sm:ml-6 flex h-7 items-center'>
                      <PlusSmallIcon
                        aria-hidden='true'
                        className='size-6 group-data-open:hidden'
                      />
                      <MinusSmallIcon
                        aria-hidden='true'
                        className='size-6 group-not-data-open:hidden'
                      />
                    </span>
                  </DisclosureButton>
                </dt>
                <DisclosurePanel as='dd' className='mt-2 pr-0 sm:pr-12'>
                  <p className='text-sm sm:text-base text-gray-600'>
                    {faq.answer}
                  </p>
                </DisclosurePanel>
              </Disclosure>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
