
let resultCat;
let finalResultCat;
let catCartona=" "
let catName;
let resultCatList;
let finalResultCatList;
let catCartonaList;
let mealNameList;
let count=-1; 
let resultCatList2;
let arrCatList = []; 
getApiCategories()

async function getApiCategories(){
    resultCat=await fetch (`https://www.themealdb.com/api/json/v1/1/categories.php`)
    finalResultCat=await resultCat.json();
    console.log(finalResultCat);
    showCategories();
    detailsCategories();
    }
    function showCategories() {
        for (let i = 0; i < finalResultCat.categories.length; i++) {
           catCartona += ` <div class="col-md-6 gy-4 col-lg-3 my-3 ">
           <div class=" position-relative overflow-hidden ">
               <div class="Category">
                   <img src="${finalResultCat.categories[i].strCategoryThumb}">
                  
                   <div class="layerCategory d-flex align-items-center justify-content-center">
                       <div class=" p-2 text-center font-text">
                           <h2 class="cat">${finalResultCat.categories[i].strCategory}</h2>
                           <p>${finalResultCat.categories[i].strCategoryDescription}</p>
                       </div>
                   </div>
               </div>
           </div>
       </div>`
    
        }
        document.getElementById("categories").innerHTML = catCartona
    }
    function detailsCategories(){
        document.addEventListener("click", function (e) {
            console.log(e.target)
            if ((e.target.classList.contains("Category")) || (e.target.classList.contains("cat")) || (e.target.classList.contains("col-md-6"))) {
               catName = e.target.innerText
                console.log(finalResultCat);
                console.log(catName);
             getApiCategoriesList(catName)
             } 

    })

}
async function getApiCategoriesList(name){
    resultCatList=await fetch (`https://www.themealdb.com/api/json/v1/1/filter.php?c=${name}`)
    finalResultCatList=await resultCatList.json();
    console.log(finalResultCatList);
    showCategoriesList();
   detailsCatList()
}
function showCategoriesList() {
    for (let i = 0; i < finalResultCatList.meals.length; i++) {
       catCartonaList+= `<div class="col-md-6 gy-4 col-lg-3 my-3" >
       <div class="meals">
           <img src="${finalResultCatList.meals[i].strMealThumb}"
           alt="" class="w-100" >
           <div class="position-absolute layer d-flex align-items-center justify-content-center">
               <p class="p-2">${finalResultCatList.meals[i].strMeal}</p>
               
           </div>
       </div>
       </div>`

    }
    document.getElementById("categories").innerHTML = catCartonaList
}
async function showElementsbyCatName(name){
    resultCatList2=await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`)
    finalResultCatList= await resultCatList2.json();
    console.log(finalResultCatList);
    // detailsCatList()
   
   
}
function detailsCatList() {

    document.addEventListener("click", function (e) {
        console.log(e.target);

        if ((e.target.classList.contains("layer")) || (e.target.classList.contains("p-2")) || (e.target.classList.contains("col-md-6"))) {
            mealNameList = e.target.innerText;
            console.log(mealNameList);
            showElementsbyCatName(mealNameList);


            // for (let i = 0; i < 1; i++) {
            //     if (mealNameList==finalResultCatList.meals[i].strMeal) {
            //         count=i
            //     }
            // }
            //  if(count!=-1)
            // {
            //  arrCatList.push(finalResultCatList.meals[count]);
            //  let btnTag= document.getElementById("tag");
            //                  if(arrCatList[0].strTags!="null"){
            // btnTag.classList.replace("d-none","d-flex")
            //                  }
            //  console.log(arrCatList);
         let mydetailsPage = window.open('detailMealList.html', "_self");
            mydetailsPage.document.write(`<head>
           <link rel="stylesheet" href="css/all.min.css">
          <link rel="stylesheet" href="css/bootstrap.min.css">
          <link rel="stylesheet" href="css/style.css">
          </head>

      <body>

          <section class="bg-black ">
              <div class="options d-flex   top-0 bottom-0 start-0 position-fixed">

                  <div class="nav-menu   pt-4">
                      <div class="collapse navbar-collapse pe-5 ps-3 me-5" id="navbarNav">
                          <ul class="navbar-nav pe-5">
                              <li class="nav-item">
                                  <a class="nav-link active" aria-current="page" href="#">Search</a>
                              </li>
                              <li class="nav-item">
                                  <a class="nav-link" href="#">Categories</a>
                              </li>
                              <li class="nav-item">
                                  <a class="nav-link" href="#">Area</a>
                              </li>
                              <li class="nav-item">
                                  <a class="nav-link" href="#">Ingredients</a>
                              </li>
                              <li class="nav-item">
                                  <a class="nav-link" href="#">Contact Us</a>
                              </li>
                          </ul>
                      </div>
                <div class="icon-side position-absolute p-1 text-muted">
                      <a><i class="fab fa-facebook-f p-1"></i></a>
                      <a><i class="fab fa-twitter p-1"></i></a>
                      <a><i class="fas fa-globe p-1"></i></a>
                      <div class="text-side ">
                          <span>Copyright Â© 2019 All Rights<br> Reserved.</span>
                      </div>
                  </div>  </div>


              <div class="nav-yummy  top-0 bottom-0  ">
                  <nav class="navbar d-block bg-white h-100">
                      <div class="d-inline-block">
                          <div class="container-fluid ">
                              <div class=" w-100 p-yummy">
                                  <img src="images/logo.png" alt="" class="yummy mb-4">
                              </div>
                              <div class="">
                                  <button class="navbar-toggler border-0 " type="button" data-bs-toggle="collapse"
                                      data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
                                      aria-label="Toggle navigation" id="navBtn">
                                      <span class="navbar-toggler-icon"></span>

                                  </button>
                              </div><i class="fa-solid fa-xmark  p-4 fa-2x ico "></i>
                              <div class="iconNav ms-4  bg-warning ">
                                  <div class="position-absolute bottom-0 mb-2">

                                      <div class=" ">
                                          <i class="fas fa-globe mb-2"></i>
                                      </div>

                                      <div class="mb-3 ">
                                          <i class="fas fa-share-alt"></i>
                                      </div>
                                  </div>
                              </div>
                          </div>

                      </div>
                  </nav>
              </div>

          </div>
              <div class="container">
                  <div class="row">
                      <div class="col-md-4 mt-5">
                          <div class="img-goal p-4">
                              <img src="${finalResultCatList.meals[0].strMealThumb}" class="w-100" alt="">
                             
                              <h1 class="text-white fw-light">${finalResultCatList.meals[0].strMeal}</h1>
                          </div>

                      </div>
                      <div class="col-md-8 text-white pt-5 mt-3">
                          <h2>Instructions</h2>
                          <p class="fw-light">${finalResultCatList.meals[0].strInstructions}

                          </p>
                          <p class="fw-bolder">Area :<span class="fw-light"> ${finalResultCatList.meals[0].strArea} </span></p>
                          <p class="fw-bolder">Category :<span class="fw-light"> ${finalResultCatList.meals[0].strCategory} </span></p>

                          <h3 class="fw-light mb-3 ">Recipes:</h3>
                          <ul class="d-flex flex-lg-wrap recipes ps-0">
                              <li class="my-3 mx-3 p-1  rounded">1 cup Lentils</li>
                              <li class="my-3 mx-3 p-1  rounded">1 large Onion</li>
                              <li class="my-3 mx-3 p-1  rounded">1 large Carrots</li>
                              <li class="my-3 mx-3 p-1  rounded">1 tbs Tomato Puree</li>
                              <li class="my-3 mx-3 p-1  rounded">2 tsp Cumin</li>
                              <li class="my-3 mx-3 p-1  rounded">1 tsp Paprika</li>
                              <li class="my-3 mx-3 p-1  rounded">1/2 tsp Mint</li>
                              <li class="my-3 mx-3 p-1  rounded">1/2 tsp Thyme</li>
                              <li class="my-3 mx-2 p-1  rounded">1/4 tsp Black Pepper</li>
                              <li class="my-3 mx-2 p-1  rounded">1/4 tsp Red Pepper Flakes</li>
                              <li class="my-3 mx-2 p-1  rounded">4 cups Vegetable Stock</li>
                              <li class="my-3 mx-2 p-1  rounded">1 cup Water</li>
                              <li class="my-3 mx-2 p-1  rounded">Pinch Sea Salt</li>
                          </ul>
                          <h3 class="fw-light mb-3">Tags:</h3>
                          <ul class="tag d-flex flex-lg-wrap ps-0" id="tag">
                              <li class="my-3 mx-2 p-1  rounded">${finalResultCatList.meals[0].strTags}</li>
                            
                          </ul>
                          <a class="btn btn-success text-white mb-5 mx-2" target="_blank" href="${finalResultCatList.meals[0].strSource}">Source</a>
                        
                          <a class="btn youtube text-white mb-5 mx-2" target="_blank" href="${finalResultCatList.meals[0].strYoutube}">Youtube</a>
                        
                      </div>
                  </div>
              </div>
          </section>
          <script src="js/bootstrap.bundle.min.js"></script>
          <script src="js/jquery-3.6.1.min.js"></script>
          
      </body>`

            );

        }

    });
}

$(document).ready(function(){
    $('#loading').fadeOut(2000 , function(){

     $('body').css('overflow', 'visible')
    });

 })
    //    else {
    //    count = "none";
  
 
// } )
//     // console.log(mealName);
// }