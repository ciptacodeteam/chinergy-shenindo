export default function StatistikSection() {
    const stats = [
        { bigNumber: "16", smallNumber: "16", label: "PROYEK", title: "Berjalan" },
        { bigNumber: "51", smallNumber: "51", label: "MITRA", title: "Kepuasan" },
        { bigNumber: "5", smallNumber: "5", label: "TAHUN", title: "Dedikasi" },
        { bigNumber: "17", smallNumber: "17", label: "TEKNOLOGI", title: "Inovasi" },
    ];

    return (
        <div className="max-w-7xl mx-auto mb-36">
            <div className="grid grid-cols-4 gap-8">
                {stats.map((stat, i) => (
                    <div
                        key={i}
                        className="relative flex items-center justify-center"
                    >
                        
                        <span className="absolute -top-12 left-0 bottom-0 text-[150px] font-bold stroke-text select-none leading-none">
                            {stat.bigNumber}
                        </span>

                        <div className="relative flex items-center space-x-2">
                            <span className="text-6xl font-bold text-primary">
                                {stat.smallNumber}
                            </span>
                            <div className="flex flex-col leading-tight">
                                <span className="uppercase text-gray-500 tracking-wider text-sm">
                                    {stat.label}
                                </span>
                                <span className="text-4xl font-bold text-primary">
                                    {stat.title}
                                </span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
