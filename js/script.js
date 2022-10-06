/*Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.*/

//Pseudocodice 

//Chiedere all'utente il numero di km che vuole percorrere 
const userKm = parseInt(prompt("Quanti km vuoi percorrere ?"));
console.log(userKm);
//Chiedere all'utente l'età del passeggero
const userAge = parseInt(prompt("Quanti anni ha il passeggero?"));
console.log(userAge);
//Definisco prezzo base del biglietto (0.21 al km)
const priceBase = 0.21 * userKm ;
console.log(priceBase);
//Se l'utente ha meno di 18 anni effettuo uno sconto del 20%
    //ALTRIMENTI SE l'utente ha più  di 65 anni effettuo uno sconto del 40%
    //ALTRTIMENTI  non applico nessuno sconto 
const discount20 = priceBase * 0.2;
const discount40 = priceBase * 0.4;

//messaggio da ripetere 
let message = "";
//variabile per il prezzo scontato 
let priceBaseDiscount  ; 
// if se l'utente ha meno di 18 anni 
if (userAge <= 18 ){
    priceBaseDiscount = priceBase - discount20
    console.log(priceBaseDiscount);
    message = "Il prezzo del suo biglietto è scontato del 20% ed è " + priceBaseDiscount.toFixed(2) + "€";
    console.log(message);
} 
// if se l'utente ha più di 85 anni 
else if (userAge >= 65 ){
    priceBaseDiscount = priceBase - discount40;
    console.log(priceBaseDiscount); 
    message = "Il prezzo del suo biglietto è scontato del 40% ed è " + priceBaseDiscount.toFixed(2) + "€";
    console.log(message);
}
// altrimenti stampa prezzo non scontato 
else {
    message = "Il prezzo del suo biglietto non è scontato ed è  " + priceBase.toFixed(2) + "€";
    console.log(message);
}

//Output prezzo finale in forma umana ( massimo due decimali )

document.getElementById("result").innerHTML=message;


//
document.getElementById("userKm").innerHTML="I kilometri percorsi dal passaggero sono " + userKm ;
document.getElementById("userAge").innerHTML="L'età del passegero è " + userAge + " anni ";

