console.log('JS OK')

// 1. Prendo tramite id il mio paragrafo vuoto dell'html e lo assegno ad una variabile. La stampo.

let paragraph = document.getElementById('paragraph');
console.log(paragraph);

//  2. Creo una variabile non costante password con un messaggio "La tua password è: ". La stampo.

let password = "La tua password è: ";
console.log(password);

// 3. Uso il prompt per chiedere il nome all'utente e lo salvo in una variabile. La stampo.

const userName = prompt("Qual è il tuo nome?");
console.log(userName);

// .4. Uso il prompt per chiedere il cognome all'utente e lo salvo in una variabile. La stampo.

const userSurname = prompt("Qual è il tuo cognome?");
console.log(userSurname);

// 5. Uso il prompt per chiedere il colore preferito all'utente e lo salvo in una variabile. La stampo.

const userFavoriteColour = prompt("Qual è il tuo colore preferito?");
console.log(userFavoriteColour);

// 6. Alla variabile password aggiungo con += le variabili di nome, cognome e colore preferito 
// ed aggiungo il 23 in stringa, tutto senza spazi. La stampo.

password += `<strong>${userName}${userSurname}${userFavoriteColour}23<strong>`;
console.log(password);

// 7. Uso la variabile con l'id del paragrafo e inserisco nel suo testo la variabile messaggio. 
// In questo caso con innerHTML perchè voglio rendere la password generata in grassetto

paragraph.innerHTML = password;
