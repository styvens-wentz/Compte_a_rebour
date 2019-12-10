const compte_a_rebours = function () {
    setTimeout(compte_a_rebours, 1000);
    const date_actuelle = new Date();
    let annee_actuelle = 2020;
    const date_nouvelle_an = new Date(annee_actuelle, 0, 1, 0, 0, 0, 0);
    const aff_jours = document.getElementsByClassName('resul_jours');
    const aff_heures = document.getElementsByClassName('resul_heures');
    const aff_minutes = document.getElementsByClassName('resul_minutes');
    const aff_secondes = document.getElementsByClassName('resul_secondes');
    if ((date_nouvelle_an - date_actuelle) / 1000 < 0) {
        annee_actuelle++;
        date_nouvelle_an.setFullYear(annee_actuelle);
    }
    const nouvelle_an = (date_nouvelle_an - date_actuelle) / 1000;
    const jours = Math.floor(nouvelle_an / (60 * 60 * 24));
    const heures = Math.floor((nouvelle_an - (jours * 60 * 60 * 24)) / (60 * 60));
    const minutes = Math.floor((nouvelle_an - ((jours * 60 * 60 * 24 + heures * 60 * 60))) / 60);
    const secondes = Math.floor(nouvelle_an - ((jours * 60 * 60 * 24 + heures * 60 * 60 + minutes * 60)));

    function afficher_compteur() {
        for (const jour of aff_jours) {
            jour.innerHTML = jours
        }
        for (const heure of aff_heures) {
            heure.innerHTML = heures
        }
        for (const minute of aff_minutes) {
            minute.innerHTML = minutes
        }
        for (const seconde of aff_secondes) {
            seconde.innerHTML = secondes
        }
    }
    afficher_compteur();
};

compte_a_rebours();