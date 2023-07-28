// Function to create a circle element with random position and radius
function createCircle(radius, cx, cy) {
    const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    circle.setAttribute('cx', cx);
    circle.setAttribute('cy', cy);
    circle.setAttribute('r', radius);
    circle.setAttribute('stroke', 'none');
    circle.setAttribute('fill', 'white');
    circle.classList.add('star');
    return circle;
  }
  
  // Function to create a shooting star element with random position
  function createShootingStar(left, top) {
    const div = document.createElement('div');
    div.style.left = `${left}px`;
    div.style.top = `${top}px`;
    div.classList.add('wish');
    return div;
  }
  
  // Function to get random number within a range
  function getRandomInRange(min, max) {
    return Math.random() * (max - min) + min;
  }
  
  // Function to get random position for X and Y coordinates
  function getRandomX(maxX) {
    return Math.floor(getRandomInRange(0, maxX));
  }
  
  function getRandomY(maxY) {
    return Math.floor(getRandomInRange(0, maxY));
  }
  
  // Function to start the animation for stars
  function starryNight() {
    const stars = document.querySelectorAll('#sky .star');
    stars.forEach((star, i) => {
      const duration = 700;
      const delay = 50 * i;
      anime({
        targets: star,
        opacity: [
          { value: '0', duration },
          { value: '1', duration }
        ],
        easing: 'linear',
        loop: true,
        delay,
      });
    });
  }
  
  // Function to start the animation for shooting stars
  function shootingStars() {
    const shootingStars = document.querySelectorAll('#shootingstars .wish');
    shootingStars.forEach((star, i) => {
      const duration = 700;
      const delay = 1000 * i;
      anime({
        targets: star,
        opacity: [
          { value: '1', duration }
        ],
        width: [
          { value: '150px' },
          { value: '0px' }
        ],
        translateX: 350,
        easing: 'linear',
        loop: true,
        delay,
      });
    });
  }
  
  // Function to initialize the StarrySky animation
  function initStarrySky() {
    const num = 60;
    const vw = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    const vh = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    const skySvg = document.getElementById('sky');
    const shootingStarsDiv = document.getElementById('shootingstars');
    
    for (let i = 0; i < num; i++) {
      const radius = getRandomInRange(0.6, 1.3);
      const cx = getRandomX(vw);
      const cy = getRandomY(vh);
      const circle = createCircle(radius, cx, cy);
      skySvg.appendChild(circle);
    }
    
    for (let i = 0; i < num; i++) {
      const left = getRandomX(vw);
      const top = getRandomY(vh);
      const star = createShootingStar(left, top);
      shootingStarsDiv.appendChild(star);
    }
    
    starryNight();
    shootingStars();
  }
  
  // Wait for DOM content to be loaded before initializing the animation
  document.addEventListener('DOMContentLoaded', initStarrySky);