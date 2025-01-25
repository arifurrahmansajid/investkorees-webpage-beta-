function ContactForm() {
    const handleSubmit = (e) => {
        try {
            e.preventDefault();
            // Handle form submission logic here
        } catch (error) {
            reportError(error);
        }
    };

    return (
        <section id="contact" className="section bg-gray-50" data-name="contact-section">
            <div className="container mx-auto px-4">
                <div className="max-w-2xl mx-auto">
                    <h2 className="text-4xl font-bold text-center mb-8" data-name="contact-title">
                        Start Your Investment Journey
                    </h2>
                    <form onSubmit={handleSubmit} className="contact-form space-y-6" data-name="contact-form">
                        <div>
                            <label className="block text-gray-700 mb-2">Name</label>
                            <input
                                type="text"
                                className="w-full px-4 py-2 border rounded-lg"
                                required
                                data-name="contact-name"
                            />
                        </div>
                        <div>
                            <label className="block text-gray-700 mb-2">Email</label>
                            <input
                                type="email"
                                className="w-full px-4 py-2 border rounded-lg"
                                required
                                data-name="contact-email"
                            />
                        </div>
                        <div>
                            <label className="block text-gray-700 mb-2">Message</label>
                            <textarea
                                className="w-full px-4 py-2 border rounded-lg h-32"
                                required
                                data-name="contact-message"
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors"
                            data-name="contact-submit"
                        >
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}
