//Descrizione:
//Scrivere un programma che chieda all’utente:
//Il numero di chilometri da percorrere,
  //  Età del passeggero,
    //    Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
//il prezzo del biglietto è definito in base ai km(0.21 € al km),
//    va applicato uno sconto del 20 % per i minorenni,
//        va applicato uno sconto del 40 % per gli over 65.,
//     IMPOSTAZIONE DI PENSIERO 
//_X_prima fase creare il programma di calcolo per il biglietto 
//_X_impostare gli sconti 
//_ _ iniziare il programma senza alcuna estetica tramite due input e un bottone 
//_X_ impostare l'output


const submit = document.getElementById('submit');

submit.addEventListener('click', function() {
    const manyKm  = document.getElementById('manyKm');
    const userAge = document.getElementById('userAge');
    let ticketPrice = manyKm.value * 0.21;
    if (userAge.value < 18) {
        ticketPrice = ticketPrice * 0.8;
    } else if (userAge.value > 65) {
        ticketPrice = ticketPrice *0.6
    }

    const results = document.getElementById('results');

    // output
   results.innerHTML = ticketPrice;
});