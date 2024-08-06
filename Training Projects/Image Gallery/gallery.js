let currImgNum = 0;

function switchGalleryPrev() {
    let imagesContainer = document.querySelector('.gallery-images-container');
    
    if (currImgNum == 0) return;

    imagesContainer.style.left = `-${100 * --currImgNum}%`;
}

function switchGalleryNext() {
    let imagesContainer = document.querySelector('.gallery-images-container');
    let imagesCount = imagesContainer.children.length;

    if (currImgNum == imagesCount - 1) return;

    imagesContainer.style.left = `-${100 * ++currImgNum}%`;
}


document.querySelector('#gallery-prev').onclick = switchGalleryPrev;
document.querySelector('#gallery-next').onclick = switchGalleryNext;

let imageBlocks = document.querySelectorAll('.gallery-image');
for (let block of imageBlocks) {
    block.style.backgroundImage = `url(images/${block.dataset.imageSrc})`;
}
