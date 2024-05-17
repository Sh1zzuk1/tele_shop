function showCatalog(catalogId) {
    document.getElementById('catalog1').classList.remove('active');
    document.getElementById('catalog2').classList.remove('active');

    document.getElementById(catalogId).classList.add('active');
}
