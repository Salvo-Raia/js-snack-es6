// Snack 1 //
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

