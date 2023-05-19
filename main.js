var myImage = document.getElementById("myImage")

if (/Mobi|Android/i.test(navigator.userAgent)) {
  myImage.addEventListener("touchstart", function (event) {
    event.preventDefault() // Impede comportamentos padrão do toque
    this.classList.add("zoomed")
  })

  myImage.addEventListener("touchend", function (event) {
    event.preventDefault() // Impede comportamentos padrão do toque
    this.classList.remove("zoomed")
  })
}
