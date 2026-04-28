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
       