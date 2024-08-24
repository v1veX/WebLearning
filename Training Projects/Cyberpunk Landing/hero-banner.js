let currentImage = 1;

function switchImage() {
    const banner = document.querySelector('.hero');

    banner.classList.remove(`hero--${currentImage}`);

    if (currentImage === 3) currentImage = 0;

    banner.classList.add(`hero--${++currentImage}`);
}

setInterval(switchImage, 8000);