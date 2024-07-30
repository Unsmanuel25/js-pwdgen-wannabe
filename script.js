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
const firstName = window.prompt('Dimmi il tuo nome', 'Manuel');
const lastName = window.prompt('Dimmi il tuo cognome', 'Prisco');
const color = window.prompt('Dimmi il tuo colore preferito', 'Nero');

// # fase lavorazione dati

const fullName = `${firstName}` `${lastName}`;
const message = `${fullName}` `${color}`;

// # fase di prduzione output

myDiv.innerText = message;



