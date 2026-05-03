
    // Dynamisme du Burger



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





        //  Système d'enregistrement pour une connsultation


document.addEventListener('DOMContentLoaded', function () {

    const navBtns = document.querySelectorAll('.nav-btn');
    const panneau = document.getElementById('panneau-piste');
    const curseur = document.getElementById('navCurseur');

    navBtns.forEach(function (btn) {
            btn.addEventListener('click', function () {
                const index = parseInt(btn.getAttribute('data-index'));
                panneau.className = 'panneaux-piste slide-' + index;

                /* Calcule la largeur et position exacte du bouton */

                curseur.style.width = btn.offsetWidth + 'px';
                curseur.style.transform = 'translateX(' + (btn.offsetLeft - 4) + 'px)';

                navBtns.forEach(function (b) { b.classList.remove('actif'); });
                btn.classList.add('actif');
    });
});

     /*  Initialise sur le premier bouton au chargement */

   window.addEventListener('load', function () {
            const premierBtn = navBtns[0];
            curseur.style.width = premierBtn.offsetWidth + 'px';
            curseur.style.transform = 'translateX(0px)';
});

 })



    //  lA dynamisation  JS de la carte de rendevous cachez 


const carteRendev = document.getElementById('carte-rendev');
    const fermer = document.getElementById('fermer');
    const medecin = document.getElementById('medecin');
    const btnRdv = document.querySelectorAll('.btn-rdv-spec');
    const btnConfirmation = document.querySelector('.btn-confirmation');

    btnRdv.forEach(function (btn) {
        btn.addEventListener('click', function () {
            const carte = btn.closest('.carte');
            const nom = carte.querySelector('h3').textContent;
            const specialite = carte.querySelector('.titre').textContent;
            medecin.textContent = 'Avec ' + nom + ' - ' + specialite;
            carteRendev.style.display = 'flex';
        });
    });

    fermer.addEventListener('click', function () {
        carteRendev.style.display = 'none';
    });

    btnConfirmation.addEventListener('click', function () {
        carteRendev.style.display = 'none';
    });

    carteRendev.addEventListener('click', function (e) {
        if (e.target === carteRendev) {
            carteRendev.style.display = 'none';
        }
    });

