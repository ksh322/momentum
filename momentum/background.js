const images=["0.jpeg","1.jpeg","2.jpeg"];
const chosenimage= images[Math.floor(Math.random()* images.length)];

const body = document.querySelector('body');

const img = document.createElement('img');

img.src= `img/${chosenimage}`;
img.alt = 'background images';
img.classList.add('bg');
    
body.prepend(img);
