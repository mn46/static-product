

const url = "https://kea-alt-del.dk/t7/api/categories";

fetch(url)
    .then(function(res) {
        return res.json();
    })
    .then(function(data) {
        displayCategorylist(data);
    })

function displayCategorylist(data) {
    data.forEach(showCategory);
}

function showCategory(categories) {
    const categoryTemplate = document.querySelector("#category-template").content;

    categoryClone = categoryTemplate.cloneNode(true);

    categoryClone.querySelector("article p").textContent = categories.category;

    categoryClone.querySelector("article a").href = `productlist.html?category=${categories.category}`;

    // new URLSearchParams(window.location.search).getAll(`${categories.category}`);

    document.querySelector("main").appendChild(categoryClone);
}

