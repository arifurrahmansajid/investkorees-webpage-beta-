function Features() {
    const features = [
        {
            icon: "fas fa-chart-line",
            title: "Strong Economy",
            description: "Asia's 4th largest economy with stable growth and innovation-driven development"
        },
        {
            icon: "fas fa-globe-asia",
            title: "Strategic Location",
            description: "Gateway to Asia with excellent logistics and infrastructure"
        },
        {
            icon: "fas fa-microchip",
            title: "Tech Leadership",
            description: "World leader in technology and digital infrastructure"
        },
        {
            icon: "fas fa-handshake",
            title: "Business Friendly",
            description: "Supportive government policies and incentives for foreign investors"
        }
    ];

    return (
        <section id="features" className="section bg-gray-50" data-name="features-section">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold text-center mb-12" data-name="features-title">
                    Why Invest in Bangladesh?
                </h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, index) => (
                        <div key={index} className="feature-card bg-white p-6 rounded-lg shadow-lg" data-name={`feature-${index}`}>
                            <div className="feature-icon w-12 h-12 rounded-full flex items-center justify-center text-white mb-4">
                                <i className={`${feature.icon} text-xl`}></i>
                            </div>
                            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                            <p className="text-gray-600">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
