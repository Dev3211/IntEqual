function equal(a, b){
let c = 1 / (a - b) //1 cannot be divided by 0 thus it returns infinity 

if(c == "Infinity"){
return true
}else{
return false
}

}

equal(10, 10) //true
equal(9, 10) //false
