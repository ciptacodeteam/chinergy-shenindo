import Link from "next/link";

export default function HeroSection() {
    return (
        <>
            <section>
                <div className="relative h-[691px]">
                    {/* Video background */}
                    <video
                        className="absolute inset-0 w-full h-full object-cover bg-center"
                        autoPlay
                        loop
                        muted
                        playsInline
                    >
                        <source src="/videos/video2.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>

                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent"></div>

                    {/* Content */}
                    <div className="relative max-w-7xl mx-auto h-full flex items-center">
                        <div>
                            <h1 className="text-white mb-2">Selamat Datang di Chinergi Shenindo</h1>
                            <h1 className="font-bold w-2/3 text-white text-6xl leading-[1.2] text-balance">
                                Reparasi & Penyediaan Sparepart Alat Berat Berkualitas
                            </h1>
                            <p className="text-white mt-4 mb-16 w-1/2 text-balance">
                                Kami menyediakan berbagai pelayanan seperti di bidang jasa pabrikasi, reparasi serta pengadaan spare parts untuk memenuhi kebutuhan mitra kami.
                            </p>

                            <Link
                                href={""}
                                className="py-4 font-semibold px-6 bg-secondary text-white hover:!bg-white hover:text-secondary transition-colors duration-300"
                            >
                                Hubungi Kami
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}