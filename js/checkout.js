let checkout = document.querySelectorAll('#checkout');
let array = [];

function append(item){
    checkout.innerHTML += item;
    array.push(item);
    console.log(array);
    while(array.includes(item)){
        // array = [];
        break;

    }
}

let checkoutItems = document.querySelector('#checkout');

(function show(){
    checkoutItems.innerHTML += `
    <img src="../assets/images/southkorea1.jpg" class="w-100">
    
    `
}())
