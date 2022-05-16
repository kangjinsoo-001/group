window.addEventListener("scroll", function () {
  const navArea = document.getElementById("header");

  if (window.pageYOffset > 0) {
    navArea.classList.add("is-sticky");
  } else {
    navArea.classList.remove("is-sticky");
  }
});
