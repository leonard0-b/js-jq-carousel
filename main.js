$(document).ready(function(){
  slideRight();
  slideLeft();
  keyboard();
  dots();
})


// FUNZIONI
function slideRight(){  //nomino la funzione slideRight🐱‍👤
  var right = $(".fa-angle-right"); //nomino la variabile da cliccare🐱‍👤
  right.click(function (){  //chiamo la funzione al click🐱‍👤
    var img = $(".images > img.active");  //definisco la variabile puntando all'immagine🐱‍👤
    var nav = $(".nav > .fa-circle.active");  //definisco la variabile puntando all'elemento del nav🐱‍👤
    next(); //richiamo la funzione creata per fare lo slide a DESTRA delle immagini🐱‍👤
    if (img.hasClass("last")) { //se la variabile img ha classe "last"🐱‍👤
      img.removeClass("active");  //rimuovo la classe "active"🐱‍👤
      $("img.first").addClass("active");  //seleziono l'immagine con classe "first" e le aggiungo la classe "active", questo crea l'effetto loop da immagine 4 a immagine 1🐱‍👤
    }
    if (nav.hasClass("last")) { //se la variabile nav ha class "last"🐱‍👤
      nav.removeClass("active");  //rimuovo la classe "active"🐱‍👤
      $(".nav > .first").addClass("active");  //seleziono il primo elemento del nav con classe "first" e gli aggiungo classe "active"🐱‍👤
    }
  })
}

function slideLeft(){ //nomino la funzione slideLeft🐱‍👤
  var left = $(".fa-angle-left"); //nomino la variabile da cliccare🐱‍👤
  left.click(function(){  //chiamo la funzione al click🐱‍👤
    var img = $(".images > img.active");  //definisco la variabile puntando all'immagine🐱‍👤
    var nav = $(".nav > .fa-circle.active");  //definisco la variabile puntando all'elemento del nav🐱‍👤
    prev(); //richiamo la funzione creata per fare lo slide a SINISTRA delle immagini🐱‍👤
    if (img.hasClass("first")) {  //se la variabile img ha classe "first"🐱‍👤
      img.removeClass("active");  //rimuovo la classe "active"🐱‍👤
      $("img.last").addClass("active"); //seleziono l'img con classe "last" e aggiungo la classe "active", questo crea l'effetto loop da immagine 1 a immagine 4🐱‍👤
    }
    if (nav.hasClass("first")) {  //se la variabile nav ha class "first"🐱‍👤
      nav.removeClass("active");  //rimuovo la classe "active"🐱‍👤
      $(".nav > .last").addClass("active"); //seleziono l'elemento del nav con classe "Last" e gli aggiungo classe "active"🐱‍👤
    }
  })
}

function next(){  //nomino la funzione next🐱‍👤
  var img = $(".images > img.active");
  var nav = $(".nav > .fa-circle.active");
  img.removeClass("active").next().addClass("active");  //rimuovo la classe "active" e la passo al suo discendente successivo (next)🐱‍👤
  nav.removeClass("active").next().addClass("active");
}

function prev(){  //nomino la funzione prev🐱‍👤
  var img = $(".images > img.active");
  var nav = $(".nav > .fa-circle.active");
  img.removeClass("active").prev().addClass("active");  //rimuovo la classe "active" e la passo al suo precedente diretto (prev)🐱‍👤
  nav.removeClass("active").prev().addClass("active");
}

function keyboard(){
  $(document).keyup(function (e) {  //alla pressione dei tasti sulla keyboard🐱‍👤
  if (e.keyCode == "39") {  //se il keycode è 39 (la freccia destra)🐱‍👤
    next(); //allora esegui funzione next🐱‍👤
  }
  if (e.keyCode == "37") {  //se il keycode è 37 (freccia sinistra)🐱‍👤
    prev(); //allora esegui funzione prev🐱‍👤
  }
});
}

function dots(){
  $('.slider-wrapper .nav i').click(function(){ //creo funzione al click sui dot🐱‍👤
    var dotPos = $('.slider-wrapper .nav i').index(this); //determino il numero indice del dot premuto (this)🐱‍👤
    var images = $('.slider-wrapper .images img');  //creo variabile per le immagini🐱‍👤
    $('.slider-wrapper .nav i').removeClass("active");  //al click rimuovo la classe active dai dot🐱‍👤
    images.removeClass("active"); //rimuovo la classe active dalle immagini🐱‍👤
    $(this).addClass("active"); //aggiungo la classe ative al dot premuto (this)🐱‍👤
    images.eq(dotPos).addClass("active"); //assegno la classe active all'immagine ecorrispondente all'indice del dot premuto (this)🐱‍👤
    console.log(images);
    console.log(dotPos);
  })
}

function generateDots() { //non la richiamo nell'esercizio
  var nav = $('.slider-wrapper .nav');  //creo variabile nav🐱‍👤
  var imagesLen = $('.slider-wrapper .images img').length; //creo variabile "lunghezza img" (il numero delle immagini presenti)🐱‍👤
  for (var i = 0; i < imagesLen; i++) { //ciclo for per generare tanti dot quante immagini ho🐱‍👤
    if (i == 0) { // se i = 0 🐱‍👤
      var html = nav.html() + '<i class="fas fa-circle active first"></i>'; //stampa nel DOM dot con classe "first"🐱‍👤
    } else if (i == imagesLen - 1) {  //se i = numero immagini - 1🐱‍👤
      var html = nav.html() + '<i class="fas fa-circle last"></i>'; //stampa nel DOM dot con classe "last"🐱‍👤
    } else {  //altrimenti🐱‍👤
      var html = nav.html() + '<i class="fas fa-circle"></i>';  //stampa nel DOM il dot🐱‍👤
    }
    nav.html(html);
  }
}
