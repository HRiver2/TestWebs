let currentIndex = 0;

function showNextImage() {
    const imagesContainer = document.querySelector('.carousel-images');
    const images = document.querySelectorAll('.carousel-images img');
    currentIndex = (currentIndex + 1) % images.length;
    imagesContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
}

setInterval(showNextImage, 3000); // 每3秒切换一次图片