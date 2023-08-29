//Globals
const menuUrl = "http://localhost:4000/menu"

//Dom selectors
const menuDiv = document.querySelector("#menu-items")
const menuDetails = document.getElementById("dish")
const menuImage = document.getElementById("dish-image")
const menuName = document.getElementById("dish-name")
const menuDescription = document.getElementById("dish-description")
const menuPrice = document.getElementById("dish-price")
const menuCart = document.getElementById("number-in-cart")
const menuForm = document.getElementById("cart-form")
const menuCartAmount =  document.getElementById("cart-amount")
const currentCart = {}



//eventListeners
menuForm.addEventListener("submit", (e) =>{
    e.preventDefault();
    menuCounter()
})

//fetches
const fetchAll = () =>{
    fetch(menuUrl)
    .then((response) => response.json())
    .then (menuArr => {
      console.log(menuArr)
      menuArr.forEach(menuObj => {
          renderMenuNames(menuObj)
      });
  renderMenuDetails(menuArr[0])
  });
}

//renders

const menuCounter = () =>{
    const addingCart = parseInt(menuCartAmount.value)
    currentCart.number_in_bag = parseInt(menuCart.textContent)
    currentCart.number_in_bag += addingCart
    menuCart.textContent = currentCart.number_in_bag
}

const renderMenuNames = (menuObj) => {
    const spanTag = document.createElement("span")
    spanTag.textContent = menuObj.name
    spanTag.addEventListener("click", (e) =>{
        renderMenuDetails(menuObj)
    })
    menuDiv.append(spanTag)
}
const renderMenuDetails = (menuObj) => {
    menuImage.src = menuObj.image
    menuName.textContent = menuObj.name
    menuDescription.textContent = menuObj.description
    menuPrice.textContent = '$' + menuObj.price
    menuCart.textContent = menuObj.number_in_bag
  };

//init
const init = () =>{
    fetchAll()
  }
  init()


