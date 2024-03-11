let prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  let currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("first-nav-scroll").style.top = "0";
  } else {
    document.getElementById("first-nav-scroll").style.top = "-50px";
  }
  prevScrollpos = currentScrollPos;

  document.getElementById("first-nav-scroll").style.transition = "all 0.5s";
};
