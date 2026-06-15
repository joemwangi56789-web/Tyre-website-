window.addEventListener("DOMContentLoaded", () => {

    /* HERO SLIDESHOW */

    const hero = document.querySelector(".hero");

    if (hero) {

        const images = [
            "tmg.jpg",
            "tmg2.jpg",
            "img3.png"
        ];

        let i = 0;

        function change() {

            hero.style.backgroundImage = `url(${images[i]})`;
            hero.style.backgroundSize = "cover";
            hero.style.backgroundPosition = "center";

            i = (i + 1) % images.length;
        }

        change();
        setInterval(change, 3000);
    }

    /* READ MORE */

    document.querySelectorAll(".read-more").forEach(button => {

        button.addEventListener("click", () => {

            const card = button.closest(".product-card");

            const preview = card.querySelector(".preview");
            const fullText = card.querySelector(".more-text");

            preview.classList.toggle("hide");
            fullText.classList.toggle("show");

            button.textContent =
                fullText.classList.contains("show")
                ? "Hide"
                : "...Show More";
        });

    });

    /* AUTO IMAGE SLIDERS */

    document.querySelectorAll(".image-slider").forEach(slider => {

        const slides = slider.querySelectorAll("img");
        let current = 0;

        setInterval(() => {

            current++;

            if (current >= slides.length) {
                current = 0;
            }

            slider.scrollTo({
                left: slider.clientWidth * current,
                behavior: "smooth"
            });

        }, 3000);

    });

});
document.addEventListener("DOMContentLoaded", () => {

    const cards = document.querySelectorAll(".card");

    const observer = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if(entry.isIntersecting){
                entry.target.classList.add("show");
            }

        });

    }, {
        threshold: 0.2
    });

    cards.forEach(card => observer.observe(card));

});
