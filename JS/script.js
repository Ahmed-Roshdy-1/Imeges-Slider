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
    if (currentImage < images.length - 1) {
        currentImage++;
    } else {
        currentImage = 0;

    }
    sliderImage.src = images[currentImage];

}
let prevImage = () => {
    if (currentImage == 0) {
        currentImage = images.length - 1;
    } else {
        currentImage--;

    }
    sliderImage.src = images[currentImage];

}


let interval;
function autoplay() {
    if (interval) {
        clearInterval(interval);
        interval = null;
    } else {
        interval = setInterval(() => {
            nextImage();
        }, 2500);

    }
    playBtn.children[0].classList.toggle("fa-play");
    playBtn.children[0].classList.toggle("fa-pause");

}

playBtn.addEventListener('click', autoplay);

prevBtn.addEventListener('click', prevImage);

nextBtn.addEventListener('click', nextImage);

