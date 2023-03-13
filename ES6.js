const numbers = [89, 35, 98, 12];
const student = {
    name: 'sakib Khan',
    age: 32,
    movies: ['khing khan', 'Dhakar Mastan']
}

const about=`My Name is ${student.name} age of ${student.age} has number${numbers[2]}`;
// console.log(about);

// 2.arrow function.
const getFiftyFive=()=>55;
// console.log(getFiftyFive());

const addsixtyFive=num=>num+65;
const isEven=x=>x%2==0;
const n=isEven(5);
// console.log(n); 
const doMath=(num1,num2)=>{
    const sum=num1+num2;
    return sum;
}

const newNumbers=[...numbers];
newNumbers.push(99)
console.log(newNumbers);
console.log(numbers);

const currentNumbers=[...numbers,55];
console.log(currentNumbers);

