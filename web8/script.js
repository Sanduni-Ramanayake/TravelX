let video1 = document.getElementById("bg-video1");
let video2 = document.getElementById("bg-video2");

let switchInterval = 6000;
let currentVideo = 1;

function switchVideo() {
  if (currentVideo === 1) {
    video1.style.display = "none";
    video2.style.display = "block";
    currentVideo = 1;
  } else {
    video1.style.display = "block";
    video2.style.display = "none";
    currentVideo = 1;
  }
}

document.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("click", function () {
    document.querySelector(".nav-link.active")?.classList.remove("active");
    this.classList.add("active");
  });
});

document.getElementById("search-icon").addEventListener("click", function (e) {
  e.preventDefault();
  const searchBar = document.getElementById("search-bar");
  const loginForm = document.getElementById("login-form");
  searchBar.classList.toggle("d-none");
  if (!searchBar.classList.contains("d-none")) {
    loginForm.classList.add("d-none");
  }
});

document.getElementById("login-icon").addEventListener("click", function (e) {
  e.preventDefault();
  const loginForm = document.getElementById("login-form");
  const searchBar = document.getElementById("search-bar");
  loginForm.classList.toggle("d-none");
  if (!loginForm.classList.contains("d-none")) {
    searchBar.classList.add("d-none");
  }
});

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});
document
  .getElementById("booking-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const destination = document.getElementById("destination").value;
    const date = document.getElementById("date").value;
    const people = document.getElementById("people").value;

    if (
      name === "" ||
      email === "" ||
      destination === "" ||
      date === "" ||
      people === ""
    ) {
      alert("Please fill in all fields");
    } else {
      alert(
        `Booking confirmed!\nName: ${name}\nEmail: ${email}\nDestination: ${destination}\nDate: ${date}\nPeople: ${people}`
      );
    }
  });
document.addEventListener("DOMContentLoaded", function () {
  const packageCards = document.querySelectorAll(".package-card");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate");
      }
    });
  });

  packageCards.forEach((card) => {
    observer.observe(card);
  });
});
document.addEventListener("DOMContentLoaded", function () {
  const serviceCards = document.querySelectorAll(".service-card");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate");
      }
    });
  });

  serviceCards.forEach((card) => {
    observer.observe(card);
  });
});
document.addEventListener("DOMContentLoaded", function () {
  const messageForm = document.getElementById("messageForm");
  const formResponse = document.getElementById("formResponse");

  messageForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const formData = new FormData(messageForm);
    const name = formData.get("msgName");
    const email = formData.get("msgEmail");
    const message = formData.get("msgText");

    setTimeout(function () {
      formResponse.textContent =
        "Thank you for your message, " + name + "! We’ll get back to you soon.";
      formResponse.style.color = "green";
      formResponse.style.fontWeight = "bold";

      messageForm.reset();
    }, 1000);
  });
});
