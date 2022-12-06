let products = JSON.parse(localStorage.getItem('.featured-products')) ?
JSON.parse(localStorage.getItem('products')) : [
    {
        id: 1,
        productName: "Ramen",
        price: 33
    }
];
