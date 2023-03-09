apiRecipes = new recipesModel()//apiRecipes=>recepesModel

const search = function () {
    let searchByName = $("#search-by-name").val()
    apiRecipes.fetch(searchByName)
}

let glutenCheckbox = document.querySelector("input[name=gluten]");

glutenCheckbox.addEventListener('change', function (event) {
    if (this.checked) {
        apiRecipes.glutenFilter();
    } else {
        console.log("Checkbox is not checked..");
    }
});

let dairyCheckbox = document.querySelector("input[name=dairy]");

dairyCheckbox.addEventListener('change', function (event) {
    if (this.checked) {
        apiRecipes.dairyFilter();//
    } else {
        console.log("Checkbox is not checked..");
    }
});

alertFirstIngredient = function () {
    idMeal = $(this).data("idmeal");
    apiRecipes.alertFirstIngredient(idMeal)
}



addRecipes = function () {
    let idMeal = $("#idMeal").val()
    let title = $("#title").val()
    let thumbnail = $("#thumbnail").val()
    let href = $("#href").val()
    let ingredients = $("#ingredients").val()
    let arryOfIngredients = ingredients.split(',')
    //console.log(idMeal,title,thumbnail,href,ingredients);
    recipe = {
        idMeal: idMeal,
        title: title,
        thumbnail: thumbnail,
        href: href,
        ingredients: arryOfIngredients
    }
    //console.log(recipe);
    apiRecipes.addRecipe(recipe)

}

$("#Recipes").on("click", "img", alertFirstIngredient)
//onclick="alertFirstIngredient()"