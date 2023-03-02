api = new apiModel()

const search = function () {
    let searchByName = $("#search-by-name").val()
    api.fetch(searchByName)
}

let glutenCheckbox = document.querySelector("input[name=gluten]");

glutenCheckbox.addEventListener('change', function(event){
    if (this.checked) {
        api.glutenFilter();
    } else {
        console.log("Checkbox is not checked..");
    }
});

let dairyCheckbox = document.querySelector("input[name=dairy]");

dairyCheckbox.addEventListener('change', function(event){
    if (this.checked) {
        api.dairyFilter();
    } else {
        console.log("Checkbox is not checked..");
    }
});

alertFirstIngredient=function(){
    idMeal=$(this).data("idmeal");
    api.alertFirstIngredient(idMeal)
}

$("#Recipes").on("click", "img" ,alertFirstIngredient)
//onclick="alertFirstIngredient()"