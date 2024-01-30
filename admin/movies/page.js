
function toggle(){
    var trailer = document.querySelector('.trailer');
    var iframe = document.querySelector('iframe');
trailer.classList.toggle('active')
iframe.currentTime = 0;
iframe.pause();

}

document.addEventListener("DOMContentLoaded", function () {
    window.addEventListener("scroll", function () {
      var navbar = document.querySelector(".navbar");
  
      if (window.scrollY > 0) {
        navbar.classList.add("white-bg");
      } else {
        navbar.classList.remove("white-bg");
      }
    });
  });