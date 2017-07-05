(function() {

var config = {
  speed: 2, // setTimeout delay. less = faster. default: 2
  space: -10 // scrollBy value. less = faster. default: -10
}
function createBtn() {
  var btn = document.createElement("button"),
      arrow = document.createElement("i");
  btn.classList.add("backToTop", "hidden");
  arrow.classList.add("fa", "fa-long-arrow-up");
  document.body.appendChild(btn);
  btn.appendChild(arrow);
  return btn;
}

var btn = createBtn();

function scrollAnimation() {
    if (document.body.scrollTop > 0) {
      window.scrollBy(0, config.space);
      setTimeout(scrollAnimation, config.speed);
    }
  }

btn.addEventListener("click", function(callback) {
  callback.stopPropagation();
  scrollAnimation();

}, false)

window.addEventListener("scroll", function() {
  if (document.body.scrollTop > 80) {
    btn.classList.remove("hidden");
  } else {
    btn.classList.add("hidden");
  }
}, false)

})();
