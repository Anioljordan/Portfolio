function openMenu() {
  const nav = document.querySelector("nav");
  nav.classList.toggle("open");
}
function copyEmail() {
  const email = "anioljolo@gmail.com";
  navigator.clipboard
    .writeText(email)
    .then(() => {
      const successMessage = document.getElementById("success-message");
      successMessage.style.display = "block";
      successMessage.style.animation = "fadeIn 1s ease-out";

      setTimeout(() => {
        successMessage.style.display = "none";
      }, 3000); // El mensaje desaparece después de 3 segundos
    })
    .catch((err) => {
      alert("Error al copiar el correo: " + err);
    });
}
