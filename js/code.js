let products = JSON.parse(localStorage.getItem('products')) ?
JSON.parse(localStorage.getItem('products')) : [
    {
        id: 1,
        productName: "Ramen",
        price: 33,
        img: "./assets/images/ramen1.jpg",
        description: "A delicious Japanese noodle dish consisting of Chinese-style wheat noodles. It is first recorded to have appeared in Yokohama Chinatown in the early 20th century",
        alt: "ramen"
    },
    {
        id: 2,
        productName: "Chow mein",
        price: 69,
        img: "./assets/images/chow-mein1.jpg",
        description: "A dish popular throughout the Chinese diaspora. Chow mein are noodles that have been stir-fried to mouthwatering tastiness",
        alt: "chow mein"
    },
    {
        id: 3,
        productName: "Pho",
        price: 42,
        img: "./assets/images/pho1.jpg",
        description: "A Vietnamese soup dish that consists of a nice broth , rice noodles and more. Also considered Vietnam's national dish.",
        alt: "pho"
    },
    {
        id: 4,
        productName: "Cincinnati Chile",
        price: 52,
        img: "./assets/images/cincinnati-chili1.jpg",
        description: "Big and tasty. Invented by Macedonian immigrants with Italian noodles and Mediterranean spices.",
        alt: "Cincinnati Chile"
    },
    {
        id: 5,
        productName: "Japchae",
        price: 74,
        img: "./assets/images/japchae1.webp",
        description: "A bit sweet and also savory, Japchae are often referred to as glass noodles do the transparency of the noodles.",
        alt: "japchae"
    }
    
];

let fProducts = document.querySelector('.featured-products');

 function show(){
    products.forEach((item)=>{
        fProducts.innerHTML += 
        `<div class="row row-cols-2 row-cols-md-2 g-4 my-2 justify-content-center d-flex ">
          <div class="col">
            <div class="card bg-danger bg-opacity-25">
              <img src="${item.img}" class="card-img-top img-fluid" alt="${item.alt}">
              <div class="card-body">
                <h5 class="card-title">${item.productName}</h5>
                <p class="card-text">${item.description}</p>
                <h5>${"$"}${item.price}</h5>                 
                <button id="order" class="rounded-2 bg-danger")">Order</button>
              </div>
            </div>
          </div>
        `
    })
 }
 show()







