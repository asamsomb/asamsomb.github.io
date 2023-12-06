let index = 0;
displayImages();

// displayImages() function allows images to be presented in a slideshow 
function displayImages() {
  let i;
  // gets all element with class name "image"
  const images = document.getElementsByClassName("image");

  // keeps images hidden until called
  for (i = 0; i < images.length; i++) {
    images[i].style.display = "none";
  }

  index++;
  // resets index to 1 when end of images is reached to begin again
  if (index > images.length) {
    index = 1;
  }
  // displays current image can calls function every 4000 ms
  images[index-1].style.display = "block";
  setTimeout(displayImages, 4000); 
}