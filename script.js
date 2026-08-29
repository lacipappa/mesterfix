function demoForm(event) {
    event.preventDefault();
    alert('Ez egy demo űrlap. A végleges ügyféloldalon ide köthető e-mail, Formspree, Google Forms, CRM vagy saját backend.');
    return false;
}

// A navigáció automatikusan bezárul / visszaáll a görgetés után; nincs szükség külső könyvtárra.
document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('a[href^="#"]').forEach(function (link) {
        link.addEventListener('click', function () {
            // Helyet hagyunk a sticky fejlécnek a böngészők natív smooth scrollja mellett.
            var target = document.querySelector(link.getAttribute('href'));
            if (target) target.style.scrollMarginTop = '95px';
        });
    });
});
