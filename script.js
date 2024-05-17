function showCatalog(catalogId) {
    var catalogs = document.querySelectorAll('.catalog');
    catalogs.forEach(function(catalog) {
        catalog.classList.remove('active');
    });
    document.getElementById(catalogId).classList.add('active');
}
