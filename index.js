const searchInput = document.getElementById('searchInput');
const searchButton = document.getElementById('searchButton');
const mealList = document.getElementById('mealList');
const modalContainer = document.querySelector('.modal-container');
const mealDetailsContent = document.querySelector('.meal-details-content');
const recipeCloseBtn = document.getElementById('recipeCloseBtn');

// 🍓 Custom Healthy Drinks Data
const healthyDrinks = [
    {
        idMeal: "HD001",
        strMeal: "Mixed Berry Smoothie",
        strMealThumb: "https://i.pinimg.com/1200x/1e/23/67/1e2367565df2751b59385c5fc2d9c286.jpg",
        strCategory: "Healthy Drink",
        strInstructions:
            "Blend 1 cup of mixed berries (strawberry, blueberry, raspberry), ½ banana, ½ cup yogurt, and ½ cup milk until smooth. Serve chilled.",
        strYoutube: "https://www.youtube.com/watch?v=KpOtuoHL45Y",
        ingredients: [
            "1 cup mixed berries (strawberry, blueberry, raspberry)",
            "½ banana",
            "½ cup yogurt",
            "½ cup milk"
        ],
        nutrients: {
            Calories: "150 kcal",
            Protein: "5 g",
            Fiber: "4 g",
            Antioxidants: "High"
        }
    },
    //Healthy Drink
     {
        idMeal: "H001",
        strMeal: "Green Smoothie",
        strMealThumb: "https://i.pinimg.com/1200x/0a/18/95/0a1895209dddd1b83019fd0dd6c0a4f6.jpg",
        strCategory: "Healthy Drink",
        strInstructions: "Blend spinach, banana, apple, and almond milk until smooth. Serve chilled.",
        strYoutube: "https://www.youtube.com/watch?v=2Vv-BfVoq4g",
        ingredients: ["Spinach", "Banana", "Apple", "Almond Milk"],
        nutrients: {
            Calories: "150 kcal",
            Protein: "6 g",
            Fiber: "4 g",
            Antioxidants: "High"
        }
    },
    {
        idMeal: "H002",
        strMeal: "Lemon Honey Water",
        strMealThumb: "https://i.pinimg.com/736x/8e/35/c9/8e35c90cb732da79b50345300adf1bef.jpg",
        strCategory: "Healthy Drink",
        strInstructions: "Mix warm water with lemon juice and honey. Stir well and drink on an empty stomach.",
        strYoutube: "https://www.youtube.com/watch?v=gFfd3A0zK_s",
        ingredients: ["Lemon", "Honey", "Warm Water"],
        nutrients: {
            Calories: "140 kcal",
            Protein: "5 g",
            Fiber: "5g",
            Antioxidants: "High"
        }
    },
    {
        idMeal: "H003",
        strMeal: "Cucumber Mint Detox",
        strMealThumb: "https://i.pinimg.com/736x/74/11/53/74115344d213b7823f98732831bff949.jpg",
        strCategory: "Healthy Drink",
        strInstructions: "Add cucumber slices, mint leaves, and lemon slices to a jar of water. Infuse for 2 hours.",
        strYoutube: "https://www.youtube.com/watch?v=4b_Mwz7ePtk",
        ingredients: ["Cucumber", "Mint Leaves", "Lemon", "Water"],
        nutrients: {
            Calories: "150 kcal",
            Protein: "6 g",
            Fiber: "4 g",
            Antioxidants: "High"
        }
    },
    {
    idMeal: "H004",
    strMeal: "Orange Energy Juice",
    strMealThumb: "https://i.pinimg.com/736x/ff/53/4f/ff534fcb255cc19b2388041285e4c332.jpg",  // place image in your /images folder (like images/orange.jpg)
    strCategory: "Healthy Drink",
    strInstructions: "Squeeze fresh oranges, add a few mint leaves, and serve with ice for a refreshing energy boost.",
    strYoutube: "https://www.youtube.com/watch?v=8bJ3AOT6aTo",
    ingredients: ["Oranges", "Mint Leaves", "Ice Cubes"],
    nutrients: {
            Calories: "150 kcal",
            Protein: "5 g",
            Fiber: "4 g",
            Antioxidants: "High"
        }
},
{
    idMeal: "H005",
    strMeal: "Berry Blast Smoothie",
    strMealThumb: "https://i.pinimg.com/736x/76/10/d2/7610d2fdeef56a1470776685873e4296.jpg",  // place image in your /images folder (like images/berry.jpg)
    strCategory: "Healthy Drink",
    strInstructions: "Blend strawberries, blueberries, and yogurt with honey. Serve chilled.",
    strYoutube: "https://www.youtube.com/watch?v=5qap5aO4i9A",
    ingredients: ["Strawberries", "Blueberries", "Yogurt", "Honey"],
    nutrients: {
            Calories: "150 kcal",
            Protein: "5 g",
            Fiber: "4 g",
            Antioxidants: "High"
        }
},
{
  idMeal: "H006",
  strMeal: "Turmeric Milk",
  strMealThumb: "https://i.pinimg.com/1200x/db/ae/5d/dbae5df68abae85437fd6a6019fb52ae.jpg",  // place image in your /images folder (like images/turmeric_milk.jpg)
  strCategory: "Healthy Drink",
  strInstructions: "Boil milk and add turmeric powder. Stir well and add honey or sugar as desired. Serve warm.",
  strYoutube: "https://www.youtube.com/watch?v=d5x5xLknyrY",  // example video link
  ingredients: ["Milk", "Turmeric Powder", "Honey", "Sugar (optional)"],
  nutrients: {
            Calories: "150 kcal",
            Protein: "5 g",
            Fiber: "4 g",
            Antioxidants: "High"
        }
},
{
  idMeal: "H007",
  strMeal: "Blueberry Smoothie",
  strMealThumb: "https://i.pinimg.com/1200x/3b/ed/6f/3bed6fe6b898598e24ad34200fbac12b.jpg",  // place image in your /images folder (like images/turmeric_milk.jpg)
  strCategory: "Healthy Drink",
  strInstructions: "Boil milk and add turmeric powder. Stir well and add honey or sugar as desired. Serve warm.",
  strYoutube: "https://www.youtube.com/watch?v=d5x5xLknyrY",  // example video link
  ingredients: ["Milk", "Blueberry", "Honey", "Sugar (optional)"],
  nutrients: {
            Calories: "150 kcal",
            Protein: "5 g",
            Fiber: "4 g",
            Antioxidants: "High"
        }
},
{
  idMeal: "H008",
  strMeal: "Watermelon cooler",
  strMealThumb: "https://i.pinimg.com/736x/63/a9/d3/63a9d3bb7c4149739f6eb05fa299a55e.jpg",  // place image in your /images folder (like images/turmeric_milk.jpg)
  strCategory: "Healthy Drink",
  strInstructions: "Boil milk and add turmeric powder. Stir well and add honey or sugar as desired. Serve warm.",
  strYoutube: "https://www.youtube.com/watch?v=d5x5xLknyrY",  // example video link
  ingredients: ["Milk", "Watermelon", "Honey", "Sugar (optional)"],
  nutrients: {
            Calories: "150 kcal",
            Protein: "5 g",
            Fiber: "4 g",
            Antioxidants: "High"
        }
}

];


