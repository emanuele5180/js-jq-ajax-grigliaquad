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
  var btn = $('#btn');
  btn.click(getNewNumber);

}

function getNewNumber(){
  console.log("click");
  $.ajax({
    url: "https://flynn.boolean.careers/exercises/api/random/int",
    method: "GET",
    success: function (data, stato) {
    //$("#risultati").html(data);
    console.log('data',data);
    console.log('stato',stato);
    },
    error: function (richiesta, stato, errori) {
    alert("E' avvenuto un errore. " + errori);
    }
  });




}

// function ajaxRequest() {
// }
