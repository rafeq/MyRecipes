const express = require('express')
const router = express.Router()
const axios = require('axios');
const { data } = require('jquery');
_dairyIngredients = ["Cream", "cheese", "Milk", "Butter", "Creme", "Ricotta", "Mozzarella", "Custard", "Cream Cheese"]
_glutenIngredients = ["Flour", "Bread", "Spaghetti", "Biscuits", "Beer", "Butter", "Eggs"]
let _data=[]
router.get('/get/:search', function (req, res) {
    searchData=req.params.search
    if (!searchData.match(/^[a-z]+$/i)) {
        res.status(400).send({ "Error": `${searchData} is not a valid name` })
        return
    }
    axios.get(`https://recipes-goodness-elevation.herokuapp.com/recipes/ingredient/${req.params.search}`).then(resp => {
        _data=resp.data.results.map(key => { return { idMeal: key.idMeal, ingredients: key.ingredients, title: key.title, thumbnail: key.thumbnail, href: key.href } })
        res.send(_data);
    })
})

router.get('/getData',function(req,res){
    res.send(_data);
})

const doesIncludesGluten = function (ingredients) {
    for (let i = 0; i <= _glutenIngredients.length; i++) {
        for (const gluten of ingredients) {
            if (_glutenIngredients[i] == gluten) {
                return false
            }
        }
    }
    return true
}

router.get('/glutenFilter', function (req, res) {
    let tempData = _data.filter((d) => doesIncludesGluten(d.ingredients))
    res.send(tempData)
})

const doesIncludesDairy = function (ingredients) {
    for (let i = 0; i <= _dairyIngredients.length; i++) {
        for (const dairy of ingredients) {
            if (_dairyIngredients[i] == dairy) {
                return false
            }
        }
    }
    return true
}

router.get('/dairyFilter', function (req, res) {
    let tempData = _data.filter((d) => doesIncludesDairy(d.ingredients))
    res.send(tempData)
})

router.get('/alertFirstIngredient/:idMeal', function (req, res) {
    let idMeal = req.params.idMeal
    let tempData = _data.find((recipe) => recipe.idMeal === idMeal)
    res.send(tempData.ingredients[0])
})

router.post('/recipe', function (req, res) {
    //tempIdMeal=parseInt(req.body.idMeal)
    //console.log(typeof(tempIdMeal));
    tempData={
        idMeal:req.body.idMeal,
        ingredients:req.body.ingredients,
        title:req.body.title,
        thumbnail:req.body.thumbnail,
        href:req.body.href
    }
    _data.push(tempData)
     res.send(_data)
})


module.exports = router

//cheese