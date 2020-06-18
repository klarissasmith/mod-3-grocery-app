let PRODUCTS_URL = "http://localhost:3000/products";
let CARTPRODUCTS_URL = "http://localhost:3000/cart_products";
let CURRENT_CART = 3;
let addProduct = false;
let editProduct = false;

const form = document.querySelector(".add-product-form")
const bagBtn = document.querySelector(".bag-btn");
const cartBtn = document.querySelector(".cart-btn");
const productContainer = document.querySelector(".container")
const closeCartBtn = document.querySelector(".close-cart")
const emptyCartBtn = document.querySelector(".empty-cart")
const cartDOM = document.querySelector(".cart")
const cartOverlay = document.querySelector(".cart-overlay")
const cartList = document.querySelector(".cart-list")
const cartItems = document.querySelector(".cart-item")
const cartTotal = document.querySelector(".cart-total")
const cartContent = document.querySelector(".cart-content")
const productsDOM = document.querySelector(".products-all")
const title = document.querySelector(".section-title")
const divC = document.createElement("div")
divC.className = "section-title"

const buttonC = document.createElement("button")
    buttonC.className = "create-btn"
    buttonC.innerText = "Create Item"
    divC.appendChild(buttonC)
    title.appendChild(divC)




document.addEventListener("DOMContentLoaded", () => {
    // const display = new Display();
    // const products = new Products()
fetchProducts()
createProduct()

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


buttonC.addEventListener("click", () => {
    // hide & seek with the form
    addProduct = !addProduct;
    if (addProduct) {
      productContainer.style.display = "block";
    } else {
      productContainer.style.display = "none";
    }
  });


})



function createProduct () {
    form.addEventListener("submit", function(e){
        e.preventDefault();
        console.dir(e.target.image)
        let name = e.target.name.value
        e.target.name.value = ""

        let price = e.target.price.value
        e.target.price.value = ""

        let image = e.target.image.value
        e.target.image.value = ""

        fetch(PRODUCTS_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: JSON.stringify({"name":name, "price":price, "img_url":image})
        })
        .then(response => response.json())
        .then(json => renderProduct(json))
        
        

    })
}

function deleteProduct(product){
    fetch(PRODUCTS_URL + "/" + `${product.id}`,{
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
        }
    })

}
function renderProduct(product) {
    let article = document.createElement("article")
    article.className = "product"
    productsDOM.appendChild(article)


    let img = document.createElement("img")
    let div = document.createElement("div")
    let button = document.createElement("button")

    let buttonD = document.createElement("button")
    buttonD.addEventListener("click", () => {
        deleteProduct(product)
        article.remove()
    
    
    
    })
    let buttonE = document.createElement("button")
    let eForm = document.createElement("form")
    eForm.className = "edit-product-form"
    // eForm.innerText = "Edit Product"
    buttonE.appendChild(eForm)


    buttonE.addEventListener("click", () => {
        // hide & seek with the form
        editProduct = !editProduct;
        if (editProduct) {
          editContainer.style.display = "block";
        } else {
          editContainer.style.display = "none";
        }
      });
    

{/* <h2>Groceries</h2>
        <div class="container">
            <form class="add-product-form">
              <h3>Add New Product</h3>
      
              <input
                type="text"
                name="name"
                value=""
                placeholder="Enter a product name..."
                class="input-text"
              />
              <br />
              <input
                type="text"
                name="price"
                value=""
                placeholder="Enter a product price..."
                class="input-text"
              />
              <br />
              <input
                type="text"
                name="image"
                value=""
                placeholder="Enter a product image URL..."
                class="input-text"
              />
              <br />
              <input
                type="submit"
                name="submit"
                value="Create New Product"
                class="submit"
              />
            </form> */}

   
   
  
    
    

    
    let i = document.createElement("i")
    let i2 = document.createElement("i")
    let i3 = document.createElement("i")
    i.className = "fas fa-shopping-cart"
    i2.className = "fas fa-trash"
    i3.className = "fas fa-edit"
    i.innerText = "add to cart"
    i2.innerText = "Delete Item"
    i3.innerText = "Edit Item"
    button.className = "bag-btn"
    buttonD.className = "dlt-btn"
    buttonE.className = "edit-btn"
    button.id = product.id
    buttonD.id = product.id
    buttonE.id = product.id
    // "add to cart" button
    button.addEventListener("click", () => {
        console.log(`You added ${product.name} to your cart!`);
        fetch(`http://localhost:3000/cart_products`)
        .then(resp => resp.json())
        .then(json => json.forEach( e => {
            if (e.cart_id === CURRENT_CART && e.product_id === product.id) {
                console.log("This product is already in your cart!");
                return;
            }}))
        fetch(`http://localhost:3000/cart_products`, {
                    method: "POST",
                    headers: {
                        "Content-Type" : "application/json",
                    },
                    body: JSON.stringify({
                        "quantity" : 1,
                        "product_id" : product.id,
                        "cart_id" : CURRENT_CART
                    })
            })
            .then(resp => resp.json())
            .then(json => console.log(json))
        }
    );
   
    div.className = "img-container"
    img.className = "product-img"
    img.alt = "Product Not Available"
    img.src = product.img_url
    div.appendChild(img)
    article.appendChild(div)
        button.appendChild(i)
        buttonD.appendChild(i2)
        buttonE.appendChild(i3)
    div.appendChild(button)
    div.appendChild(buttonD)
    div.appendChild(buttonE)
 

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