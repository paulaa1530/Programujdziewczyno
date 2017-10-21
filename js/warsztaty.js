 'use strict';

console.log ("działa")

document.addEventListener('DOMContentLoaded', function() {
      // tutaj będziemy umieszczać kod ze wszystkich zadań
      //Mam 100% pewności, że caly html sie wczytal
//Zadanie 1

  var menuList = document.querySelectorAll(".nav-list > li"); //wyszukaj mi tylko bezpośrednie dzieci
  console.log(menuList);  /// mamy tutaj tablice!!!
  
  for (var i = 0 ; i < menuList.length; i++){
  menuList[i].addEventListener("mouseover", function () { 
  // console.log ("huraaaa")
  //this to taka zmienna, ktora jest tym, na co najechal użytkownik
  var dropdown = this.querySelector(".dropdown"); 
  // console.log (dropdown);

   if (dropdown !=null){
  	dropdown.style.display = "block"
  }

    })
  }

  for (var i = 0 ; i < menuList.length; i++){
  menuList[i].addEventListener("mouseout", function () { 
  // console.log ("huraaaa")
  //this to taka zmienna, ktora jest tym, na co najechal użytkownik
  var dropdown = this.querySelector(".dropdown"); 
  // console.log (dropdown);

    if (dropdown !=null){
  	dropdown.style.display = "none"
  }

    })
  }
  /// Zadanie 2
  var buttons = document.querySelectorAll('.read-more');
    //console.log(buttons);

      //console.log(buttons[0].previousElementSibling); // Powinnaś zobaczyć w konsoli paragraf o klasie `more`
 
 
     //console.log(this); // Powinnaś zobaczyć przycisk w konsoli

      
      buttons[0].addEventListener('click', function() {
      	var textArea = this.previousElementSibling;

      // Poniższa linijka sprawdza, czy `style.display` jest ustawiony na `none` LUB jest pusty
      // Dwie kreski obok siebie, czyli || oznaczają LUB, więc aby wykonał się kod podany w nawiasie klamrowym
      // warunek po jednej albo po drugiej stronie kresek musi być spełniony

      if (textArea.style.display === 'none' || textArea.style.display === '') {

        // ten kod wykona się, gdy spełni się jeden z powyższych warunków
        textArea.style.display = 'block';
        this.innerHTML = 'MNIEJ <span class="glyphicon glyphicon-chevron-up"></span>';
      } else {

        // ten kod zadziała, gdy warunek podany w `if` nie będzie spełniony, czyli w przypadku
        // gdy `style.display` jest inny niż `none` oraz gdy nie jest pusty
        textArea.style.display = 'none';
        this.innerHTML = 'WIĘCEJ <span class="glyphicon glyphicon-chevron-down"></span>';
      }

    });

    });
    


    