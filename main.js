$(document).ready(function(){
  slideRight();
  slideLeft();
  lastFirst();
})




// funzioni
function slideRight (){
  var right = $(".fa-angle-right");
  right.click(function() {
    var img = $(".images > .active");
    img.removeClass("active").next().addClass("active");
  })
}

function slideLeft (){
  var left = $(".fa-angle-left");
  left.click(function() {
    var img = $(".images > .active");
    img.removeClass("active").prev().addClass("active");
  })
}

function lastFirst (){
  var right = $(".fa-angle-right");
  right.click(function(){
    var img = $(".images > .active");
    if (img.hasClass("last")) {
      img.next().find(".first").addClass("active");
    }
  })
}
