import {
    IconBuildings
} from '@tabler/icons-react';

export default function PartnerSection() {
    const companies = [
        "PT. Karya Tanah Subur",
        "PT. Surya Panen Subur",
        "PT. Perkebunan Lembah Bhakti",
        "PT. Kimia Tirta Utama",
        "PT. Eka Dura Indonesia",
        "PT. Sawit Asahan Indah",
        "PT. Sari Lembah Subur",
        "PT. Tunggal Perkasa Plantation",
        "PT. Sari Aditya Loka"
    ];

    return (
        <>
            <div className="bg-primary py-20 mb-42">
                <div className="py-2 max-w-7xl mx-auto">
                    <h1 className="">
                        <div className="flex flex-col items-center">
                            <h1 className='text-6xl font-bold text-white'>
                                Partner Kami
                            </h1>
                            <p className="text-white w-1/2 mt-3 text-center">Kami telah dipercayai oleh beberapa perusahaan dalam penyediaan jasa dan produk yang telah menjadi mitra kami selama ini.</p>
                        </div>
                    </h1>

                    <div className="grid grid-cols-3 gap-4 mt-20">
                        {companies.map((company, i) => (
                            <div
                                key={i}
                                className="flex items-center border border-white/30 rounded-lg p-6 bg-slate-400/20 hover:bg-primary/40 transition animation-300"
                            >
                                <div className="w-16 h-16 flex items-center justify-center flex-shrink-0">
                                    <IconBuildings className="w-12 h-12 text-secondary" />
                                </div>
                                <h1 className="ml-4 text-white font-semibold text-xl">
                                    {company}
                                </h1>
                            </div>
                        ))}
                    </div>


                </div>
            </div>
        </>
    )
}