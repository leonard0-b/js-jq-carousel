$(document).ready(function(){
  slideRight();
  slideLeft();
})


// funzioni
// nomino la funzione slideRight🐱‍👤
function slideRight(){
  // creo una variabile puntando sulla freccia destra🐱‍👤
  var right = $(".fa-angle-right");
  // richiamo la funzione .click
  right.click(function() {
    // creo la var img puntando la prima img con classe active🐱‍👤
    var img = $(".active");
    // al click rimuovo la classe active per darla al suo "next"🐱‍👤
    img.removeClass("active").next().addClass("active");
    // se l'immagine ha classe "last" allora rimuovo la classe "active" e la aggiungo all'img con classe "first"🐱‍👤
    if (img.hasClass("last")) {
      img.removeClass("active");
      $(".first").addClass("active");
    }
  })
}

// nomino la funzione slideLeft🐱‍👤
function slideLeft(){
  // creo la variabile left puntando la freccia sinistra🐱‍👤
  var left = $(".fa-angle-left");
  // al click sulla freccia sinistra🐱‍👤
  left.click(function() {
    // creo la variabile img puntando l'img con classe active🐱‍👤
    var img = $(".active");
    // al click rimuovo la classe active e la aggiungo al suo precedente immediato🐱‍👤
    img.removeClass("active").prev().addClass("active");
    // se ha classe "first" allora rimuovo la classe "active" e la aggiungo all'img con classe "last"🐱‍👤
    if (img.hasClass("first")) {
      img.removeClass("active");
      $(".last").addClass("active");
    }
  })
}
