let PRODUCTS_URL = "http://localhost:3000/products"

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
