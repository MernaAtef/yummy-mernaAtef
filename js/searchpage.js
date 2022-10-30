let searchName=document.getElementById("inputName");
let searchLetter=document.getElementById("inputLetter");
// let resultSearchName;
// let cartonaSearch;
let finalResultSearchName;
let finalResultSearchLetter;
//   let arrDisplay=[]; 
async function searchByName(s){
    s=searchName.value;
   
   let resultSearchName = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${s}`);
  finalResultSearchName = await resultSearchName.json(); 
    //   arrDisplay=finalResultSearchName;
    console.log(finalResultSearchName);
             displayValuesName()
}
   function displayValuesName(){
let cartonaSearch=``;
    for (let i = 0; i < finalResultSearchName.meals.length; i++) {
        cartonaSearch+= ` 

        
        <div class="col-md-6  col-lg-3 " >
        <div class="meals">
            <img src="${finalResultSearchName.meals[i].strMealThumb}" alt="" class="w-100">
            <div class="position-absolute layer d-flex align-items-center">
                <p class="p-2">${finalResultSearchName.meals[i].strMeal}</p>
            </div>
        </div>
     
     </div> 
     `
        
    }
    document.getElementById("rowShow").innerHTML=cartonaSearch;
}
inputName.addEventListener("keyup",searchByName);


async function searchByLetter(f)
{
  f =searchLetter.value;
  
   let resultSearchLetter=await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${f}`);
   finalResultSearchLetter=await resultSearchLetter.json();
   console.log(finalResultSearchLetter);
   displayValuesLetter();
}
function displayValuesLetter(){
    let cartonaSLetter=``;
    for (let i = 0; i < finalResultSearchLetter.meals.length; i++) {
      cartonaSLetter+=` <div class="col-md-6  col-lg-3 " >
      <div class="meals">
          <img src="${finalResultSearchLetter.meals[i].strMealThumb}" alt="" class="w-100">
          <div class="position-absolute layer d-flex align-items-center">
              <p class="p-2">${finalResultSearchLetter.meals[i].strMeal}</p>
          </div>
      </div>
   
   </div> `
        
    }
    document.getElementById("rowShow").innerHTML=cartonaSLetter;
}
inputLetter.addEventListener("keyup",searchByLetter);

$(document).ready(function(){
    $('#loading').fadeOut(2000 , function(){

     $('body').css('overflow', 'visible')
    });

 })