$(document).ready(function(){
  slideRight();
  slideLeft();
})


// funzioni
// nomino la funzione slideRight🐱‍👤
function slideRight(){
  var right = $(".fa-angle-right"); //nomino la variabile da cliccare
  right.click(function (){ //chiamo la funzione al click
    var img = $(".images > img.active"); //definisco la variabile puntando all'immagine
    var nav = $(".nav > .fa-circle.active"); //definisco la variabile puntando all'elemento del nav
    next(); //richiamo la funzione creata per fare lo slide a DESTRA delle immagini
    if (img.hasClass("last")) { //se la variabile img ha classe "last"
      img.removeClass("active"); //rimuovo la classe "active"
      $("img.first").addClass("active"); //seleziono l'immagine con classe "first" e le aggiungo la classe "active", questo crea l'effetto loop da immagine 4 a immagine 1
    }
    if (nav.hasClass("last")) { //se la variabile nav ha class "last"
      nav.removeClass("active"); //rimuovo la classe "active"
      $(".nav > .first").addClass("active"); //seleziono il primo elemento del nav con classe "first" e gli aggiungo classe "active"
    }
  })
}

function slideLeft(){
  var left = $(".fa-angle-left"); //nomino la variabile da cliccare
  left.click(function(){ //chiamo la funzione al click
    var img = $(".images > img.active"); //definisco la variabile puntando all'immagine
    var nav = $(".nav > .fa-circle.active"); //definisco la variabile puntando all'elemento del nav
    prev(); //richiamo la funzione creata per fare lo slide a SINISTRA delle immagini
    if (img.hasClass("first")) { //se la variabile img ha classe "first"
      img.removeClass("active"); //rimuovo la classe "active"
      $("img.last").addClass("active"); //seleziono l'img con classe "last" e aggiungo la classe "active", questo crea l'effetto loop da immagine 1 a immagine 4
    }
    if (nav.hasClass("first")) { //se la variabile nav ha class "first"
      nav.removeClass("active"); //rimuovo la classe "active"
      $(".nav > .last").addClass("active"); //seleziono l'elemento del nav con classe "Last" e gli aggiungo classe "active"
    }
  })
}

function next(){
  var img = $(".images > img.active");
  var nav = $(".nav > .fa-circle.active");
  img.removeClass("active").next().addClass("active"); //rimuovo la classe "active" e la passo al suo discendente successivo (next)
  nav.removeClass("active").next().addClass("active");
}

function prev(){
  var img = $(".images > img.active");
  var nav = $(".nav > .fa-circle.active");
  img.removeClass("active").prev().addClass("active"); //rimuovo la classe "active" e la passo al suo precedente diretto (prev)
  nav.removeClass("active").prev().addClass("active");
}
