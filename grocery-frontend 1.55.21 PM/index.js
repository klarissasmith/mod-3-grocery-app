let PRODUCTS_URL = "http://localhost:3000/products"

const bagBtn = document.querySelector(".bag-btn");
const cartBtn = document.querySelector(".cart-btn");
const closeCartBtn = document.querySelector(".close-cart")
const clearCartBtn = document.querySelector(".empty-cart")
const cartDOM = document.querySelector(".cart")
const cartOverlay = document.querySelector(".cart-overlay")
const cartItems = document.querySelector(".cart-items")
const cartTotal = document.querySelector(".cart-total")
const cartContent = document.querySelector(".cart-content")
const productsDOM = document.querySelector(".products-all")

let cart = []

document.addEventListener("DOMContentLoaded", () => {
    const display = new Display();
    const products = new Products()


// get all products
products.getProducts().then(data => console.log(data.forEach(e => console.log(e.name))))
//Just testing to see what it will return



})


//get products
class Products{
    async getProducts(){
        try{
            let result = await fetch(PRODUCTS_URL)
            let data = await result.json();
            let products = data
            return data;
        }catch (error){
            console.log(error);
        }
    }
}
//display products
class Display{

}

//storage

class Storage{

}

// "add to cart" button
bagBtn.addEventListener("click", () => {
    console.log("You clicked the button!");
    fetch("http://localhost:3000/products/4")
    .then(resp => resp.json())
    .then(json => console.log(json))
});

// build a product card for the cartContent
function buildCartCard (obj) {
    let div = document.createElement("div");
    div.className = "cart-item";
    let img = document.createElement("img");
    img.src = "./images/apples.jpg";
    let div1 = document.createElement("div");
    let productName = document.createElement("h4");
    productName.innerText = obj.name;
    let productPrice = document.createElement("h5");
    productPrice.innerText = obj.price;
    let deleteItem = document.createElement("span");
    deleteItem.className = "remove-item";
    div1.appendChild(productName);
    div1.appendChild(productPrice);
    div1.appendChild(deleteItem);
    let div2 = document.createElement("div");
    let amount = document.createElement("p");
    amount.className = "item-amount";
    amount.qty = 1;
    amount.innerText = `${amount.qty}`;
    let chevUp = document.createElement("i");
    chevUp.className = "fas fa-chevron-up";
    chevUp.addEventListener("click", () => {
        amount.qty ++;
    });
    let chevDown = document.createElement("i");
    chevDown.className = "fas fa-chevron-down";
    chevDown.addEventListener("click", () => {
        amount.qty --;
    });
    div2.appendChild(chevUp);
    div2.appendChild(amount);
    div2.appendChild(chevDown);
    div.appendChild(img);
    div.appendChild(div1);
    div.appendChild(div2);
    cartContent.appendChild(div);
};

function cartItemIncrement (obj) {
    obj.addEventListener("click", {
        
    });
};