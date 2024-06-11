document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('loginForm');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Empêche l'envoi du formulaire

        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        // Validation simple des champs
        if (username === '' || password === '') {
            alert('Veuillez remplir tous les champs.');
            return;
        }

        // Vérification des informations d'identification
        if (username === 'COCOON.15' && password === 'REAL12') {
            alert('Connexion réussie');
            // Rediriger vers une autre page ou effectuer une action spécifique
            window.location.href = 'index.html'; // Par exemple, rediriger vers une page d'accueil
        } else {
            alert('Nom d\'utilisateur ou mot de passe incorrect');
        }
    });
});
