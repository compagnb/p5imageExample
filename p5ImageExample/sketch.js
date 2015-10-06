var imageLoaded = false;

function setup() {
  createCanvas(windowWidth, windowHeight);
  img = loadImage("GrassDead.png", loadImg);
}

function draw() {
  if (imageLoaded)
    image(img, mouseX, mouseY);
    


}

  function loadImg(){
    imageLoaded = true;
  }