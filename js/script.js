function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function fetchX(uri) {
  URI = await fetch(uri)
    .then((response) => response.blob())
    .then((myBlob) => {
      const objectURL = URL.createObjectURL(myBlob);
      return objectURL;
    });

  return URI;
}

var fetch_list = ["./video/Hero.webm", "./video/Out.mp4"];

async function fetchMaster() {
  for (let i = 0; i < fetch_list.length; i++) {
    uri = await fetchX(fetch_list[i]);
    if (fetch_list[i] == "./video/Hero.webm") {
      document.getElementById("hero-vid").src = uri;
    } else if (fetch_list[i] == "./video/Out.mp4") {
      document.getElementById("promovid").src = uri;
    }
  }
  setTimeout(splashDestroyer, 5000);
}
fetchMaster();

async function splashDestroyer() {
  var elem = document.getElementsByClassName("splash-screen");
  document.getElementById("welcome").style.animation =
    " init 0.5s 0.2s cubic-bezier(0.55, 0.055, 0.675, 0.19) forwards,moveDown 1s 0.8s cubic-bezier(0.6, -0.28, 0.735, 0.045) forwards,moveUp 1s 1.8s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards,materia 0.5s 2.7s cubic-bezier(0.86, 0, 0.07, 1) forwards,hide 2s 2.9s ease forwards";
  document.getElementsByClassName("splash")[0].style.animation =
    "puff 0.5s 1.8s cubic-bezier(0.55, 0.055, 0.675, 0.19) forwards,borderRadius 0.2s 2.3s linear forwards";
  await sleep(200);
  elem[0].style.animation = "SCALEdown 700ms";
  await sleep(700);
  elem[0].remove();
  document.getElementById("hero-vid").play();
}

var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
btn.onclick = function () {
  modal.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
