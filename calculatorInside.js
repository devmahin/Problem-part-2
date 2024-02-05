function add (a,b){
    // console.log(a+ b)
    let addition = a + b;
    return addition;
}
function substract(a,b){
    let substraction = a - b;
    return substraction
}
function multiply (a,b){
    return a * b

}
function divition (a,b){
    let div = a / b
    return div
}




function calculation (a,b,opration){
    if(opration === "add"){
        const addFun = add(a,b);
        return addFun
    }else if(opration === "substract"){
        const sub = substract(a,b);
        return sub;
    }else if (opration === "multiply"){
        return multiply(a,b)
    }else if (opration === "divition"){
        return divition (a,b)
    }else{
        console.log("opration is not allowed")
    }
}
let result = calculation(7,10, "add")
console.log(result)