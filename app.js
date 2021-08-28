let modal = document.getElementById("tvesModal");
let btn = document.getElementsByClassName("close")[0];
/* let span = document.getElementsByClassName("close")[0]; */
let body = document.getElementsByTagName("body")[0];

window.onload = function () {
  modal.style.display = "block";

  body.style.position = "static";
  body.style.height = "100%";
  body.style.overflow = "hidden";
};

btn.onclick = function () {
  modal.style.display = "none";

  body.style.position = "inherit";
  body.style.height = "auto";
  body.style.overflow = "visible";
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";

    body.style.position = "inherit";
    body.style.height = "auto";
    body.style.overflow = "visible";
  }
};
