const source = $("#searchtemp-template").html()
const template = Handlebars.compile(source)

const render = function(search){
    $("#Recipes").empty()
    let newHtml = template({search})
    $("#Recipes").append(newHtml)
}
const alertRender = function(alrt){
    alert(alrt)
}
