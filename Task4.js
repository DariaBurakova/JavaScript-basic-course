'use strict'
const products = [
    {
        id: 3,
        price: 127,
        photos: [
            "1.jpg",
            "2.jpg",
        ]
    },
    {
        id: 5,
        price: 499,
        photos: []
    },
    {
        id: 10,
        price: 26,
        photos: [
            "3.jpg"
        ]
    },
    {
        id: 8,
        price: 78,
    },
];
let productPhoto = products.filter(function(photo){
  if('photos' in photo && photo.photos.length > 0){
      return photo.photos;
  }
});
console.log(productPhoto);

products.sort(function(arg1,arg2){
if(arg1.price > arg2.price){
    return 1;
} else if(arg1.price < arg2.price){
    return -1;
}
return 0;
});
console.log(products);