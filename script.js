const parolaInserita = prompt("inserisci una parola");
const parolaGirata = parolaInserita.split('').reverse().join('');
const risultato = (parolaGirata.toLowerCase()) === (parolaInserita.toLowerCase()) ? "la parola è palindroma" : "la parola non è palindroma";

document.getElementById("mex").innerHTML = (risultato);




