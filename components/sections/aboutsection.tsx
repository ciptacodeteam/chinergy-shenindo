import Image from 'next/image'
import Link from 'next/link'

import img3 from '@/public/img/img3.webp'

export default function AboutSection() {
    return (
        <>
            <div className="max-w-7xl mx-auto mb-42 px-12">
                <div className="grid grid-cols-2 gap-16">
                    <div className="flex justify-end">
                        <Image
                            alt='about us'
                            src={img3}
                            width={450}
                        />
                    </div>
                    <div className="flex flex-col justify-center items-center">
                        <div>
                            <h1 className="mb-2 text-gray-500">CV. Chinergy Shenindo</h1>
                            <h1 className='text-6xl font-bold text-primary'>
                                Profil Perusahaan
                            </h1>
                            <p className='text-gray-500 mt-4'>CV. Chinergy Shenindo adalah perusahan yang terletak di provinsi Sumatera Utara tepatnya di kota Medan yang telah berdiri sejak tahun 2021. Kami menyediakan berbagai pelayanan seperti di bidang jasa pabrikasi, reparasi serta pengadaan spare parts untuk memenuhi kebutuhan mitra kami.</p>
                            <Link href="">
                                <button className='mt-8 py-4 px-6 bg-secondary text-white font-semibold hover:!bg-secondary/90 transition-colors duration-300'>
                                    Pelajari Lebih Lanjut
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}