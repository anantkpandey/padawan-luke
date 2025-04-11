// luke_supply.js - Yoda helps Luke solve a galactic crisis
console.log("Galactic Supply Decision - Yoda’s Counsel");

// Rebel base data (example - adjust, you may)
let base = "Tatooine";       // Base in need
let foodStock = 30;          // Tons of food (0-100)
let fuelReserve = 20;        // Barrels of fuel (0-100)
let distressSignal = true;   // Urgent call for aid

// Decision logic with if-else and logical operators
if (foodStock < 50 && fuelReserve < 30 && distressSignal) {
    console.log(`${base} in peril is! Send supplies, Luke—urgent it is!`);
    console.log(`Food: ${foodStock} tons, Fuel: ${fuelReserve} barrels, Distress: Yes`);
} else if (foodStock < 50 && fuelReserve >= 30) {
    console.log(`${base} hungers—food scarce at ${foodStock} tons. Fuel holds at ${fuelReserve}. Send rations!`);
} else if (foodStock >= 50 && fuelReserve < 30) {
    console.log(`${base} stalls—fuel low at ${fuelReserve} barrels. Food steady at ${foodStock}. Send fuel!`);
} else if (foodStock < 50 || fuelReserve < 30 && !distressSignal) {
    console.log(`${base} struggles—Food: ${foodStock}, Fuel: ${fuelReserve}, but no distress. Monitor, we must!`);
} else {
    console.log(`${base} thrives—Food: ${foodStock}, Fuel: ${fuelReserve}, Distress: No. Rest, we can!`);
}

// Yoda’s wisdom
if (base === "Hoth" || distressSignal) {
    console.log("Cold or dire, action swift we need—Force guide us, it will!");
}