///try 3

const menuItemDiv = document.getElementById("menu-items")
const image = document.getElementById("dish-image")
const dishName = document.getElementById("dish-name")
const description = document.getElementById("dish-description")
const price = document.getElementById("dish-price")
const form = document.getElementById("cart-form")
const cartAmountInput = document.getElementById("cart-amount")
const cartTotal = document.getElementById("number-in-cart")

fetch("http://localhost:4000/menu")
.then(res => res.json())
.then(data => {
    data.forEach(menuItem => {
        const span = document.createElement("span")
        span.textContent = menuItem.name
        menuItemDiv.append(span)

        span.addEventListener('click', e => {
            addMenuItems(menuItem)
        })
    })

    addMenuItems(data[0]);
})

function addMenuItems(item){
    dishName.textContent = item.name;
    image.src = item.image;
    description.textContent = item.description;
    price.textContent = item.price
}
let oneValue = 0

form.addEventListener("submit", e => {
    e.preventDefault(),
    cartTotal.textContent = oneValue += parseInt(cartAmountInput.value)
})




///// end of try 3
////try 2

//global
const menuItemsDiv = document.getElementById("menu-items")
const dishName = document.getElementById("dish-name")
const image = document.getElementById("dish-image")
const description = document.getElementById("dish-description")
const price = document.getElementById("dish-price")
const numberCart = document.getElementById("number-in-cart")
const form = document.getElementById("cart-form")
const input = document.getElementById("cart-amount")


fetch("http://localhost:4000/menu")
.then(res => res.json())
.then(data => {
    data.forEach(menuItem => {
        const span = document.createElement("span")
        span.textContent = menuItem.name
        
        menuItemsDiv.append(span) 
    
        span.addEventListener('click', e => {
            addMenuItems(menuItem) 

        })

    })
    addMenuItems(data[0])
})


function addMenuItems(item){
    dishName.textContent = item.name
    image.src = item.image
    description.textContent = item.description
    price.textContent = item.price

}

let cartTotal = 0

form.addEventListener('submit', e => {
    e.preventDefault();
    cartTotal += parseInt(input.value);
    numberCart.textContent = cartTotal 
})



















///end of try 2


//////////////////////try 1
//global consts
const menuItemsDiv = document.querySelector("#menu-items")
const dishImg = document.querySelector('#dish-image')
const dishName = document.querySelector('#dish-name')
const dishDesc = document.querySelector('#dish-description')
const dishPrice = document.querySelector('#dish-price')
const menuForm = document.querySelector("#cart-form")

fetch("http://localhost:4000/menu")
.then(res => res.json())
.then(data => {                         
    //always console.log the data first to make sure you have the correct json data
    //loop through menu items
    data.forEach(menuItem => {  //deliverable 1

        //create span
        const span = document.createElement("span")

        //put name  in span
        span.textContent = menuItem.name

        //attach spans to div
        menuItemsDiv.append(span) //end of deliverable 1

        span.addEventListener('click', (e) => {
            renderMenuItem(menuItem)
        })
        // menuForm.addEventListener("submit", (e) =>{
        //     e.preventDefault();
        //     function menuCounter(){
        //         menuItems.number_in_bag = 
        //     }
    })

    //render first menu item
    renderMenuItem(data[0])

})

//function to get each menu item
function renderMenuItem(menuItem){
    dishImg.src = menuItem.image;
    dishName.textContent = menuItem.name;
    dishDesc.textContent = menuItem.description;
    dishPrice.textContent = menuItem.price;
}

