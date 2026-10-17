
const reservations = [
    { numero: 101, client: "Nadia", destination: "Bali", montant: 1800, statut: "Confirmée" },
    { numero: 102, client: "Karim", destination: "Rome", montant: 950, statut: "En attente" },
    { numero: 103, client: "Leila", destination: "Tokyo", montant: 2500, statut: "Confirmée" },
    { numero: 104, client: "Sami", destination: "Santorin", montant: 1200, statut: "Annulée" },
    { numero: 105, client: "Amira", destination: "Djerba", montant: 500, statut: "Confirmée" }
];

// 1. Créer un tableau des réservations confirmées
const reservationsConfirmees = reservations.filter(
    reservation => reservation.statut === "Confirmée"
);
console.log(reservationsConfirmees);

// 2. Créer un tableau contenant les noms des clients
const clients = reservations.map(reservation => reservation.client);
console.log(clients);

// 3. Rechercher la réservation numéro 103
const reservation103 = reservations.find(
    reservation => reservation.numero === 103
);
console.log(reservation103);

// 4. Calculer le montant total des réservations confirmées
const montantTotal = reservations
    .filter(reservation => reservation.statut === "Confirmée")
    .reduce((total, reservation) => total + reservation.montant, 0);

console.log(montantTotal); // 4800

// 5. Vérifier si toutes les réservations sont confirmées
const toutesConfirmees = reservations.every(
    reservation => reservation.statut === "Confirmée"
);
console.log(toutesConfirmees); // false

// 6. Créer un tableau contenant les clients et leurs voyages
const clientsVoyages = reservations.map(reservation => ({
    client: reservation.client,
    voyage: reservation.destination
}));

console.log(clientsVoyages);
