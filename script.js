  let slides = document.querySelectorAll(".hero-slide");
  let index = 0;

  function showSlide(i) {
    slides.forEach((slide, idx) => {
      slide.classList.remove("active");
      if (idx === i) slide.classList.add("active");
    });
  }

  function nextSlide() {
    index = (index + 1) % slides.length;
    showSlide(index);
  }

  setInterval(nextSlide, 3000);