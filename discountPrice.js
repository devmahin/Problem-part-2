// function dicountPrice(quantity){
//     // let productPrice = 0;
//     if(quantity <= 100){
//         return quantity * 100;
//     }else if(quantity  <= 200){
//         return quantity * 90;
//     }else{
//         return quantity * 80
//     }
    
// }
// let dis = dicountPrice(300)
// console.log(dis)




// discount multy layer
function discount (quantity){
    let first100Price = 100;
    let second100Price = 90;
    let third100Price = 70;

    if(quantity < 100){
        return quantity * first100Price;
    }else if(quantity <= 200){
        let first100Quality = 100 * first100Price;
        let remainingQuantity = quantity - 100;
        let dicount = remainingQuantity * second100Price;
        return first100Quality + dicount
    }else{
        let first100Quality = 100 * first100Price;
        let second100Quantity = 100 * second100Price;
        let remainingQuantity = quantity - 200;
        let dicount = remainingQuantity * third100Price;
        return first100Quality + second100Quantity + dicount;
    }
}
console.log(
discount(90)

)
console.log(
discount(101)
)
console.log(
discount(201)
)