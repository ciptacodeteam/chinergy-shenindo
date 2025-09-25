import Link from "next/link";
import Image from "next/image";

import logo from "@/public/img/logo.webp"

export default function FooterSection() {
    return (
        <>
            <section className="relative bg-primary overflow-hidden">
                {/* background image transparan */}
                <div className="absolute inset-0 bg-[url('/img/map_img.webp')] bg-cover bg-no-repeat opacity-15"></div>

                {/* content */}
                <div className="relative max-w-7xl mx-auto z-10">
                    <div className="grid grid-cols-4 mt-20 mb-20">
                        <div>
                            <div className="flex items-center mb-6">
                                <Image
                                    src={logo}
                                    alt="logo"
                                    className="w-15 me-4"
                                />
                                <div className="text-xl text-white font-bold leading-6">
                                    <p>CHINERGI</p>
                                    <p>SHENINDO</p>
                                </div>
                            </div>
                            <p className="text-white text-sm mb-12">CV. Chinergi Shenindo menyediakan berbagai pelayanan seperti di bidang jasa pabrikasi, reparasi serta pengadaan spare parts untuk memenuhi kebutuhan mitra kami.</p>

                            <Link
                                href={""}
                                className="py-4 font-semibold px-6 bg-secondary text-white hover:!bg-white hover:text-secondary transition-colors duration-300"
                            >
                                Tentang Kami
                            </Link>
                        </div>
                        <div className="flex flex-col justify-center items-center">
                            <div>
                                <h1 className="font-bold text-white">Tautan Perusahaan</h1>

                                <div className="h-1 w-16 bg-secondary mt-6 mb-6">
                                </div>

                                <div className="space-y-3">
                                    <div className="flex items-center group cursor-pointer transition-all duration-300">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-right-icon text-gray-300 mt-0.5 lucide-chevron-right transition-all duration-300 group-hover:text-white group-hover:translate-x-1"><path d="m9 18 6-6-6-6" /></svg>
                                        <p className="text-gray-300 font-semibold ms-2 transition-colors duration-300 group-hover:text-white">Beranda</p>
                                    </div>

                                    <div className="flex items-center group cursor-pointer transition-all duration-300">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-right-icon text-gray-300 mt-0.5 lucide-chevron-right transition-all duration-300 group-hover:text-white group-hover:translate-x-1"><path d="m9 18 6-6-6-6" /></svg>
                                        <p className="text-gray-300 font-semibold ms-2 transition-colors duration-300 group-hover:text-white">Tentang Kami</p>
                                    </div>

                                    <div className="flex items-center group cursor-pointer transition-all duration-300">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-right-icon text-gray-300 mt-0.5 lucide-chevron-right transition-all duration-300 group-hover:text-white group-hover:translate-x-1"><path d="m9 18 6-6-6-6" /></svg>
                                        <p className="text-gray-300 font-semibold ms-2 transition-colors duration-300 group-hover:text-white">Layanan</p>
                                    </div>

                                    <div className="flex items-center group cursor-pointer transition-all duration-300">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-right-icon text-gray-300 mt-0.5 lucide-chevron-right transition-all duration-300 group-hover:text-white group-hover:translate-x-1"><path d="m9 18 6-6-6-6" /></svg>
                                        <p className="text-gray-300 font-semibold ms-2 transition-colors duration-300 group-hover:text-white">Produk</p>
                                    </div>

                                    <div className="flex items-center group cursor-pointer transition-all duration-300">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-right-icon text-gray-300 mt-0.5 lucide-chevron-right transition-all duration-300 group-hover:text-white group-hover:translate-x-1"><path d="m9 18 6-6-6-6" /></svg>
                                        <p className="text-gray-300 font-semibold ms-2 transition-colors duration-300 group-hover:text-white">Kontak</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h1 className="font-bold text-white">Our Contact</h1>

                            <div className="h-1 w-16 bg-secondary mt-6 mb-6">
                            </div>

                            <div className="space-y-3">
                                <div className="flex items-center group cursor-pointer transition-all duration-300">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="size-4 text-gray-300 me-1 group-hover:text-white">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                                    </svg>
                                    <p className="text-gray-300 text-sm ms-2 transition-colors duration-300 group-hover:text-white">+62 813 1212 4110</p>
                                </div>

                                <div className="flex items-center group cursor-pointer transition-all duration-300">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="size-4 text-gray-300 me-1 group-hover:text-white">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 1 0-2.636 6.364M16.5 12V8.25" />
                                    </svg>
                                    <p className="text-gray-300 text-sm ms-2 transition-colors duration-300 group-hover:text-white">karyatamaid@gmail.com</p>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h1 className="font-bold text-white">Our Location</h1>

                            <div className="h-1 w-16 bg-secondary mt-6 mb-6">
                            </div>

                            <div>
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3981.8147635296505!2d98.67479267530625!3d3.6297374500097677!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3031339a6f4c28dd%3A0x5e1363fcdd18614!2sKaryatama%20Agro%20Cemerlang.CV!5e0!3m2!1sid!2sid!4v1757935693881!5m2!1sid!2sid" loading="lazy" ></iframe>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="relative max-w-7xl mx-auto mb-8 z-20">
                    <div className="flex text-white text-xs mt-10">
                        ©{new Date().getFullYear()} CV. Chinergi Shenindo. Designed and Developed by
                        <Link
                            href="https://ciptacode.id/"
                            className="ms-1 hover:text-secondary transition-colors duration-300"
                        >
                            Ciptacode
                        </Link>
                    </div>
                </div>
            </section>
        </>
    )
}