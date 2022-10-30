let IngredientsResult ,IngredientsfinalResult ,nameIngredient ,DescIngredient ,IngredientName  ,textMealIngredient , imgMealIngredient;
let ingredientCartona =''
let IngredientCartona =''


getIngredientsApi();

async function getIngredientsApi() {
    IngredientsResult = await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?i=list`);
  
    IngredientsfinalResult = await IngredientsResult.json();
    console.log(IngredientsfinalResult);
  
    showIngredientsApi() ;
    showCurrentIngredient();
  
  };

  function showIngredientsApi() {
    for (let i = 0; i < 20 ; i++) {
  


        ingredientCartona += ` <div class="col-md-6 col-lg-3 my-3 ">
        <div  class=" rounded">
            <div class="post ">
                <i class="fa-solid fa-bowl-food fa-3x "></i>
                <h2 class="text-white nameIngredient">${IngredientsfinalResult.meals[i].strIngredient}</h2>
                <p class="text-white maxW">${ IngredientsfinalResult.meals[i].strDescription}</p>
            </div>
        </div>
    </div>`
  
    }
    document.getElementById('rowIngredients').innerHTML = ingredientCartona;
  
  };


  function showCurrentIngredient() {

    document.addEventListener("click", function (e) {
      console.log(e.target)
      
      if ((e.target.classList.contains("nameIngredient")) ) {
        IngredientName = e.target.innerText;
        console.log(IngredientName);
        IngredientMealsApi(IngredientName);
      }
    })
   
};

async function IngredientMealsApi(IngredientName){
   
    IngredientMeals = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${IngredientName}`);
    
    IngredientMealsResult = await IngredientMeals.json();
        console.log(IngredientMealsResult);

        for (let i = 0; i < IngredientMealsResult.meals.length ; i++) {
      
                  
            IngredientCartona += ` <div class="col-md-6 gy-4 col-lg-3 my-3" >
            <div class="meals">
                <img src="${IngredientMealsResult.meals[i].strMealThumb}"
                alt="" class="w-100" >
                <div class="position-absolute layer d-flex align-items-center justify-content-center">
                    <p class="p-2">${IngredientMealsResult.meals[i].strMeal}</p>
                    
                </div>
            </div>
            </div>`
      
        }
        document.getElementById('rowIngredients').innerHTML = IngredientCartona;
       
    };




    $(document).ready(function(){
        $('#loading').fadeOut(2000 , function(){
 
         $('body').css('overflow', 'visible')
        });
 
     })