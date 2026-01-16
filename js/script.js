// Snack 1 //
console.log("%cSnack 1", "background: black; color: white; font-size: 20px");

const bikeExpo = [
    {Name: "Furious", Peso: 20},
    {Name: "Light", Peso: 15},
    {Name: "Strong", Peso: 35}, 
    {Name: "Kid", Peso: 10},
    {Name: "Sport", Peso: 18},
    {Name: "Off-Road", Peso: 22}
]

console.log("La bici più leggera è la nostra fantastica", bikeExpo[3].Name, "dal peso di", bikeExpo[3].Peso, "Kg");
console.log("Vuoi dare un'occhiata alle altre?");
console.table(bikeExpo)
// TODO: Voglio provare una soluzione dinamica. Se non conosco i pesi e voglio una funzione che trovi da sola la più leggera?!

// Snack 2 //
console.log("%cSnack 2", "background: black; color: white; font-size: 20px");

const soccerTeams = [
    {Name:"Boolean United", Points: 0, Fouls: 0},
    {Name:"Atletica Truthy", Points: 0, Fouls: 0},
    {Name:"Saint CSS", Points: 0, Fouls: 0},
    {Name:"Club Invokers", Points: 0, Fouls: 0},
    {Name:"HTML FC", Points: 0, Fouls: 0}
]

console.log("Vi presentiamo le squadre del CVR: Campionato virtuale randomico!");
console.table(soccerTeams)
console.log("Le regole sono semplici: ogni 2 secondi simuleremo i risultati delle partite giocate dalle squadre. Per ogni girone di partite ti mostreremo il risultati di punti e i falli cumulati dalle squadre fin a quel momento");

let oneSecond = 1000;
let partita = 0;
const simulazione = setInterval(function() {
    
    for (let i = 0; i < soccerTeams.length; i++) {
        soccerTeams[i].Points += randomNumbers(1, 8); 
        soccerTeams[i].Fouls += randomNumbers(1,3); 
    }
    partita++;
    console.log("Girone partite N°:", partita);
    console.table(soccerTeams)

    if (partita === 5) {
        clearInterval(simulazione)
    }

}, oneSecond * 3)




/* Funzioni */
/**
 * This function generates a random number between min and max value (both min and max values included).
 * @param {number} min The minimum value
 * @param {number} max The maximum value
 * @returns {number} a random number between min and max values
 */
function randomNumbers (min, max) {
    return Math.floor(Math.random () * (max-min + 1) + min);
    
}


