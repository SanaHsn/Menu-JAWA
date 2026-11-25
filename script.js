// Les liens non renseignés ne doivent pas rediriger vers une fausse page.
document.querySelectorAll('[data-pending]').forEach(link => {
  link.addEventListener('click', event => {
    if (link.getAttribute('href') === '#') {
      event.preventDefault();
      alert(`Le lien ${link.dataset.pending} sera ajouté prochainement.`);
    }
  });
});

// Fonction pour copier le numéro de portefeuille dans le presse-papiers
  async function copyWallet() {
    const number = document
      .getElementById("wallet-number")
      .textContent.trim();

    const message = document
      .getElementById("payment-message");

    try {
      await navigator.clipboard.writeText(number);
      message.textContent = "Number copied!";
    } catch {
      message.textContent = "Please copy the number manually.";
    }
  }
