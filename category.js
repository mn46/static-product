const url="https://kea-alt-del.dk/t7/api/categories";

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

    categoryClone.querySelector("article.category p").textContent = categories.category;

    document.querySelector("main").appendChild(categoryClone);
}