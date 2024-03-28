let prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  let currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("nav-scroll").style.top = "0";
  } else {
    document.getElementById("nav-scroll").style.top = "-150px";
  }
  prevScrollpos = currentScrollPos;

  document.getElementById("nav-scroll").style.transition = "all 0.5s";
};
