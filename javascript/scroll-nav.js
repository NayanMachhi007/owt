let prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("nav-scroll").style.top = "0";
  } else {
    document.getElementById("nav-scroll").style.top = "-100px";
  }
  prevScrollpos = currentScrollPos;

  document.getElementById("nav-scroll").style.transition = "all 0.5s";
};
