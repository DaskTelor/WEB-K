let currentIndex = 1;
let mainImage;
let images;
let captionText;
document.addEventListener('DOMContentLoaded', function() {

  mainImage = document.getElementsByClassName("gallery-main");
  images = document.getElementsByClassName("gallery-img");

  captionText = document.getElementById("caption");

  function showImage(n) {
    currentIndex = n;
    if (n > images.length) 
      currentIndex = 1;
    
    if (n < 1) 
      currentIndex = images.length;


    for(let i = 0; i < images.length; i++)
      images[i].className = images[i].className.replace(" active", "")

    for(let i = 0; i < mainImage.length; i++)
      mainImage[i].src = images[currentIndex - 1].src;

    images[currentIndex-1].className += " active";    
    captionText.innerHTML = images[currentIndex-1].alt;
  }

  for(let i = 0; i < images.length; i++)
    images[i].addEventListener('click', () => showImage(i + 1));
  
  let next = document.getElementsByClassName("next");
  let prev = document.getElementsByClassName("prev");

  for(let i = 0; i < next.length; i++)
    next[i].addEventListener('click', () => showImage(currentIndex + 1));

  for(let i = 0; i < next.length; i++)
    prev[i].addEventListener('click', () => showImage(currentIndex - 1));

  showImage(currentIndex);
});

