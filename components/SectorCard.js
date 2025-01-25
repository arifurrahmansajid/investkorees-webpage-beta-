function SectorCard({ title, description, icon }) {
    return (
        <div className="sector-card bg-white p-6 rounded-lg shadow-lg" data-name={`sector-${title.toLowerCase()}`}>
            <div className="text-blue-600 text-3xl mb-4">
                <i className={icon}></i>
            </div>
            <h3 className="text-xl font-semibold mb-2">{title}</h3>
            <p className="text-gray-600">{description}</p>
        </div>
    );
}
