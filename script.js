(function () {
    var menu    = document.getElementById('menu');
    var nav     = document.querySelector('nav');
    var overlay = document.getElementById('nav-overlay');

    if (!menu || !nav) return;

    menu.addEventListener('click', function () {
        nav.classList.toggle('active');
        if (overlay) overlay.classList.toggle('active');
    });

    if (overlay) {
        overlay.addEventListener('click', function () {
            nav.classList.remove('active');
            overlay.classList.remove('active');
        });
    }

    nav.querySelectorAll('a').forEach(function (link) {
        link.addEventListener('click', function () {
            nav.classList.remove('active');
            if (overlay) overlay.classList.remove('active');
        });
    });
})();
