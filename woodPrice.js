// woodPrice



function totalPrice (chairQuantity,tableQuantity, bedQuantity){
    let perChairWood = 3;
    let perTableWood = 5;
    let perBedWood = 10;

    let chairTotalWood = perChairWood * chairQuantity;
    let tableTotalWood = perTableWood * tableQuantity;
    let bedTotalWood = perBedWood * bedQuantity;

    let total = chairTotalWood + tableTotalWood + bedTotalWood
    return total;
}
let total = totalPrice(0,0,2);
// console.log(total)





function shopingPrice(shartQ, pantQ, shoeQ){

    let shartPrice = 350;
    let pantPrice = 400;
    let shoePrice = 900;

    let totalShart = shartPrice * shartQ;
    let totalPant = pantPrice * pantQ;
    let totalShoe = shoePrice * shoeQ;

    let totalPrice = totalShart + totalPant + totalShoe;
    return totalPrice;
}
let totals = shopingPrice(2,2,1)
console.log(totals)