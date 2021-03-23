'use strict'
const products = [
    {
        id: 3,
        price: 200,
    },
    {
        id: 4,
        price: 900,
    },
    {
        id: 1,
        price: 1000,
    },
];
products.forEach(function(sale){
    return sale.price = sale.price * 0.85;
});
console.log(products);