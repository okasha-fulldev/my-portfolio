document.addEventListener('DOMContentLoaded', function () {
    var menu = document.getElementById('menu');
    var nav  = document.querySelector('nav');

    if (!menu || !nav) return;

    menu.addEventListener('click', function (e) {
        e.stopPropagation();
        nav.classList.toggle('open');
        menu.classList.toggle('open');
    });

    /* close when clicking any nav link */
    nav.querySelectorAll('a').forEach(function (link) {
        link.addEventListener('click', function () {
            nav.classList.remove('open');
            menu.classList.remove('open');
        });
    });

    /* close when clicking outside */
    document.addEventListener('click', function (e) {
        if (!nav.contains(e.target) && e.target !== menu) {
            nav.classList.remove('open');
            menu.classList.remove('open');
        }
    });
});
