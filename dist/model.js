
class apiModel {
    constructor() {}
    fetch(search) {
        axios.get(`/get/${search}`).then(function (response) {
            render(response.data)
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

}