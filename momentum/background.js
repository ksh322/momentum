const images=["0.jpeg","1.jpeg","2.jpeg"];
const chosenimage= images[Math.floor(Math.random()* images.length)];

const bgimage= document.createElement("img");

bgimage.src= `img/${chosenimage}`;
document.body.appendChild(bgimage);

