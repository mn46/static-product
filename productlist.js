// fetching the data
const urlParams = new URLSearchParams(window.location.search);
const cat = urlParams.get("category");

const url="https://kea-alt-del.dk/t7/api/products/";

fetch(url)
    .then(function(res) {
        return res.json();
    })
    .then(function(data) {
        displayProductlist(data);
    })

function displayProductlist(data) {
    data.forEach(showProduct);
    if (document.querySelector("#product-template")) {

    }
}

function showProduct(product) {

    if (cat !== null && cat !== product.category) {
        return;
    }
    
    // product template
    const template = document.querySelector("#product-template").content;

    const productClone = template.cloneNode(true);

    // adding data

    productClone.querySelector("img").src = `https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp`;
    productClone.querySelector(".productlist-name").textContent = product.productdisplayname;
    productClone.querySelector(".productlist-brand").textContent = product.brandname + " | " + product.articletype;
    productClone.querySelector(".price-info .price").textContent = product.price + " DKK";
    productClone.querySelector(".button a").href += `?id=${product.id}`

    // code for sold-out product

    if (product.soldout) {
        productClone.querySelector("article").classList.add("sold-out");
    }

    if (product.discount) {
        productClone.querySelector("article").classList.add("discount");
        productClone.querySelector("article .text").textContent = "-" + product.discount + "%";
        productClone.querySelector("article .price-info .new-price").textContent = Math.floor(product.price * ((100 - product.discount) / 100)) + " DKK";
    }


    // parent

    const parent = document.querySelector(".productlist");
    parent.appendChild(productClone);
}

