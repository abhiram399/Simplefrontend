let slider = document.querySelector(".carousel");
let nextBtn = document.querySelector(".next");
let prevBtn = document.querySelector(".prev");

nextBtn.onclick = () => {
  // Append the first child of the slider to the end
  slider.append(slider.querySelector("div:first-child"));
};

prevBtn.onclick = () => {
  const lastCard = slider.children[slider.children.length - 1]; // Get the last child
  console.log("Moving last card:", lastCard);
  slider.prepend(lastCard); // Prepend it to the beginning
};

// ---------  the js of selecting the vehicle -----------

// Select the elements (assuming single element selection here)
let car = document.getElementsByClassName("car")[0];
let bike = document.getElementsByClassName("bike")[0];

car.onclick = () => {
  let carOption = document.getElementsByClassName("car-option")[0];
  let bikeOption = document.getElementsByClassName("bike-option")[0];

  carOption.style.display = "flex";
  bikeOption.style.display = "none";
};

bike.onclick = () => {
  let carOption = document.getElementsByClassName("car-option")[0];
  let bikeOption = document.getElementsByClassName("bike-option")[0];

  carOption.style.display = "none";
  bikeOption.style.display = "flex";
};

function registerPage() {
  const login = document.querySelector(".login");
  const register = document.querySelector(".register");

  // Show register, hide login with animations
  login.classList.add("hidden");
  register.classList.remove("hidden");
  register.classList.add("active");
}

function loginPage() {
  const login = document.querySelector(".login");
  const register = document.querySelector(".register");

  // Show login, hide register with animations
  register.classList.add("hidden");
  login.classList.remove("hidden");
  login.classList.add("active");
}

// ------------ show location upload ---------------

function toggleLocationUpload() {
  const deliveryType = document.getElementById("deliveryType").value;
  const locationUpload = document.getElementById("locationUpload");

  if (deliveryType === "homeDelivery") {
    locationUpload.style.display = "block";
  } else {
    locationUpload.style.display = "none";
  }
}

// Redirect to book.html on Book Now button click
const bookNowBtn = document.querySelector(".book-now-btn");
// const bookItBtn = document.getElementById("bookItBtn");

document.querySelectorAll(".book-now-btn").forEach((button) => {
  button.addEventListener("click", function () {
    window.location.href = "book.html";
  });
});

