document.addEventListener("DOMContentLoaded", () => {

  // =================== FORMULAIRE CONTACT ===================
  const formContact = document.getElementById("formContact");
  const confirmationContact = document.getElementById("confirmation-contact");

  formContact.addEventListener("submit", (e) => {
    e.preventDefault();
    const nom = formContact.nom.value.trim();
    const email = formContact.email.value.trim();
    const message = formContact.message.value.trim();

    if (!nom || !email || !message) { alert("⚠️ Remplissez tous les champs !"); return; }

    const sujet = encodeURIComponent(`Message de ${nom}`);
    const corps = encodeURIComponent(`Nom : ${nom}\nEmail : ${email}\n\nMessage :\n${message}`);
    window.location.href = `mailto:sy17052003@gmail.com?subject=${sujet}&body=${corps}`;

    confirmationContact.style.display = "block";
    formContact.reset();
    setTimeout(()=>{ confirmationContact.style.display = "none"; },4000);
  });

  // =================== FORMULAIRE RÉSERVATION ===================
  const formReservation = document.getElementById("formeReservation");
  const confirmation = document.getElementById("confirmation");
  const typeReservation = document.getElementById("typeReservation");
  const maillot = document.querySelector(".maillot");
  const tshirt = document.querySelector(".tshirt");
  const lot = document.querySelector(".lot");

  typeReservation.addEventListener("change", ()=> {
    maillot.style.display = tshirt.style.display = lot.style.display = "none";
    if(typeReservation.value === "maillot") maillot.style.display = "block";
    if(typeReservation.value === "tshirt") tshirt.style.display = "block";
    if(typeReservation.value === "lot") lot.style.display = "block";
  });

  formReservation.addEventListener("submit", (e) => {
    e.preventDefault();
    let sujet = `Réservation ${typeReservation.value}`;
    let corps = `Détails de la réservation :\n`;

    if(typeReservation.value==="maillot") {
      corps += `Nom : ${formReservation.nom.value}\nNuméro : ${formReservation.numero.value}\nClub : ${formReservation.club.value}\nTaille : ${formReservation.taille.value}\nMessage : ${formReservation.message.value}`;
    } else if(typeReservation.value==="tshirt") {
      corps += `Texte : ${formReservation.texte.value}\nCouleur : ${formReservation.couleur.value}\nTaille : ${formReservation.tailleTshirt.value}\nMessage : ${formReservation.messageTshirt.value}`;
    } else if(typeReservation.value==="lot") {
      corps += `Nom équipe : ${formReservation.nomEquipe.value}\nNombre : ${formReservation.nombre.value}\nType : ${formReservation.typeMaillot.value}\nMessage : ${formReservation.messageLot.value}`;
    } else {
      alert("Sélectionnez un type de réservation !");
      return;
    }

    window.location.href = `mailto:sy17052003@gmail.com?subject=${encodeURIComponent(sujet)}&body=${encodeURIComponent(corps)}`;
    confirmation.style.display = "block";
    formReservation.reset();
    setTimeout(()=>{ confirmation.style.display = "none"; },4000);
  });

  // =================== GALERIE LIGHTBOX ===================
  const images = document.querySelectorAll(".element-gallerie");
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightboxImg");
  const lightboxCaption = document.getElementById("lightboxCaption");
  const lightboxClose = document.getElementById("lightboxClose");

  images.forEach(img => {
    img.addEventListener("click", ()=> {
      lightbox.setAttribute("aria-hidden","false");
      lightboxImg.src = img.src;
      lightboxCaption.textContent = img.alt;
    });
  });

  lightboxClose.addEventListener("click", ()=> {
    lightbox.setAttribute("aria-hidden","true");
  });

});
