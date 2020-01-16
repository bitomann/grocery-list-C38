console.log("Hola Earth!")

const theVariableFour = 2 + 2;
console.log(theVariableFour)

const groceriesArticle = document.querySelector("#groceries");

groceriesArticle.classList.add("red-text");
console.log(groceriesArticle)

const groceriesHeader = document.querySelector(".grocery_header");
groceriesHeader.classList.remove("grocery_header");
console.log(groceriesHeader)

const groceryList = document.querySelectorAll("#grocery-list li");
for (let i = 0; i < groceryList.length; i++) {
    groceryList[i].classList.add("grocery_header");
}
console.log(groceryList)

for (let i = 0; i < groceryList.length; i++) {
    if (i===1) {
        
    }
    
}

