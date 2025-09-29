import Image from 'next/image'

import img2 from '@/public/img/img2.webp'

import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { MinusSmallIcon, PlusSmallIcon } from '@heroicons/react/24/outline'

const faqs = [
    {
        question: "Apa itu Chinergy Shenindo?",
        answer:
            "Chinergy Shenindo adalah perusahaan yang bergerak di bidang jasa pabrikasi, reparasi, serta pengadaan spare parts untuk berbagai kebutuhan industri.",
    },
    {
        question: "Di mana lokasi CV. Chinergy Shenindo?",
        answer:
            "Perusahaan kami berlokasi di Provinsi Sumatera Utara, tepatnya di Jl. Cemara, RW.no: 86, Pulo Brayan Darat II, Kec. Medan Timur, Kota Medan, Sumatera Utara 20239",
    },
    {
        question: "Layanan apa saja yang ditawarkan?",
        answer:
            "Kami menyediakan jasa layanan pabrikasi, reparasi, serta pengadaan spare parts untuk mendukung kelancaran operasional mitra kami.",
    },
    {
        question: "Apa keunggulan Chinergy Shenindo dibanding kompetitor?",
        answer:
            "Kami mengutamakan keberlanjutan, efisiensi teknologi, dan jaringan kemitraan yang luas, sehingga setiap proyek dapat berjalan dengan kualitas terbaik dan hasil yang berdampak jangka panjang.",
    },
    {
        question: "Bagaimana cara menjalin kerja sama dengan Chinergy Shenindo?",
        answer:
            "Anda dapat menghubungi kami melalui kontak resmi untuk diskusi lebih lanjut terkait kebutuhan proyek, peluang investasi, atau potensi kolaborasi bisnis.",
    },
]

export default function FAQSection() {
    return (
        <>
            <div className="max-w-7xl mx-auto mb-32 px-12">
                <div className="grid grid-cols-2 gap-16 items-center">
                    <div className='flex justify-end'>
                        <Image
                            alt="about us"
                            src={img2}
                            width={450}
                         
                            className='object-contain'
                        />
                    </div>

                    <div className="mx-auto max-w-7xl px-6 py-12">
                        <h2 className="text-5xl font-semibold text-primary leading-tight w-3/4">
                            Pertanyaan yang Sering Diajukan
                        </h2>
                        <p className='mt-4 text-gray-500'>Temukan jawaban atas pertanyaan umum mengenai Chinergy Shenindo, layanan, dan peluang kerja sama yang kami tawarkan.</p>
                        <dl className="mt-12 divide-y divide-gray-900/10">
                            {faqs.map((faq) => (
                                <Disclosure key={faq.question} as="div" className="py-6 first:pt-0 last:pb-0">
                                    <dt>
                                        <DisclosureButton className="group flex w-full items-center justify-between text-left text-gray-900">
                                            <span className="text-lg/7 font-semibold">{faq.question}</span>
                                            <span className="ml-6 flex h-7 items-center">
                                                <PlusSmallIcon aria-hidden="true" className="size-6 group-data-open:hidden" />
                                                <MinusSmallIcon aria-hidden="true" className="size-6 group-not-data-open:hidden" />
                                            </span>
                                        </DisclosureButton>
                                    </dt>
                                    <DisclosurePanel as="dd" className="mt-2 pr-12">
                                        <p className="text-base/7 text-gray-600">{faq.answer}</p>
                                    </DisclosurePanel>
                                </Disclosure>
                            ))}
                        </dl>
                    </div>
                </div>
            </div>
        </>
    )
}