const tablinks = document.getElementsByClassName("tab-links");
const tabcontents = document.getElementsByClassName("tab-contents");
const scriptURL =
  "https://script.google.com/macros/s/AKfycbyZq9-Uw1Y6mz_HhvyUhPNEzQh9nfrCQGFwtkkTLmKD5DbItkRJbwPux0M-ok31oxRV/exec";
const form = document.forms["submit-to-google-sheet"];
const msg = document.getElementById("msg");

function opentab(tabname) {
  for (tablink of tablinks) {
    tablink.classList.remove("active-link");
  }
  for (tabcontent of tabcontents) {
    tabcontent.classList.remove("active-tab");
  }
  event.currentTarget.classList.add("active-link");
  document.getElementById(tabname).classList.add("active-tab");
}

var sidemeu = document.getElementById("sidemenu");

function openmenu() {
  sidemeu.style.right = "0";
}

function closemenu() {
  sidemeu.style.right = "-200px";
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      msg.innerHTML = "Message send successfully";
      setTimeout(function () {
        msg.innerHTML = "";
      }, 5000);
      form.reset();
    })
    .catch((error) => console.error("Error!", error.message));
});
