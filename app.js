 document.addEventListener("DOMContentLoaded", () => {
        let currentSlide = 1;
        const slides = document.querySelectorAll(".slide");
        const totalSlides = slides.length;
        const counter = document.getElementById("slide-counter");
        const prevBtn = document.getElementById("prevBtn");
        const nextBtn = document.getElementById("nextBtn");

        function showSlide(n) {
          slides.forEach((slide) => slide.classList.add("hidden"));
          const targetSlide = document.getElementById(`slide-${n}`);
          if (targetSlide) targetSlide.classList.remove("hidden");
          counter.textContent = `${n} / ${totalSlides}`;
          prevBtn.disabled = n === 1;
          nextBtn.disabled = n === totalSlides;
          currentSlide = n;
        }

        prevBtn.addEventListener("click", () => {
          if (currentSlide > 1) showSlide(currentSlide - 1);
        });
        nextBtn.addEventListener("click", () => {
          if (currentSlide < totalSlides) showSlide(currentSlide + 1);
        });
        document.addEventListener("keydown", (e) => {
          if (e.key === "ArrowRight" && currentSlide < totalSlides) showSlide(currentSlide + 1);
          else if (e.key === "ArrowLeft" && currentSlide > 1) showSlide(currentSlide - 1);
        });

        showSlide(currentSlide);
      });