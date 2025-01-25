function Footer() {
    return (
        <footer className="bg-gray-900 text-white py-12" data-name="footer">
            <div className="container mx-auto px-4 text-center">
                <div className="grid md:grid-cols-3 gap-8 text-center" data-name="footer-grid">
                    <div data-name="footer-about">
                        <h3 className="text-xl font-bold mb-4">InvestKoree</h3>
                        <p className="text-gray-400">
                            Your trusted partner for investing in Bangladesh dynamic economy.
                        </p>
                    </div>
                    <div data-name="footer-contact">
                        <h3 className="text-xl font-bold mb-4">Contact Us</h3>
                        <div className="text-gray-400">
                            <p>Email: info@investkoree.com</p>
                            <p>Phone: +82 2 XXX XXXX</p>
                        </div>
                    </div>
                    <div data-name="footer-social">
                        <h3 className="text-xl font-bold mb-4">Follow Us</h3>
                        <div className="flex justify-center space-x-4">
                            <a href="#" className="text-gray-400 hover:text-white">
                                <i className="fab fa-linkedin"></i>
                            </a>
                            <a href="#" className="text-gray-400 hover:text-white">
                                <i className="fab fa-twitter"></i>
                            </a>
                            <a href="#" className="text-gray-400 hover:text-white">
                                <i className="fab fa-facebook"></i>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400" data-name="footer-copyright">
                    © 2024 InvestKoree. All rights reserved.
                </div>
            </div>
        </footer>
    );
}
