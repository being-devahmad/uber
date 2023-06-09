let mainBgImg = document.querySelector(".mainBgImg");
let heading = document.querySelector(".descriptionHeading");
let text = document.querySelector(".descriptionText");
let btn = document.querySelector(".descriptionBtn");
let link = document.querySelector(".descriptionLink");
let inputBox = document.querySelector(".descriptionInput");

let driveBg = () => {
  mainBgImg.style.backgroundImage = "url(./images/bg-img.jfif)";
  heading.innerHTML = "Get in the driver's seat and get paid";
  text.innerHTML =
    "Drive on the platform with the largest network of active riders.";
  btn.innerHTML = "Sin up to drive";
  link.innerHTML = "Learn more about driving and delivering";
  inputBox.style.display = "none";
};

let eatBg = () => {
  mainBgImg.style.backgroundImage = "url(./images/eatbg.jfif)";
  heading.innerHTML = "Discover delicious eats";
  text.innerHTML = "Order delivery from restaurants you love.";
  btn.textContent = "Order Now";
  link.innerHTML = "Own a restaurant? Partner with Uber Eats";
  inputBox.style.display = "none";
};

let rideBg = () => {
  mainBgImg.style.backgroundImage = "url(./images/ridebg.jfif)";
  heading.innerHTML = "Request a ride now";
  text.innerHTML = "";
  inputBox.style.display = "block";
  btn.innerHTML = "Request Now";
  link.innerHTML = "";
};
