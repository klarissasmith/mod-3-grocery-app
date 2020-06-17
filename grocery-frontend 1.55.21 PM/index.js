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
function fetchProducts() {
    fetch(PRODUCTS_URL).then(response => response.json()).then(json => json.forEach(product => {
        renderProducts(product)
    }))
};
function renderProducts(product) {
    let article = document.createElement("article")
    article.className = "product"
    productsDOM.appendChild(article)
    
    let div = document.createElement("div")
    div.className = "img-container"
    let productBtn = document.createElement("button")
    productBtn.className = "bag-btn"
    productBtn.setAttribute("data-id", "1")
    let i = document.createElement("i")
    i.className = "fas fa-shopping-cart"
    productBtn.appendChild(i)
    i.innerText = " Add to Cart"
    div.appendChild(productBtn)
    let img = document.createElement("img")
    div.appendChild(img)
    // img.src = "./images/apples.jpg"
    img.src = "./images/groceries2.jpg"
    img.class = "product-img"
    img.alt = product.name
    article.appendChild(div)
    
    

    let h3 = document.createElement("h3")
    h3.innerText = product.name
    article.appendChild(h3)

    //article => div(img-container) => img(src pic), button => 
    


    

  
    let h4 = document.createElement("h4")
    h4.innerText = `$${product.price}`
    article.appendChild(h4)
}
document.addEventListener("DOMContentLoaded", () => {
    fetchProducts()
    


})















//---Commented Out Classes ----

// const display = new Display();
    // const products = new Products()


// get all products
// products.getProducts().then(data => console.log(data.forEach(e => console.log(e.name))))
//Just testing to see what it will return

//get products
// class Products{
//     async getProducts(){
//         try{
//             let result = await fetch(PRODUCTS_URL)
//             let data = await result.json();
//             let products = data
//             return data;
//         }catch (error){
//             console.log(error);
//         }
//     }
// }



//storage

// class Storage{

// }
