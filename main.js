var myImage = document.getElementById("myImage")

if (/Mobi|Android/i.test(navigator.userAgent)) {
  myImage.addEventListener("touchstart", zoomIn)
  myImage.addEventListener("touchend", zoomOut)
}

function zoomIn() {
  this.classList.add("zoomed")
}

function zoomOut() {
  this.classList.remove("zoomed")
}
