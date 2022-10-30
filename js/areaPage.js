let resultAreas;
let finalResultAreas;
let nameArea;
let CartonaArea;
let nameA;
let resMealofArea;
let finalResMealofArea;
let cartonaMealsOfArea;
getApiArea();
async function getApiArea() {
    resultAreas = await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?a=list`);

    finalResultAreas = await resultAreas.json();
    console.log(finalResultAreas);

    showAreaApi()
    getAreaMeals();
  
};

function showAreaApi() {
    for (let i = 0; i < 20; i++) {

        nameArea = finalResultAreas.meals[i].strArea;

        CartonaArea += `<div class="col-md-6 col-lg-3 my-3 ">
        <div class="rounded position-relative  m-auto w-50">
            <div  class="pb-3 ">
                <i class="fa-solid fa-city fa-3x  ps-4 "></i>
                <h2 class="text-white  text-center w-75">${nameArea}</h2>
            </div>
        </div>
    </div>`

    }
    document.getElementById('AreasRow').innerHTML = CartonaArea;

};
function getAreaMeals() {
    document.addEventListener("click", function (e) {
        console.log(e.target);
        if ((e.target.classList.contains("text-center")) || (e.target.classList.contains("pb-3")) || (e.target.classList.contains("col-md-6"))) {
            nameA = e.target.innerText;
            console.log(nameA);
            getAreaMeal(nameA)
 
        }
    })
}
async function getAreaMeal(name) {
    resMealofArea = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${name}`)
    finalResMealofArea = await resMealofArea.json()
    console.log(finalResMealofArea);
    for (let i = 0; i < finalResMealofArea.meals.length; i++) {
        cartonaMealsOfArea += `<div class="col-md-6 gy-4 col-lg-3 " >
   <div class="meals">
       <img src="${finalResMealofArea.meals[i].strMealThumb}" alt="" class="w-100"id="imgMeals">
       <div class="position-absolute layer d-flex align-items-center">
           <p class="p-2"id="textMeal">${finalResMealofArea.meals[i].strMeal}</p>
       </div>
   </div>

</div> `

    }
    document.getElementById("AreasRow").innerHTML = cartonaMealsOfArea
   
}
$(document).ready(function(){
    $('#loading').fadeOut(2000 , function(){

     $('body').css('overflow', 'visible')
    });

 })
// function getDetailsOfMeal(name) {
//     var myHttp = new XMLHttpRequest();
//     var res = [];
//     var cartona = " ";
//     myHttp.open("GET", `https://themealdb.com/api/json/v1/1/search.php?s=${name}`);
//     myHttp.send();
//     myHttp.addEventListener("readystatechange", function () {
//         if (this.readyState == 4 && this.status == 200) {
//             console.log(myHttp.readyState);
//             res = JSON.parse(myHttp.response);
//            console.log(res);

//         }
//     })
// }

