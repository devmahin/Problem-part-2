// let topProducts = [
//     {
//         "name": "Product A",
//         "price": 99.99,
//         "quantity" : 5
//     },
//     {
//         "name": "Product B",
//         "price": 149.99
//     },
//     {
//         "name": "Product C",
//         "price": 199.99
//     },
//     {
//         "name": "Product D",
//         "price": 79.99
//     },
//     {
//         "name": "Product E",
//         "price": 299.99
//     },
//     {
//         "name": "Product F",
//         "price": 249.99
//     },
//     {
//         "name": "Product G",
//         "price": 179.99
//     },
//     {
//         "name": "Product H",
//         "price": 349.99
//     },
//     {
//         "name": "Product I",
//         "price": 129.99
//     },
//     {
//         "name": "Product J",
//         "price": 399.99
//     }
// ];

// function totals (product){
//     let sum = 0;
//     for(let pro of product){
//         // console.log(pro)
//         sum += pro["price"]
//     }
//     // console.log(sum)
//     return sum

// }
// let total = totals(topProducts)
// console.log(total)




// quarnity 
let products = [
    {
        "name": "Product A",
        "price": 99.99,
        "quantity": 5
    },
    {
        "name": "Product B",
        "price": 149.99,
        "quantity": 10
    },
    {
        "name": "Product C",
        "price": 199.99,
        "quantity": 3
    },
    {
        "name": "Product D",
        "price": 79.99,
        "quantity": 8
    },
    {
        "name": "Product E",
        "price": 299.99,
        "quantity": 2
    },
    {
        "name": "Product F",
        "price": 249.99,
        "quantity": 7
    },
    {
        "name": "Product G",
        "price": 179.99,
        "quantity": 6
    },
    {
        "name": "Product H",
        "price": 349.99,
        "quantity": 4
    },
    {
        "name": "Product I",
        "price": 129.99,
        "quantity": 9
    },
    {
        "name": "Product J",
        "price": 399.99,
        "quantity": 1
    }
];
// console.log(products)


function allProduct(products){
    let sum = 0;

    for(let product of products){
        // console.log(product)
        let totalPricrQuantity = product["price"] * product["quantity"];
        // console.log(totalPricrQuantity)
        sum += totalPricrQuantity;
    }
    return sum
}

let all = allProduct(products)
console.log(all)