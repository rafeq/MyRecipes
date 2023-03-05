
class apiModel {
    constructor() { }
    fetch(search) {
        axios.get(`/get/${search}`).then(function (response) {
            render(response.data)
        }).catch(function (error) {
            console.log(`no such ${search} world`);
          })
    }

    glutenFilter() {
        axios.get('/glutenFilter').then(function (response) {
            render(response.data)
        })
    }

    dairyFilter() {
        axios.get('/dairyFilter').then(function (response) {
            render(response.data)
        })
    }

    alertFirstIngredient(idMeal) {
        axios.get(`/alertFirstIngredient/${idMeal}`).then(function (response) {
            alertRender(response.data)
        })
    }

    addRecipe(recipe) {
        axios.post('/recipe', recipe)
            .then(function (response) {
                render(response.data)
            })
            
    }
}