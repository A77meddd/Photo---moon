let light = document.getElementById("circle");
let eject = document.getElementById("photo");
let button = document.getElementById("button");

// مصفوفة الصور
const images = ["Jerry.png", "Jerry1.png", "Jerry2.png", "Jerry3.png" ,"Moon.png"];

let currentImageIndex = 0;

button.addEventListener("click", () => {
  // تأثير الفلاش
  light.classList.remove("flash-animation");
  setTimeout(() => {
    light.classList.add("flash-animation");
  }, 100);

  // تأثير إخراج الصورة
  eject.classList.remove("eject-photo");
  setTimeout(() => {
    eject.classList.add("eject-photo");
  }, 100);

  // تغيير الخلفية بتاعة الصورة
  currentImageIndex = (currentImageIndex + 1) % images.length;
  eject.style.backgroundImage = `url('${images[currentImageIndex]}')`;
});
