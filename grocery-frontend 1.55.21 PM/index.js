let PRODUCTS_URL = "http://localhost:3000/products";
let CARTPRODUCTS_URL = "http://localhost:3000/cart_products";
let CURRENT_CART = 1;

const bagBtn = document.querySelector(".bag-btn");
const cartBtn = document.querySelector(".cart-btn");
const closeCartBtn = document.querySelector(".close-cart")
const emptyCartBtn = document.querySelector(".empty-cart")
const cartDOM = document.querySelector(".cart")
const cartOverlay = document.querySelector(".cart-overlay")
const cartList = document.querySelector(".cart-list")
const cartItems = document.querySelector(".cart-item")
const cartTotal = document.querySelector(".cart-total")
const cartContent = document.querySelector(".cart-content")
const productsDOM = document.querySelector(".products-all")


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
//delete function is not persisting, don't think I can use a POST b/c it would change the displayed items. Maybe local storage or store the products in cart JSON?



})


function renderProduct(product) {
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
    button.id = product.id
    // "add to cart" button
    button.addEventListener("click", () => {
        fetch(`http://localhost:3000/cart_products`)
        .then(resp => resp.json())
        // .then(json => console.log(json))
        .then(json => cartProductExistCheck(json, product))
        // console.log(`Adding ${product.name} to your cart...`)
        
            // fetch(`http://localhost:3000/cart_products`, {
            //     method: "POST",
            //     headers: {
            //         "Content-Type" : "application/json"
            //     },
            //     body: JSON.stringify({
            //         "quantity" : 1,
            //         "product_id" : product.id,
            //         "cart_id" : CURRENT_CART
            //     })
            // })
            // .then(resp => resp.json())
            // .then(json => console.log(json))
            // console.log(`You added ${product.name} to your cart!`);
            
        }
    );
   
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
    h4.textContent = `$${product.price}`
    article.appendChild(h4)






}
function fetchProducts(){
    fetch(PRODUCTS_URL)
        .then(resp => resp.json())
        .then(json => json.forEach(e => {renderProduct(e)}))
            
}

function fetchCart () {
    fetch(CARTPRODUCTS_URL)
        .then(resp => resp.json())
        .then(json => json.forEach( e => {
            if (e.cart_id === CURRENT_CART) {
                fetch(`http://localhost:3000/products/${e.product_id}`)
                .then(resp => resp.json())
                .then(json => buildCartCard(json))
            }
        }))
};

function cartProductExistCheck (json, product) {
    let exists = false;
    json.forEach( e => {
        if (e.cart_id === CURRENT_CART && e.product_id === product.id) {
            console.log(`${product.name} is already in your cart!`);
            exists = !exists;
            // console.log(exists);
            return;
        }
    })
    console.log(exists);
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



//storage

// class Storage{





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
        amount.innerText = `${amount.qty}`;
        console.log("Clicked increment!");
    });

    let chevDown = document.createElement("i");
    chevDown.className = "fas fa-chevron-down";
    chevDown.addEventListener("click", () => {
        amount.qty --;
        amount.innerText = `${amount.qty}`;
        console.log("Clicked decrement!");
    });

    div2.appendChild(chevUp);
    div2.appendChild(amount);
    div2.appendChild(chevDown);
    div.appendChild(img);
    div.appendChild(div1);
    div.appendChild(div2);
    cartList.appendChild(div);
};

// }