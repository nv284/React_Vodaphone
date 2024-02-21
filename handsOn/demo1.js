const numbers = [1,2,3,4,5];
const squared = [];

for(let i=0;i<numbers.length;i++){
    squared.push(numbers[i]*numbers[i])
}
console.log(squared); // [1, 4, 9, 16

// map 
const squared1 = numbers.map(numbers =>number*number);
console.log(squared1); // [1, 4, 9, 16, 25]

//filter
const num = [1, 2, 3, 4, 5, 13, 14, 21, 20];
const filtered = [];

//find 
const ans = num.find(num=>num>15);
console.log(ans);

for(let  i=0 ; i <num.length; i++ ){
    if(num[i]%2==0){
        filtered.push(num[i])
    }
}
console.log(filtered);

const filter1 = num.filter(num=>{
    if(num %2 ===0){
        return true ;
    }
});
console.log(filter1);


const fruits = [{name:"banana", color :"yeallow"},{name:"watermelon", color:"red"},{name:"orange",color:"orange"}]

const fileterdata = fruits.filter(fruit => fruit.color === 'red');
console.log(fileterdata);


const data = [1,2,3,4,5];
let sum = 0 ; 
data.reduce((sum, data )=>sum+data , 0);
//every 
let lessThenFive = data =>data<5;
let result = data.every(lessThenFive);
console.log(result);

const name = ["Ramm" , "Maria" , "Kimmy"];
name.every(name=>name.length>4)
name.some(name=>name.length>5)


// iteration 1 : sum =0 , data = 1 , return sum = 1;
// iteration 2: sum = 1 , data = 2 , return sum = 3

let occupants = [
    {name: 'Tony', age: 26, species: 'human'},
    {name: 'Katey', age: 26, species: 'human'},
    {name: 'Marley', age: 5, species: 'canine'},
    {name: 'Harlow', age: 2, species: 'feline'},
    {name: 'Diana', age: 1, species: 'feline'}
  ];
  const human = occupants.reduce((acc , occupant)=>{
    acc.push(occupant.name);
    return acc;
  },[]);
  console.log(human);