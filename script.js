function showCatalog(catalogId) {
    document.getElementById('catalog1').style.display = 'none';
    document.getElementById('catalog2').style.display = 'none';

    document.getElementById(catalogId).style.display = 'block';
}