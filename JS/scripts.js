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

const COLORS = ["#fff2", "#fff4", "#fff7", "#fffc"];

const generateSpaceLayer = (size, selector, totalStars, duration) => {
  const layer = [];
  for (let i = 0; i < totalStars; i++) {
    const color = COLORS[~~(Math.random() * COLORS.length)];
    const x = Math.floor(Math.random() * 100);
    const y = Math.floor(Math.random() * 100);
    layer.push(`${x}vw ${y}vh 0 ${color}, ${x}vw ${y + 100}vh 0 ${color}`);
  }
  const container = document.querySelector(selector);
  container.style.setProperty("--size", size);
  container.style.setProperty("--duration", duration);
  container.style.setProperty("--space-layer", layer.join(","));
}

generateSpaceLayer("2px", ".space-1", 250, "25s");
generateSpaceLayer("3px", ".space-2", 100, "20s");
generateSpaceLayer("6px", ".space-3", 25, "15s");