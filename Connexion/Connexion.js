// SCRIPT BURGER MENU


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
    



    // Coullisage entre la partie docteur et patient

document.addEventListener('DOMContentLoaded', function () {

    /* ELEMENTS */

    const sectionConnexion = document.querySelector('.connexion');
    const sectionUtilisateur = document.querySelector('.Utilisateur');
    const btnContinuer = document.querySelector('.btn-continuer-connexion');
    const btnsSociaux = document.querySelectorAll('.btn-social');
    const inputEmail = document.querySelector('.connexion-groupe input');

    const btnPatient = document.querySelector('.patient');
    const btnSpecialiste = document.querySelector('.specialiste');
    const contenuPatient = document.querySelector('.motivation-profil');
    const contenuSpecialiste = document.querySelector('.inscription-specialiste');

    
    
    
    /* INITIALISATION */

    
    
    /* Cache la section utilisateur au départ et Cache spécialiste par défaut */

    sectionUtilisateur.style.display = 'none';
  
    contenuSpecialiste.style.display = 'none';

        
    
    /* FONCTION : passer à la section utilisateur */


    function afficherUtilisateur() {
        sectionConnexion.style.display = 'none';
        sectionUtilisateur.style.display = 'block';
    }

    
    
    /* BOUTON CONTINUER */


    btnContinuer.addEventListener('click', function () {
        if (inputEmail.value.trim() !== '') {
            afficherUtilisateur();
        } else {
            inputEmail.style.border = '1px solid #ef4444';
            inputEmail.placeholder = 'Veuillez entrer votre email !';
        }
    });

    
    
    /* BOUTONS SOCIAUX */


    btnsSociaux.forEach(function (btn) {
        btn.addEventListener('click', function () {
            afficherUtilisateur();
        });
    });

    
    
    /* COULISSAGE PATIENT / SPECIALISTE */

    btnPatient.addEventListener('click', function () {
        contenuPatient.style.display = 'flex';
        contenuSpecialiste.style.display = 'none';
        btnPatient.style.backgroundColor = 'white';
        btnPatient.style.color = '#0f172a';
        btnSpecialiste.style.backgroundColor = 'transparent';
        btnSpecialiste.style.color = '#64748b';
    });

    btnSpecialiste.addEventListener('click', function () {
        contenuPatient.style.display = 'none';
        contenuSpecialiste.style.display = 'flex';
        btnSpecialiste.style.backgroundColor = 'white';
        btnSpecialiste.style.color = '#0f172a';
        btnPatient.style.backgroundColor = 'transparent';
        btnPatient.style.color = '#64748b';
    });

       
    
    /* BOUTON FERMER CONNEXION */

    const btnFermer = document.querySelector('.fermer-connexion');
    btnFermer.addEventListener('click', function () {
        sectionConnexion.style.display = 'none';
    });

});