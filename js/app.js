/* console.log("działa!")
//Liczby i stringi
var myNumber = 2.2;
var myNumber2 = 8;

var xx1 = "34"  //string zawesze z apostrofem
var xx = 34  //to tylko liczba

var myText1 = "lalala"
console.log(myText1);
console.log(myNumber + myNumber2);

//Wartości logiczne
var prawda = true;
var falsz = false;
console.log (prawda);

//Tablice
var tablica = [1,2,3]; //ile jest tutaj elementów? 3
// Na jakiej pozycja jest liczba 2? 1 (wszystkie elementy liczymy od zera!)
console.log (tablica)
console.log (tablica[1])// wypisuję liczbę na danej pozycji

//pobrac dlugosc tablicy
console.log( tablica.length );

var tablica2 = ["jabłko", "gruszka", 5, true, [6] ]
console.log ( tablica2 );
console.log ( tablica2 [1] );

//Funkcje
function wypisywanie ( owoc ){ //var owoc = "marchewka"
	
	var sok = " miksowanie " + owoc;
	return sok
}
var otrzymanySok = wypisywanie( "marchewka" ); //uruchamianie funkcji (albo wywolywanie)
console.log (otrzymanySok);
console.log (wypisywanie( "banan" ) );
//console.log(owoc)
//"miksowanie"+owoc====sok====wypisywanie ("marchewka")====otrzymanySok

function isRain (){
	console.log("sprawdzam pogode");
	///algorytm
	return true;
}
//Instrukcje warunkowe
var czyPada = isRain ();

if ( czyPada ){
	console.log ( "wez parasol");
} else {
	console.log ("wez okulary przeciwsloneczne");
}


//Pętle
for ( var i = 98; i < 100; i++ ){    //i+1 === i++
console.log ("czesc",i );
}
*/


// Moje ćwiczenie

var name = "Paulina";
console.log (name);
var tablica = [ "Ewa", "Paulina", "Marta", "Marysia"]
console.log ( tablica [1] )

var number = 4
var number2 = 2
if (number > number2) {
	console.log ( "hurra!")
}
for (var i = 0; i<4; i++ )
	console.log (tablica [i]);

/// DOM Api
var ppp = document.querySelector(".jumbotron"); // jego jeszcze nie ma
ppp.style.border = "3px solid red"

var divs = document.querySelectorAll("div")
console.log (divs.length);
divs[0].style.display = "none"
















































































