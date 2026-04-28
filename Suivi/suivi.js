document.addEventListener('DOMContentLoaded', function () {

    const btnCycle = document.getElementById('btn-cycle');
    const btnRappels = document.getElementById('btn-rappels');
    const btnSante = document.getElementById('btn-sante');
    const contenuCycle = document.getElementById('contenu-cycle');
    const contenuRappels = document.getElementById('contenu-rappels');
    const contenuSante = document.getElementById('contenu-sante');

    btnCycle.addEventListener('click', function () {
        contenuCycle.style.display = 'block';
        contenuRappels.style.display = 'none';
        contenuSante.style.display = 'none';
        btnCycle.classList.add('actif-suivi');
        btnRappels.classList.remove('actif-suivi');
        btnSante.classList.remove('actif-suivi');
    });

    btnRappels.addEventListener('click', function () {
        contenuCycle.style.display = 'none';
        contenuRappels.style.display = 'block';
        contenuSante.style.display = 'none';
        btnRappels.classList.add('actif-suivi');
        btnCycle.classList.remove('actif-suivi');
        btnSante.classList.remove('actif-suivi');
    });

    btnSante.addEventListener('click', function () {
        contenuCycle.style.display = 'none';
        contenuRappels.style.display = 'none';
        contenuSante.style.display = 'block';
        btnSante.classList.add('actif-suivi');
        btnCycle.classList.remove('actif-suivi');
        btnRappels.classList.remove('actif-suivi');
    });

});