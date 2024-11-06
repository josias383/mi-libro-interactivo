let currentPage = 'pagina1';

function showPage(pageId) {
    document.querySelectorAll('.page').forEach((page) => {
        page.classList.remove('active');
    });
    document.getElementById(pageId).classList.add('active');
}

function nextPage(pageId) {
    currentPage = pageId;
    showPage(currentPage);
}

function prevPage(pageId) {
    currentPage = pageId;
    showPage(currentPage);
}

document.addEventListener('DOMContentLoaded', () => {
    showPage(currentPage);
});

document.getElementById('maletin').addEventListener('click', function() {
    // Oculta el maletín cerrado
    document.getElementById('maletin-cerrado').classList.add('hidden');
    
    // Muestra el maletín abierto
    document.getElementById('maletin-abierto').classList.remove('hidden');
});

