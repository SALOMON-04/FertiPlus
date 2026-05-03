//   modification du burger

const burgerBtn = document.getElementById('burgerBtn');
const mainNav = document.getElementById('mainNav');
const navOverlay = document.getElementById('navOverlay');

function toggleMenu() {
    burgerBtn.classList.toggle('actif');
    mainNav.classList.toggle('ouvert');
    navOverlay.classList.toggle('visible');
    document.body.classList.toggle('menu-ouvert');
}

burgerBtn.addEventListener('click', toggleMenu);
navOverlay.addEventListener('click', toggleMenu);

mainNav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        if (mainNav.classList.contains('ouvert')) toggleMenu();
    });
});





//  Systeme de coulissage

const btnArticles = document.getElementById('btn-articles');
const btnFaq = document.getElementById('btn-faq');
const contenuArticles = document.getElementById('contenu-articles');
const contenuFaq = document.getElementById('contenu-faq');

btnArticles.addEventListener('click', function () {
    contenuArticles.style.display = 'block';
    contenuFaq.style.display = 'none';
    btnArticles.classList.add('actif-onglet');
    btnFaq.classList.remove('actif-onglet');
});

btnFaq.addEventListener('click', function () {
    contenuFaq.style.display = 'block';
    contenuArticles.style.display = 'none';
    btnFaq.classList.add('actif-onglet');
    btnArticles.classList.remove('actif-onglet');
});
