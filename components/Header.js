function Header() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    const toggleMenu = () => {
        try {
            setIsMenuOpen(!isMenuOpen);
            document.body.style.overflow = !isMenuOpen ? 'hidden' : '';
        } catch (error) {
            reportError(error);
        }
    };

    const closeMenu = () => {
        try {
            setIsMenuOpen(false);
            document.body.style.overflow = '';
        } catch (error) {
            reportError(error);
        }
    };

    return (
        <header className="header-nav fixed w-full z-50" data-name="header">
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center py-4">
                    <div className="text-2xl font-bold text-blue-600" data-name="logo">
                        InvestKoree
                    </div>
                    
                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center space-x-8" data-name="desktop-navigation">
                        <a href="#home" className="header-link text-gray-600 hover:text-blue-600" data-name="nav-home">Home</a>
                        <a href="#features" className="header-link text-gray-600 hover:text-blue-600" data-name="nav-features">Why Bangladesh</a>
                        <a href="#sectors" className="header-link text-gray-600 hover:text-blue-600" data-name="nav-sectors">Sectors</a>
                        <a href="#contact" className="header-link text-gray-600 hover:text-blue-600" data-name="nav-contact">Contact</a>
                        <button 
                            onClick={downloadAsPDF}
                            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2"
                            data-name="download-button"
                        >
                            <i className="fas fa-download"></i>
                            Download Guide
                        </button>
                    </nav>

                    {/* Hamburger Button */}
                    <div 
                        className={`md:hidden hamburger-button ${isMenuOpen ? 'active' : ''}`}
                        onClick={toggleMenu}
                        data-name="hamburger-button"
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>

                    {/* Mobile Menu Overlay */}
                    <div 
                        className={`menu-overlay ${isMenuOpen ? 'active' : ''}`}
                        onClick={closeMenu}
                        data-name="menu-overlay"
                    ></div>

                    {/* Mobile Navigation */}
                    <nav className={`mobile-menu ${isMenuOpen ? 'active' : ''} md:hidden`} data-name="mobile-navigation">
                        <div className="flex flex-col space-y-6 mt-16">
                            <a 
                                href="#home" 
                                className="text-xl text-gray-600 hover:text-blue-600" 
                                onClick={closeMenu}
                                data-name="mobile-nav-home"
                            >
                                Home
                            </a>
                            <a 
                                href="#features" 
                                className="text-xl text-gray-600 hover:text-blue-600" 
                                onClick={closeMenu}
                                data-name="mobile-nav-features"
                            >
                                Why Bangladesh
                            </a>
                            <a 
                                href="#sectors" 
                                className="text-xl text-gray-600 hover:text-blue-600" 
                                onClick={closeMenu}
                                data-name="mobile-nav-sectors"
                            >
                                Sectors
                            </a>
                            <a 
                                href="#contact" 
                                className="text-xl text-gray-600 hover:text-blue-600" 
                                onClick={closeMenu}
                                data-name="mobile-nav-contact"
                            >
                                Contact
                            </a>
                            <button 
                                onClick={(e) => {
                                    closeMenu();
                                    downloadAsPDF();
                                }}
                                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2 justify-center"
                                data-name="mobile-download-button"
                            >
                                <i className="fas fa-download"></i>
                                Download Guide
                            </button>
                        </div>
                    </nav>
                </div>
            </div>
        </header>
    );
}
