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
const strings = ['rahim', 'robin', 'rafi', 'ron', 'rashed', "df", "mah", "a"];
let smallestName = strings[0];
for (let i = 1; i < strings.length; i++) {
    // console.log(strings[i].length)
    if (strings[i].length < smallestName.length) {
        smallestName = strings[i];
    }
}

// console.log("Friend with the smallest name:", smallestName);




// Task-3:
// Your task is to calculate the total budget required to buy electronics:
// Write a JavaScript function named calculateElectronicsBudget that takes in the number of laptop, tablets, and mobile and returns the total money required.


function totalBudget(mobileQuantity, laptopQuantity, tabletQuantity) {
    let mobile = 20000;
    let laptop = 35000;
    let tablet = 15000;

    let tortal = mobile * mobileQuantity + laptop * laptopQuantity + tabletQuantity * tablet;

    // let totals = mobile + laptop + tablet;
    return tortal;
}
let total = totalBudget(1, 2, 20)
// console.log(total)


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









function findAveragePhonePrice(phones) {
    // console.log(phones.price)
    if (phones.length === 0 || typeof phones !== "object") {
        return "Plese object submit"
    }

    let total = 0;
    let len = phones.length;

    for (let pho of phones) {

        total += pho.price / len;
    }

    return total;

}




// console.log(
//     findAveragePhonePrice(phones)

// )




//     Task -5: (Hard)
// For each employee their current salary is calculated by multiplying yearly increment with experience then adding the result to the starting salary. Now calculate is the total salary has to be provided by the company in a month.

const employees = [
    { name: "shahin", experience: 5, starting: 20000, increment: 5000 },
    { name: "shihab", experience: 3, starting: 15000, increment: 7000 },
    { name: "shikot", experience: 10, starting: 30000, increment: 1000 },
    { name: "shohel", experience: 0, starting: 29000, increment: 4000 },
];

function employeeSalary(employ) {
    let total = 0;
    let totalInc = 0;

    for (let i = 0; i < employ.length; i++) {
        let incrementYear = employ[i].increment * employ[i].experience
        // console.log(incrementYear)
        totalInc += incrementYear;
        total += employ[i].starting;
    }
    return totalInc + total;
}
console.log(
employeeSalary(employees)
)

