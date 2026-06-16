"use strict"

// Funktion nach dem laden der index ausführen
document.addEventListener("DOMContentLoaded", LoadDoc, false);

function LoadDoc() {
   document.querySelectorAll('input[name="type"]').forEach(radio =>
      radio.addEventListener("change", () => {
         const button = document.querySelector('esp-web-install-button');
         button.manifest = `./manifest_${radio.value}.json`;
         const button_container = document.querySelector('.button-container'); 
         button_container.classList.remove('d-none');
      }
      ));
}