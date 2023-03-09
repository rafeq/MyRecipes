const source = $("#searchtemp-template").html()
const template = Handlebars.compile(source)

const render = function (search) {
    $("#Recipes").empty()
    const list_element = document.getElementById('Recipes');
    const pagination_element = document.getElementById('pagination');

    let current_page = 1;
    let rows = 3;

    function displayList(items, wrapper, rows_per_page, page) {
        wrapper.innerHTML = "";
        page--;

        let start = rows_per_page * page;
        let end = start + rows_per_page;
        let paginatedItems = items.slice(start, end);
        let newHtml = template({ paginatedItems })
        $("#Recipes").append(newHtml)
    }

    function setupPagination(items, wrapper, rows_per_page) {
        wrapper.innerHTML = "";

        let page_count = Math.ceil(items.length / rows_per_page);
        for (let i = 1; i < page_count + 1; i++) {
            let btn = paginationButton(i, items);
            wrapper.appendChild(btn);
        }
    }

    function paginationButton(page, items) {
        let button = document.createElement('button');
        button.innerText = page;

        if (current_page == page) button.classList.add('active');

        button.addEventListener('click', function () {
            current_page = page;
            displayList(items, list_element, rows, current_page);

            let current_btn = document.querySelector('.pagenumbers button.active');
            current_btn.classList.remove('active');

            button.classList.add('active');
        });
        return button;
    }
    displayList(search, list_element, rows, current_page);
    setupPagination(search, pagination_element, rows);
}

const alertRender = function (alrt) {
    alert(alrt)
}