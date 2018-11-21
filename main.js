// CENSURATORE
//  - Il software riceve in input un lungo testo e una serie di parole
// da censurare.
// - Restituisce il testo con xxx al posto delle parole censurate.
// - Stampa un "badword index" calcolato come il numero di
// parole censurate su il numero di parole totali

var frase = 'La Luna è un satellite naturale, l\' unico della Terra. Il suo nome proprio viene talvolta utilizzato, per antonomasia e con l\' iniziale minuscola («una luna»), come sinonimo di satellite anche per i corpi celesti che orbitano attorno ad altri pianeti.';

console.log(frase);

var Badwords = ['luna', 'pianeti', 'terra', 'nome', 'satellite'];

for (var i = 0; i < Badwords.length; i++) {

  var frase = frase.replace(Badwords[i],"xxx");
  
}

console.log(frase);
