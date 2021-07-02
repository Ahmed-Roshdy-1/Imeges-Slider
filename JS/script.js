let images = [
    'imades/img 1',
    'imades/img 2',
    'imades/img 3',
    'imades/img 4',
    'imades/img 5'
];

let currentImage = 0;

let sliderImage = document.querySelector('.slider-image');
let nextBtn = document.querySelector('.slider-button-next');
let prevBtn = document.querySelector('.slider-button-prev');
let playBtn = document.querySelector('.slider-button-play');

function nextImage() {
    if (currentImage < images.length) {
        currentImage++;
    } else {
        currentImage = 0;

    }
    sliderImage.src = images[currentImage];

}

nextBtn.addEventListener('click', nextImage);