// getting the data

const url="https://kea-alt-del.dk/t7/api/products";

fetch(url)
    .then(function(res) {
        return res.json();
    })
    .then(function(data) {
        displayProductlist(data);
    })

function displayProductlist(data) {
    data.forEach(showProduct);
}

function showProduct(product) {
    
    // product template
    const template = document.querySelector(".product").content;

    const productClone = template.cloneNode(true);


    productClone.querySelector("img").src = `https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp`;

    productClone.querySelector(".productlist-name").textContent = product.brandname;


    // parent

    const parent = document.querySelector("main");
    parent.appendChild(productClone);
}

