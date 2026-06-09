function ExportarPDF() {
    const data = document.getElementById('dataPDF');
    
    if (!data.value) {
        alert("Por favor coloque uma data do PDF")
    } else {
        alert(`
            PDF exportado com sucesso!
            Data: ${data.value}
            `)
    }
}