// 🍬 Custom Sweets Data
const sweets = [
    {
        idMeal: "SW001",
        strMeal: "Laddoo",
        strMealThumb: "https://i.pinimg.com/736x/f2/fa/e7/f2fae70e3f2cf1a44d14eb7ac02ce639.jpg",
        strCategory: "Sweet",
        strInstructions: "Mix roasted gram flour, ghee, and sugar. Shape into small balls and serve.",
        strYoutube: "https://www.youtube.com/watch?v=0A4r_tOxOLc",
        ingredients: ["Gram Flour", "Ghee", "Sugar", "Cardamom"],
        nutrients: {
    calories: 330,
    carbs: 45,
    protein: 5,
    fat: 15,
    sugar: 35
  }

    },
    {
        idMeal: "SW002",
        strMeal: "Mango Chia Pudding",
        strMealThumb: "https://i.pinimg.com/736x/35/25/3f/35253f9f2625e460e753ad06dff196bb.jpg",
        strCategory: "Sweet",
        strInstructions: "Soak chia seeds in milk overnight. Blend with mango puree and serve chilled.",
        strYoutube: "https://www.youtube.com/watch?v=HqF0Rg27eJ8",
        ingredients: ["Chia Seeds", "Milk", "Mango Puree", "Honey"],
        nutrients: {
    calories: 340,
    carbs: 45,
    protein: 5,
    fat: 20,
    sugar: 35
  },
    },
    {
        idMeal: "SW003",
        strMeal: "Apple Cinnamon Crumble",
        strMealThumb: "https://i.pinimg.com/736x/a7/d0/03/a7d003cee8624c8c6504e95dd7c8765a.jpg",
        strCategory: "Sweet",
        strInstructions: "Mix sliced apples with cinnamon and sugar. Top with crumble mixture and bake until golden.",
        strYoutube: "https://www.youtube.com/watch?v=GxGkvUQ2m-c",
        ingredients: ["Apples", "Cinnamon", "Oats", "Butter", "Sugar"],
        nutrients: {
    calories: 230,
    carbs: 25,
    protein: 5,
    fat: 15,
    sugar: 35
  },
    },
    {
        idMeal: "SW004",
        strMeal: "Halwa",
        strMealThumb: "https://i.pinimg.com/1200x/7b/5c/a1/7b5ca102f12233f8459e4d1490837b19.jpg",
        strCategory: "Sweet",
        strInstructions: "Roast semolina in ghee, add sugar and water, cook until thick, and serve warm.",
        strYoutube: "https://www.youtube.com/watch?v=F6G5joiC3kU",
        ingredients: ["Semolina (Rava)", "Ghee", "Sugar", "Water", "Cardamom"],
        nutrients: {
    calories: 330,
    carbs: 55,
    protein: 6,
    fat: 15,
    sugar: 50
  },
    },
    {
        idMeal: "SW005",
        strMeal: "Gulab Jamun",
        strMealThumb: "https://i.pinimg.com/736x/0d/b3/08/0db30856b385133c060cec3631b94d02.jpg",
        strCategory: "Sweet",
        strInstructions: "Prepare dough balls from khoya, deep fry until golden, and soak in sugar syrup.",
        strYoutube: "https://www.youtube.com/watch?v=7kL3H0Ck7YQ",
        ingredients: ["Khoya (Mawa)", "All-purpose flour", "Sugar", "Water", "Cardamom", "Ghee"],
        nutrients: {
    calories: 430,
    carbs: 45,
    protein: 6,
    fat: 15,
    sugar: 55
  },
    },
    {
        idMeal: "SW006",
        strMeal: "Brownies",
        strMealThumb: "https://i.pinimg.com/736x/96/50/b3/9650b3a8726cdb25051931feabdd51e0.jpg",
        strCategory: "Sweet",
        strInstructions: "Mix chocolate, butter, sugar, eggs, and flour. Bake until set and serve.",
        strYoutube: "https://www.youtube.com/watch?v=kpD9dVvR7bY",
        ingredients: ["Chocolate", "Butter", "Sugar", "Eggs", "Flour", "Vanilla Extract"],
        nutrients: {
    calories: 500,
    carbs: 45,
    protein: 5,
    fat: 15,
    sugar: 95
  },
    }


];

