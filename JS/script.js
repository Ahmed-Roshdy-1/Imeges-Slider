let images = [
    'Imades/img 1',
    'Imades/img 2',
    'Imades/img 3',
    'Imades/img 4',
    'Imades/img 5'
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