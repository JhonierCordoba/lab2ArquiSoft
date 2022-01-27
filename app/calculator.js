'use estrict';
function add(a, b){
    return a+b;
}
function minus(a, b){
    return a-b;
}
function multiply(a,b){
    return a*b;
}
function divide(a, b){
    if (b == 0){
        return new Error("No es posible dividir por cero");
    }
    return a/b;
}
module.exports={
    add,
    minus,
    multiply,
    divide
}
