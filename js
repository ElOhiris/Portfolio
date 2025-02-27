document.addEventListener("DOMContentLoaded", function() {
    const images = document.querySelectorAll(".gallery img");
    const lightbox = document.createElement("div");
    lightbox.classList.add("lightbox");
    document.body.appendChild(lightbox);

    const lightboxImg = document.createElement("img");
    lightbox.appendChild(lightboxImg);

    const close = document.createElement("span");
    close.innerHTML = "&times;";
    close.classList.add("close");
    lightbox.appendChild(close);

    const prev = document.createElement("span");
    prev.innerHTML = "&#10094;";
    prev.classList.add("prev");
    lightbox.appendChild(prev);

    const next = document.createElement("span");
    next.innerHTML = "&#10095;";
    next.classList.add("next");
    lightbox.appendChild(next);

    let currentIndex = 0;

    function showImage(index) {
        if (index >= 0 && index < images.length) {
            currentIndex = index;
            lightboxImg.src = images[currentIndex].src;
            lightbox.style.display = "flex";
        }
    }

    images.forEach((img, index) => {
        img.addEventListener("click", () => showImage(index));
    });

    close.addEventListener("click", () => lightbox.style.display = "none");
    prev.addEventListener("click", () => showImage(currentIndex - 1));
    next.addEventListener("click", () => showImage(currentIndex + 1));

    lightbox.style.position = "fixed";
    lightbox.style.top = "0";
    lightbox.style.left = "0";
    lightbox.style.width = "100%";
    lightbox.style.height = "100%";
    lightbox.style.background = "rgba(0, 0, 0, 0.8)";
    lightbox.style.justifyContent = "center";
    lightbox.style.alignItems = "center";
    lightbox.style.zIndex = "1000";
    lightbox.style.display = "none";

    lightboxImg.style.maxWidth = "90%";
    lightboxImg.style.maxHeight = "80%";

    close.style.position = "absolute";
    close.style.top = "20px";
    close.style.right = "20px";
    close.style.fontSize = "2rem";
    close.style.color = "white";
    close.style.cursor = "pointer";

    prev.style.position = "absolute";
    prev.style.top = "50%";
    prev.style.left = "10px";
    prev.style.transform = "translateY(-50%)";
    prev.style.fontSize = "2rem";
    prev.style.color = "white";
    prev.style.cursor = "pointer";

    next.style.position = "absolute";
    next.style.top = "50%";
    next.style.right = "10px";
    next.style.transform = "translateY(-50%)";
    next.style.fontSize = "2rem";
    next.style.color = "white";
    next.style.cursor = "pointer";
});

