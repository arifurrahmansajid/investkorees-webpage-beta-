function Hero() {
    return (
        <section id="home" className="hero min-h-screen flex items-center" data-name="hero-section">
            <div className="container mx-auto px-4">
                <div className="hero-content text-center text-white">
                    <h1 className="text-5xl md:text-6xl font-bold mb-6" data-name="hero-title">
                        Invest in Bangladesh's Future
                    </h1>
                    <p className="text-xl md:text-2xl mb-8" data-name="hero-subtitle">
                        Your Gateway to Successful Investments in Bangladesh
                    </p>
                    <div className="flex justify-center gap-4" data-name="hero-cta">
                        <a href="#contact" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg transition-colors">
                            Get Started
                        </a>
                        <a href="#features" className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-blue-600 transition-colors">
                            Learn More
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
