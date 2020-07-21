// GOAL:
// Griglia 6x6, ad ogni click parte una
// richiesta AJAX che prende un
// numero random da 1 a 9.
// Se è <= 5 il quadrato diventa giallo,
// se è > di 5 il quadrato diventa verde.
// Il numero ottenuto appare al centro
// del quadrato


function init() {

  console.log("hello world");

  //ajaxRequest();
  addNumber();




}

$(document).ready(init);

function addNumber(){
  var btn = $('td');
  btn.click(getNewNumber);

}

function getNewNumber(){
  var currentBtn = $(this);
  console.log("click");
  $.ajax({
    url: "https://flynn.boolean.careers/exercises/api/random/int",
    method: "GET",
    success: function (data, stato) {
      var success = data ['success'];
      var value = data ['response'];

      if (value <= 5) {
        currentBtn.addClass('yellow');
      } else {
        currentBtn.addClass('green');
      }

      currentBtn.text(value);





      console.log('next value ' + value);

    },
    error: function (richiesta, stato, errori) {
    alert("E' avvenuto un errore. " + errori);
    }
  });




}

// function ajaxRequest() {
// }
