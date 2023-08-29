const menuItemDiv = document.getElementById("menu-items")
const image = document.getElementById("dish-image")
const dishName = document.getElementById("dish-name")
const description = document.getElementById("dish-description")
const price = document.getElementById("dish-price")
const form = document.getElementById("cart-form")
const cartAmount = document.getElementById("cart-amount")
const cartTotal = document.getElementById("number-in-cart")

fetch("http://localhost:4000/menu")
.then(res => res.json())
.then(data => {
    data.forEach(menuItem => {
        const span = document.createElement("span")
        span.textContent = menuItem.name

        menuItemDiv.append(span)

        span.addEventListener("click", e => {
            addMenuItemsToSpan(menuItem)
        })

    })
    addMenuItemsToSpan(data[0])
})

function addMenuItemsToSpan(item){
    dishName.textContent = item.name;
    image.src = item.image;
    description.textContent = item.description;
    price.textContent = item.price;
}

let cartNumber = 0

form.addEventListener('submit', e => {
    e.preventDefault();
    cartTotal.textContent = cartNumber += parseInt(cartAmount.value)
})