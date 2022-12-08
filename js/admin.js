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

let  fProducts = document.querySelector('tbody');
 function show(){
     products.forEach((item)=>{
        fProducts.innerHTML += 
        `
        <tr>
        <th scope="row">${item.id}</th>
        <td>${item.productName}</td>
        <td class="quantity">#</td>
        <td>${item.price}</td>
        <td></td>
        <td> <button class="rounded-4 bg-danger remove m-2" onclick="del()"><i class="fa-solid fa-trash"></i></button></td>
        <td> <button class="rounded-4 bg-success"><i class="fa-solid fa-pen-to-square"></i></button></td>
      </tr>
    
        `
    })
 }
 show()


let btn = document.querySelector('#save');
// output
let output = document.querySelector('tbody')
// input
let adding = document.querySelector('#adding').value;


function add(){
    adding += output.innerHTML;
}