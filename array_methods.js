const products = [
    { name: 'laptop', price: 32000, brand: 'lenovo', color: 'silver' },
    { name: 'phone', price: 70000, brand: 'iphone', color: 'golden' },
    { name: 'watch', price: 3000, brand: 'casio', color: 'yellow' },
    { name: 'sunglass', price: 300, brand: 'raybon', color: 'black' },
    { name: 'camera', price: 9000, brand: 'canon', color: 'gray' }

]

const brands=products.map(product=>product.brand);
const prices=products.map(product=>product.price)
// console.log(brands);
// console.log(prices);

// products.forEach(product=>console.log(product.color));
// #.filter...........
const cheap=products.filter(product=>product.price<=5000);
// console.log(cheap);

const specificName=products.filter(p=>p.name.includes('n'));
const special=products.find(p=>p.name.includes('n'));
console.log(specificName);
console.log(special);
