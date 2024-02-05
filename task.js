// Task -1:
// Find the lowest number in the array below.
// const heights2 = [167, 190, 120, 165, 137,5];

// function lowestNumber(arr){
//     let arrIndex = arr[0];
//     // console.log(arrIndex)
//     let lowestNum = 0;
//     for(let array of arr){
//         // console.log(array)
//         if(array < arrIndex){
//             lowestNum = array;
//         }
//     }
//     return lowestNum;
// }
// console.log(
// lowestNumber(heights2))



// Task -2:
// Find the friend with the smallest name.
const strings = ['rahim', 'robin', 'rafi', 'ron', 'rashed', "df", "mah","a"];
let smallestName = strings[0];
for (let i = 1; i < strings.length; i++) {
    // console.log(strings[i].length)
    if (strings[i].length < smallestName.length) {
        smallestName = strings[i];
    }
}

console.log("Friend with the smallest name:", smallestName);




// Task-3:
// Your task is to calculate the total budget required to buy electronics:
// Write a JavaScript function named calculateElectronicsBudget that takes in the number of laptop, tablets, and mobile and returns the total money required.


function totalBudget (){
    let mobile = 20000;
    let laptop = 35000;
    let tablet = 15000;

    let totals = mobile + laptop + tablet;
    return totals;
}
let total = totalBudget()
console.log(total)


// Task-4:
// You are given an array of phone objects, each containing information about the model, brand, and price. Your task is to write a JavaScript function named findAveragePhonePrice that takes this array as input and returns the average price of phone.

// Input


    const phones = [
        { model: "PhoneA", brand: "Iphone", price: 95000 },
        { model: "PhoneB", brand: "Samsung", price: 40000 },
        { model: "PhoneC", brand: "Oppo", price: 26000 },
        { model: "PhoneD", brand: "Nokia", price: 35000 },
        { model: "PhoneE", brand: "Iphone", price: 105000 },
        { model: "PhoneF", brand: "HTC", price: 48000 },
    ];
