const searchFood = ()=>{
    const searchMeal = document.getElementById('search-field').value;
   
    const url = `https://themealdb.com/api/json/v1/1/search.php?s=${searchMeal}`
            // console.log(url);
        fetch(url)
        .then(res => res.json())
        .then(data => displayFoods(data.meals))
        // .catch (err =>console.log(err))

}

const displayFoods = foods =>{
    const foodContainer = document.getElementById("food-container")
    // console.log(foods);
    foods.forEach(food => {
       const foodDiv = document.createElement('div')
       foodDiv.className = ' food-card-area col-md-3 mt-3 ';
        foodDiv.innerHTML =`
            <div onclick="getDetails('${food.idMeal}')" class = 'card shadow rounded'>
                <img class="card-img-top " src ="${food.strMealThumb}">
                <h4 class="text-center">${food.strMeal}</h4>            
            </div>
        `
         
       foodContainer.appendChild(foodDiv)

    });
 
}
const getDetails  = mealId =>{
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`
    // console.log(url);
    fetch(url)
    .then(res => res.json())
    .then(data =>showFoodDetails(data.meals[0]))
}

const showFoodDetails = item =>{
   const itemDetails = document.getElementById('food-details-area');
   itemDetails.innerHTML = "";
   console.log(item);
const itemDiv = document.createElement('div');
itemDiv.className ="ingredient-div"
//  const itemIngrediant = {}
 itemDiv.innerHTML = `
        <div class="card mt-4 show-detail ">
            <img src="${item.strMealThumb}">
            <h3 class ="text-center">${item.strMeal}</h3>
           
        </div>
        <div id = "ingredients" class ="mt-3">
             <h5>Ingredients<h5>
             <ul>
                <li>${item.strIngredient1}</li>
                <li>${item.strIngredient2}</li>
                <li>${item.strIngredient3}</li>
                <li>${item.strIngredient4}</li>
                <li>${item.strIngredient5}</li>
                <li>${item.strIngredient6}</li>
                <li>${item.strIngredient7}</li>
                <li>${item.strIngredient8}</li>
             </ul>
    </div>
 `;
 
    itemDetails.appendChild(itemDiv);

} 
