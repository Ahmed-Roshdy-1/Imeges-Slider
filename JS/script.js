let images = [
    'Images/img 1.jpg',
    'Images/img 2.jpg',
    'Images/img 3.jpg',
    'Images/img 4.jpg',
    'Images/img 5.jpg'
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