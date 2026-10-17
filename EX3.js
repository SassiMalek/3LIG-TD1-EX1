
const pays = ["Italie", "Japon", "Grèce", "Espagne", "Canada"];

// 1. Extraire le premier et le deuxième pays
const [pays1, pays2] = pays;
console.log(pays1);
console.log(pays2);

// 2. Extraire uniquement le troisième pays
const [, , pays3] = pays;
console.log(pays3); // Grèce

// 3. Extraire le premier pays et récupérer les autres
const [destinationPrincipale, ...autresPays] = pays;

console.log(destinationPrincipale); // Italie
console.log(autresPays);
//const [pays2] =pays.map(pays =>pays)
//pays2[0]="Tunisie"
//console.log(pays)
console.log("Test d'exécution réussi !");