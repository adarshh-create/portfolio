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
function copyEmail() {
            const email = 'hadarsh003@gmail.com';
            const button = document.getElementById('email-btn-text');
            if (navigator.clipboard && navigator.clipboard.writeText) {
                navigator.clipboard.writeText(email).then(() => {
                    button.textContent = 'Email Copied!';
                    setTimeout(() => {
                        button.textContent = 'Copy Email';
                    }, 2000);
                }).catch(() => {
                    fallbackCopyEmail(email, button);
                });
            } else {
                fallbackCopyEmail(email, button);
            }
        }

        function fallbackCopyEmail(email, button) {
            const tempInput = document.createElement('input');
            tempInput.value = email;
            document.body.appendChild(tempInput);
            tempInput.select();
            tempInput.setSelectionRange(0, 99999); // For mobile devices
            
            try {
                document.execCommand('copy');
                button.textContent = 'Email Copied!';
                setTimeout(() => {
                    button.textContent = 'Copy Email';
                }, 2000);
            } catch (err) {
                button.textContent = 'Copy Failed';
                setTimeout(() => {
                    button.textContent = 'Copy Email';
                }, 2000);
            }
            
            document.body.removeChild(tempInput);
        }
