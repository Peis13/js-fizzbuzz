// FIZZBUZZ
// Scrivi un programma che stampi i numeri da 1 a 100,
// ma per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi Buzz.
// Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.

// INPUT
var numero;

// BOTTONE
var scopri = document.getElementById('scopri');
var nascondi = document.getElementById('nascondi');

// OUTPUT
var lista = document.getElementById('lista');
var fizzBuzz = document.getElementById('fizzbuzz');

// LOGICA
// Faccio un ciclo di 100 giri, dove "numero" è il contagiri
for (numero = 1; numero <= 100; numero++) {

  // Se il numero è sia divisibile per 5 che per 3,
  if ( ((numero % 3) == 0 ) && ((numero % 5) == 0)) {

    // allora al posto di "numero" scrivi "FizzBuzz", e il colore sarà rosso;
    fizzBuzz.innerHTML += '<li>' + '<span class="red">' + 'FizzBuzz' + '<span>' + '</li>';

    // Altrimenti se il numero è divisibile solo per 3,
  } else if ( (numero % 3) == 0 ) {

    // allora al posto di "numero" scrivi "Fizz", e il colore sarà azzurro;
    fizzBuzz.innerHTML += '<li>' + '<span class="lightblue">' + 'Fizz' + '<span>' + '</li>';

    // Altrimenti se il numero è divisibile solo per 5,
  } else if ( (numero % 5) == 0 ) {

    // allora al posto di "numero" scrivi "Buzz", e il colore sarà giallo;
    fizzBuzz.innerHTML += '<li>' + '<span class="yellow">' + 'Buzz' + '<span>' + '</li>';

    // Altrimenti "numero" sarà un numero
  } else {

    // Allora scrivi "numero", e il colore sarà blu;
    fizzBuzz.innerHTML += '<li>' + '<span class="blue">' + numero + '<span>' + '</li>';
  }
}

// SCOPRI
scopri.addEventListener('click',
  function() {

    // Mostra la lista
    lista.className = 'visibile';
  }
)

// NASCONDI
nascondi.addEventListener('click',
  function() {

    // Nascondi la lista
    lista.className = 'hidden';
  }
)
