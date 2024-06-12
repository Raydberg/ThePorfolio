const carouselImages = document.querySelector('.carousel__images');
const images = Array.from(carouselImages.children);
const imageCount = images.length;

images.forEach(image => {
    const clone = image.cloneNode(true);
    carouselImages.appendChild(clone);
});

const repeatAt = 100 / (imageCount * 2); 

const keyframes = [
    { transform: 'translateX(0)', offset: 0 },
    { transform: `translateX(-${repeatAt}%)`, offset: repeatAt / 100 },
    { transform: `translateX(-50%)`, offset: 0.5 }, 
    { transform: `translateX(-100%)`, offset: 1 },
];
const animation = carouselImages.animate(keyframes, {
    duration: 21000,
    iterations: Infinity,
    easing: 'linear' 
});