function scrollToContact() {
  document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
}
function toggleGallery() {
  const gallery = document.getElementById("groundstation-gallery");
  const button = document.querySelector(".toggle-btn");
  
  if (gallery.style.display === "none") {
    gallery.style.display = "flex";
    button.textContent = "Hide Screenshots";
  } else {
    gallery.style.display = "none";
    button.textContent = "Show Screenshots";
  }
}
document.addEventListener('DOMContentLoaded', function() {
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('navLinks');
  
  hamburger.addEventListener('click', function() {
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('active');
  });
  
  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('active');
      hamburger.classList.remove('active');
    });
  });
});