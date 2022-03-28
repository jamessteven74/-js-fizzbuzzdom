/*
Consegna:
Scrivi un programma che stampi in console i numeri da 1 a 100.


MILESTONE 1
Per i multipli di 3 stampi “Fizz” al posto del numero
Per i multipli di 5 stampi Buzz.
Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.
*/

//scrivo il programma che stampi i numeri in console da 1 a 100.

const listHtml = document.getElementById("list");




for ( let i = 1; i < 101; i++){
    console.log(i)

    const listItem = `<li> ${i}</li>`;
    listHtml.innerHTML = listHtml.innerHTML + listItem;
    
}
    






//creazione square


