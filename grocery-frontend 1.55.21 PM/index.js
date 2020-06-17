let PRODUCTS_URL = "http://localhost:3000/products"

const cartBtn = document.querySelector(".cart-btn");
const closeCartBtn = document.querySelector(".close-cart")
const emptyCartBtn = document.querySelector(".empty-cart")
const cartDOM = document.querySelector(".cart")
const cartOverlay = document.querySelector(".cart-overlay")
const cartItems = document.querySelector(".cart-item")
const cartTotal = document.querySelector(".cart-total")
const cartContent = document.querySelector(".cart-content")
const productsDOM = document.querySelector(".products-all")

let cart = []

document.addEventListener("DOMContentLoaded", () => {
    // const display = new Display();
    // const products = new Products()
fetchProducts()

// get all products
// products.getProducts().then(data => console.log(data.name))
//Just testing to see what it will return
cartBtn.addEventListener("click", () => {
    cartOverlay.classList.add("transparentBcg")
    cartDOM.classList.add("showCart")
})
closeCartBtn.addEventListener("click", () => {
    cartOverlay.classList.remove("transparentBcg")
    cartDOM.classList.remove("showCart")
})

emptyCartBtn.addEventListener("click", () => {
    cartItems.remove("cart-content")
})




})


function renderProduct(product){
   let article = document.createElement("article")
   article.className = "product"
   productsDOM.appendChild(article)


   let img = document.createElement("img")
   let div = document.createElement("div")
   let button = document.createElement("button")
   let i = document.createElement("i")
   i.className = "fas fa-shopping-cart"
   i.innerText = "add to cart"
   button.className = "bag-btn"
   div.className = "img-container"
   img.className = "product-img"
   img.alt = "Product Not Available"
   img.src = product.img_url
   div.appendChild(img)
   article.appendChild(div)
    button.appendChild(i)
   div.appendChild(button)

   let h3 = document.createElement("h3")
   h3.innerText = product.name
   article.appendChild(h3)

   let h4 = document.createElement("h4")
   h4.textContent = `$ ${product.price}`
   article.appendChild(h4)






}
function fetchProducts(){
    fetch(PRODUCTS_URL)
        .then(resp => resp.json())
        .then(json => json.forEach(e => {renderProduct(e)}))
            
}
//get products
// class Products{
//     async getProducts(){
//         try{
//             let result = await fetch(PRODUCTS_URL)
//             let data = await result.json();
//             let products = data;

//             return data;
//         }catch (error){
//             console.log(error);
//         }
//     }
// }
//display products
class Display{

}

//storage

class Storage{

}
