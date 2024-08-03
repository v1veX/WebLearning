let currentImageWidth;
let currentImageNumber = 0;

function setGallerySizes(onresize = false) {
    if (onresize) {
        let a = document.querySelector('.gallery-wrapper').clientWidth - currentImageWidth;
        if (a === 0) return;
    }

    let imageBlocks = document.querySelectorAll('.gallery-image');
    currentImageWidth = document.querySelector('.gallery-wrapper').clientWidth;
    for (let block of imageBlocks) {
        block.style.width = `${currentImageWidth}px`;
    }

    document.querySelector('.gallery-images-container').style.translate = `-${currentImageWidth * currentImageNumber}px`;
}

let imageBlocks = document.querySelectorAll('.gallery-image');
for (let block of imageBlocks) {
    block.style.backgroundImage = `url(images/${block.dataset.imageSrc})`;
}
setGallerySizes();

function switchGalleryLeft() {
    let imagesContainer = document.querySelector('.gallery-images-container');

    if (currentImageNumber == 0) {
        currentImageNumber = document.querySelectorAll('.gallery-image').length;
    };

    imagesContainer.style.translate = `-${currentImageWidth * --currentImageNumber}px`;
}

function switchGalleryRight() {
    let imagesContainer = document.querySelector('.gallery-images-container');

    if (currentImageNumber == document.querySelectorAll('.gallery-image').length - 1) {
        currentImageNumber = -1;
    };

    imagesContainer.style.translate = `-${currentImageWidth * ++currentImageNumber}px`;
}


document.querySelector('#gallery-prev').onclick = switchGalleryLeft;
document.querySelector('#gallery-next').onclick = switchGalleryRight;

window.addEventListener('resize', () => {
    setGallerySizes(true);
});
