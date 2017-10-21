 'use strict';

console.log ("działa")

document.addEventListener('DOMContentLoaded', function() {
      // tutaj będziemy umieszczać kod ze wszystkich zadań
      //Mam 100% pewności, że caly html sie wczytal

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





    });