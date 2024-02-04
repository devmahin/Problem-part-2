let array1 = [11,23,25,65,64,65,76,86,6]


// biggerst Number
// function avarageLearge(arr){
//     let arrayBig = arr[0];
//     for(let array of arr){
//         // console.log(array)
//         if(array > arrayBig){
//             arrayBig = array;
//         }
//     }
//     return arrayBig

// }
// let biggerst = avarageLearge(array1);









// smolest Number
function avarageLearge(arr){
    let arrayBig = arr[0];
    for(let array of arr){
        // console.log(array)
        if(array < arrayBig){
            arrayBig = array;
        }
    }
    return arrayBig

}
let biggerst = avarageLearge(array1);
console.log(biggerst)
