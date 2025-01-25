function App() {
    return (
        <div data-name="app">
            <Header />
            <Hero />
            <Features />
            <Sectors />
            <ContactForm />
            <Footer />
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
