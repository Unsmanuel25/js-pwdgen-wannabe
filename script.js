console.log('JS OK');

/*
1-recupero il/gli elementi della pagina
2-chiedere nome utente
3-chiedere cognome utente
4-chiedere colore preferito utente
5-calcolo informazioni
6-stampo il messaggio in pagina
*/

// # fase preparatoria
const myDivElement = document.getElementById('myDiv');
console.log(myDivElement)

// # fase raccolta dati
const firstName = prompt('Dimmi il tuo nome', 'Manuel');
const lastName = prompt('Dimmi il tuo cognome', 'Prisco');
const color = prompt('Dimmi il tuo colore preferito', 'Nero');
console.log(firstName, lastName, color);

// # fase lavorazione dati
const password = firstName + lastName + color + '21';
console.log(password)

// # fase di prduzione output
resultElement.innerText += `<i>${password}</i>`;



