document.addEventListener("DOMContentLoaded", function() {
  const showModalButtons = document.querySelectorAll(".show-details");
  const modal = document.querySelector(".job-details-modal");
  const closeModalButton = document.querySelector(".close");

  showModalButtons.forEach(function(button) {
      button.addEventListener("click", function() {
          modal.style.display = "block";
      });
  });

  closeModalButton.addEventListener("click", function() {
      modal.style.display = "none";
  });

  window.addEventListener("click", function(event) {
      if (event.target === modal) {
          modal.style.display = "none";
      }
  });
});
