document.addEventListener('DOMContentLoaded', function () {

    /* OUVERTURE / FERMETURE DU DOSSIER */

    const overlayDossier = document.getElementById('overlay-dossier');
    const fermerDossier = document.getElementById('fermer-dossier');
    const dossierNom = document.getElementById('dossier-nom');
    const btnsDossier = document.querySelectorAll('.btn-dossier');


    /* Ouvre le dossier au clic sur "Voir dossier" */


    btnsDossier.forEach(function (btn) {
        btn.addEventListener('click', function () {


            /* Récupère le nom du patient depuis la carte */


            const patient = btn.closest('.patient-item');
            const nom = patient.querySelector('h3').textContent;
            dossierNom.textContent = nom;

            /* Affiche le modal */

            overlayDossier.style.display = 'flex';

            /* Réinitialise sur l'onglet Informations */

            afficherOnglet('informations');
        });
    });



    /* Ferme au clic sur ✕ */


    fermerDossier.addEventListener('click', function () {
        overlayDossier.style.display = 'none';
    });



    /* Ferme si on clique en dehors du modal */


    overlayDossier.addEventListener('click', function (e) {
        if (e.target === overlayDossier) {
            overlayDossier.style.display = 'none';
        }
    });

      /*  ONGLETS DU DOSSIER */

    const btnInformations = document.getElementById('btn-informations');
    const btnHistorique = document.getElementById('btn-historique');
    const btnDocuments = document.getElementById('btn-documents');

    const contenuInformations = document.getElementById('contenu-informations');
    const contenuHistorique = document.getElementById('contenu-historique');
    const contenuDocuments = document.getElementById('contenu-documents');

    const onglets = document.querySelectorAll('.onglet-dossier');

    function afficherOnglet(onglet) {



        /* Cache tout */


        contenuInformations.style.display = 'none';
        contenuHistorique.style.display = 'none';
        contenuDocuments.style.display = 'none';



        /* Retire actif de tous les onglets */


        onglets.forEach(function (btn) {
            btn.classList.remove('actif-dossier');
        });


        /* Affiche le bon contenu */


        if (onglet === 'informations') {
            contenuInformations.style.display = 'block';
            btnInformations.classList.add('actif-dossier');
        } else if (onglet === 'historique') {
            contenuHistorique.style.display = 'block';
            btnHistorique.classList.add('actif-dossier');
        } else if (onglet === 'documents') {
            contenuDocuments.style.display = 'block';
            btnDocuments.classList.add('actif-dossier');
        }
    }

    btnInformations.addEventListener('click', function () {
        afficherOnglet('informations');
    });

    btnHistorique.addEventListener('click', function () {
        afficherOnglet('historique');
    });

    btnDocuments.addEventListener('click', function () {
        afficherOnglet('documents');
    });

});