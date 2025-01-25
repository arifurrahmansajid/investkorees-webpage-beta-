function Sectors() {
    const sectors = [
        {
            icon: "fas fa-microchip",
            title: "Technology",
            description: "World-leading semiconductor and electronics industry"
        },
        {
            icon: "fas fa-car",
            title: "Automotive",
            description: "Advanced automotive manufacturing and R&D"
        },
        {
            icon: "fas fa-wave-square",
            title: "Biotechnology",
            description: "Rapidly growing biotech and healthcare sector"
        },
        {
            icon: "fas fa-robot",
            title: "Smart Manufacturing",
            description: "Industry 4.0 and smart factory initiatives"
        },
        {
            icon: "fas fa-leaf",
            title: "Green Energy",
            description: "Renewable energy and sustainable technologies"
        },
        {
            icon: "fas fa-shopping-bag",
            title: "E-Commerce",
            description: "Dynamic digital commerce ecosystem"
        }
    ];

    return (
        <section id="sectors" className="section" data-name="sectors-section">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold text-center mb-12" data-name="sectors-title">
                    Key Investment Sectors
                </h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {sectors.map((sector, index) => (
                        <SectorCard key={index} {...sector} />
                    ))}
                </div>
            </div>
        </section>
    );
}
