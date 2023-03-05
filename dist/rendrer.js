const source = $("#searchtemp-template").html()
const template = Handlebars.compile(source)

const render = function (search) {
    $("#Recipes").empty()
    //let newHtml = template({search})
    // $("#Recipes").append(newHtml)
    const list_element = document.getElementById('Recipes');
    const pagination_element = document.getElementById('pagination');

    let current_page = 1;
    let rows = 3;

    function DisplayList(items, wrapper, rows_per_page, page) {
        wrapper.innerHTML = "";
        page--;

        let start = rows_per_page * page;
        let end = start + rows_per_page;
        let paginatedItems = items.slice(start, end);

        for (let i = 0; i < paginatedItems.length; i++) {
            let item = paginatedItems[i];

            let item_element = document.createElement('div');
            item_element.classList.add('item');
            name =
                `
           <a href="${item.href}">${item.title}</a>
           <br>
           <img src='${item.thumbnail}' width="100" height="100">
           <div><ul><li>${item.ingredients}</ul></li></div>
           `
            item_element.innerText += name;



            wrapper.appendChild(item_element);

        }
    }

    function SetupPagination(items, wrapper, rows_per_page) {
        wrapper.innerHTML = "";

        let page_count = Math.ceil(items.length / rows_per_page);
        for (let i = 1; i < page_count + 1; i++) {
            let btn = PaginationButton(i, items);
            wrapper.appendChild(btn);
        }
    }

    function PaginationButton(page, items) {
        let button = document.createElement('button');
        button.innerText = page;

        if (current_page == page) button.classList.add('active');

        button.addEventListener('click', function () {
            current_page = page;
            DisplayList(items, list_element, rows, current_page);

            let current_btn = document.querySelector('.pagenumbers button.active');
            current_btn.classList.remove('active');

            button.classList.add('active');
        });

        return button;
    }
    console.log(search);
    DisplayList(search, list_element, rows, current_page);
    SetupPagination(search, pagination_element, rows);
}
const alertRender = function (alrt) {
    alert(alrt)
}
