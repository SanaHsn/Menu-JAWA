// Les liens non renseignés ne doivent pas rediriger vers une fausse page.
document.querySelectorAll('[data-pending]').forEach(link => {
  link.addEventListener('click', event => {
    if (link.getAttribute('href') === '#') {
      event.preventDefault();
      alert(`Le lien ${link.dataset.pending} sera ajouté prochainement.`);
    }
  });
});
