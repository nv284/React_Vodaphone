function multiply(a,b){
  b= (typeof b!=='undefined')?b:1;
  return a*b;
}
console.log(multiply(5,2));
console.log(multiply(5));

const obj = {
  firstname:"dev",
  lastname :"paul"
};
const obj2 = {...obj};
console.log(obj2);
var colors = ["red", "green","white","black"];
var [a,b,...args]=colors;
console.log(a);
console.log(b);
console.log(args);

let num = new Function('...args','return args');  
console.log(num(10,20.30));





