let startupName = 'Surf Tribe';

let initialCaptial = 1000000; // dollars
let monthlyRevenue = 100000; // dollars
let monthlyExpenses = 80000; // dollars

let netCashFlow = monthlyRevenue - monthlyExpenses; // dollars
let cureentBalance = initialCaptial + netCashFlow; // dollars
let isProfitable = netCashFlow > 0; // boolean

console.log("Startup Name: " + startupName);
console.log("Net Monthly Cash Flow: $" + netCashFlow);
console.log("Current Balance: $" + cureentBalance);
console.log("Is the startup profitable? " + isProfitable);

