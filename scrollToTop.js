scrollBtn = document.getElementById("btn-top");
window.onscroll = function() {
  scrollFunction()
};

function scrollFunction() {
  if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
    scrollBtn.style.display = "block";
  } else {
    scrollBtn.style.display = "none";
  }
}

function scrollToTop(){
  document.body.scrollTop = 0; //for safari
  document.documentElement.scrollTop = 0; //for everything else
}
