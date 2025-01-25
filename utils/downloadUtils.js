function downloadAsPDF() {
    try {
        const element = document.getElementById('root');
        const options = {
            margin: 1,
            filename: 'invest-korea-guide.pdf',
            image: { type: 'jpeg', quality: 0.98 },
            html2canvas: { scale: 2 },
            jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
        };

        html2pdf().set(options).from(element).save();
    } catch (error) {
        reportError(error);
    }
}
