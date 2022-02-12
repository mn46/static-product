

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

    // I can replace "spaces" with other signs using .replace(" ", "_") in the link

    categoryClone.querySelector("article a").href = `productlist.html?category=${categories.category}`;

    document.querySelector("main").appendChild(categoryClone);
}