// 🟠 Event Listeners
searchButton.addEventListener('click', performSearch);
searchInput.addEventListener('keyup', (e) => {
    if (e.key === 'Enter') performSearch();
});
mealList.addEventListener('click', handleMealClick);
recipeCloseBtn.addEventListener('click', closeRecipeModal);

// 🟢 Main Search Function
async function performSearch() {
    const ingredient = searchInput.value.trim().toLowerCase();
    mealList.innerHTML = '';

    if (!ingredient) return;

    if (ingredient === "healthy drinks" || ingredient === "healthy drink") {
        displayMeals(healthyDrinks, true);
    } else if (ingredient === "sweets" || ingredient === "sweet") {
        displayMeals(sweets, true);
    } else {
        const meals = await searchMealsByIngredient(ingredient);
        displayMeals(meals);
    }
}

// 🔵 Fetch meals by ingredient (from API)
async function searchMealsByIngredient(ingredient) {
    try {
        const response = await fetch(
            `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
        );
        const data = await response.json();
        return data.meals;
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

// 🟣 Fetch full meal details
async function getMealDetails(mealId) {
    try {
        const response = await fetch(
            `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`
        );
        const data = await response.json();
        return data.meals[0];
    } catch (error) {
        console.error('Error fetching meal details:', error);
    }
}

// 🟡 Display meals
function displayMeals(meals, isCustom = false) {
    mealList.innerHTML = '';
    if (meals && meals.length) {
        meals.forEach((meal) => {
            const mealItem = document.createElement('div');
            mealItem.classList.add('meal-item');
            mealItem.dataset.id = meal.idMeal;
            mealItem.dataset.custom = isCustom;
            mealItem.dataset.type = meal.strCategory; // Optional: use for filtering
            mealItem.innerHTML = `
                <img src="${meal.strMealThumb}" alt="${meal.strMeal}">
                <h3>${meal.strMeal}</h3>
            `;
            mealList.appendChild(mealItem);
        });
    } else {
        mealList.innerHTML = '<p>No meals found. Try another ingredient.</p>';
    }
}

// 🧃 Handle click on a meal card
async function handleMealClick(e) {
    const card = e.target.closest('.meal-item');
    if (!card) return;

    const mealId = card.dataset.id;
    const isCustom = card.dataset.custom === "true";

    let meal;
    if (isCustom) {
        // Check healthy drinks first
        meal = healthyDrinks.find((m) => m.idMeal === mealId);
        if (!meal) meal = sweets.find((m) => m.idMeal === mealId);
        if (meal) showMealDetailsPopup(meal, true);
    } else {
        meal = await getMealDetails(mealId);
        if (meal) showMealDetailsPopup(meal);
    }
}

// 🍹 Show meal details in popup
function showMealDetailsPopup(meal, isCustom = false) {
    let ingredientsHTML = '';
    let nutrientsHTML = '';

    if (isCustom && meal.ingredients) {
        ingredientsHTML = `
            <h3>Ingredients:</h3>
            <ul>
                ${meal.ingredients.map((i) => `<li>${i}</li>`).join('')}
            </ul>
        `;
    }

    if (isCustom && meal.nutrients) {
        nutrientsHTML = `
            <h3>Nutrient Facts (per serving):</h3>
            <ul>
                ${Object.entries(meal.nutrients)
                    .map(([key, value]) => `<li><b>${key}:</b> ${value}</li>`)
                    .join('')}
            </ul>
        `;
    }

    mealDetailsContent.innerHTML = `
        <h2 class="recipe-title">${meal.strMeal}</h2>
        <p class="recipe-category">${meal.strCategory}</p>
        ${ingredientsHTML}
        ${nutrientsHTML}
        <div class="recipe-instruct">
            <h3>Instructions:</h3>
            <p>${meal.strInstructions}</p>
        </div>
        <div class="recipe-img">
            <img src="${meal.strMealThumb}" alt="${meal.strMeal}">
        </div>
        <div class="recipe-video">
            <a href="${meal.strYoutube}" target="_blank">Video Tutorial</a>
        </div>
    `;
    modalContainer.style.display = 'block';
}

// 🔴 Close Popup
function closeRecipeModal() {
    modalContainer.style.display = 'none';
}
