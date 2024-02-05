function addition(a, b) {
    if (typeof a !== "number" || typeof b !== "number") {
        return "Number is not vaild"
    }
    const additions = a + b;
    return additions;

}
let total = addition(5, 34)
// console.log(total)




function fullName (first,last){
    if(typeof first !== "string" || typeof last !== "string"){
        return "String is not valid"
    }
    let full = first + " "  + last;
    // console.log(full)
    return full;

}



// console.log(
// fullName("mahin" , "Mahon")

// )


const obj = {name : "mahin", price: 344};
// console.log(obj)

function myObjects (product){
    if(typeof product !== "object" || !product.price){
        return "Object is not valid";
    }

    else{
        return `My name is ${product.name}. My product price ${product.price}`
    }
}

let objects =  myObjects(obj)
// console.log(objects)




let arrays = [12,3,4,5,6,7,8];
function arrayFun(arr){
    if(!Array.isArray(arr)){
        return "Array is not valid"
    }

        
    
}
console.log(
arrayFun(arrays)
)