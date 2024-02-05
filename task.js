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
