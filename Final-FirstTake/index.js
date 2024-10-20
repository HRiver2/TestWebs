let currentIndex = 0;

function showNextImage() {
    const imagesContainer = document.querySelector('.carousel-images');
    const images = document.querySelectorAll('.carousel-images img');
    currentIndex = (currentIndex + 1) % images.length;
    imagesContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
}

setInterval(showNextImage, 3000);

const button = document.querySelector('button');

button.addEventListener('click', function(){alert('我想要说的，前人都说过了')});