// ====== Efek transisi antar halaman ======
document.addEventListener("DOMContentLoaded", () => {
  document.body.classList.add("fade-in");

  const links = document.querySelectorAll("a[href]");
  links.forEach(link => {
    const href = link.getAttribute("href");
    if (href && !href.startsWith("http") && !href.startsWith("#")) {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        document.body.classList.remove("fade-in");
        document.body.style.opacity = 0;
        setTimeout(() => window.location.href = href, 400);
      });
    }
  });
});

// ====== Fungsi login sederhana ======
function loginUser(event) {
  event.preventDefault();
  const user = document.getElementById('username').value;
  const pass = document.getElementById('password').value;
  const message = document.getElementById('loginMessage');

  if (user === "admin" && pass === "1234") {
    message.textContent = "Login berhasil! Selamat datang, " + user;
    setTimeout(() => window.location.href = "index.html", 1000);
  } else {
    message.textContent = "Username atau password salah.";
  }
}

// ====== Slider produk =====
    const track = document.getElementById('sliderTrack');
    const slides = track.children;
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    let index = 0;
    let autoSlideTimer;

    function showSlide(i) {
      index = (i + slides.length) % slides.length;
      track.style.transform = `translateX(-${index * 100}%)`;
    }

    function startAutoSlide() {
      clearTimeout(autoSlideTimer);
      autoSlideTimer = setTimeout(() => {
        showSlide(index + 1);
        startAutoSlide();
      }, 2000);
    }

    prevBtn.addEventListener('click', () => {
      showSlide(index - 1);
      startAutoSlide();
    });

    nextBtn.addEventListener('click', () => {
      showSlide(index + 1);
      startAutoSlide();
    });

    startAutoSlide();


