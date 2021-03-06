const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");

const url="https://kea-alt-del.dk/t7/api/products/" + id;

// fetching the data
fetch(url)
    .then(function(res) {
        return res.json();
    })
    .then(function(data) {
        showProduct(data);
    })

// "populating" the page with the data

function showProduct(product) {
    console.log(product);
    document.querySelector(".purchase-info .brand").textContent="Brand: " + product.brandname;
    document.querySelector(".purchase-info .product-name").textContent=product.productdisplayname;

    // innerHTML to add HTML elements, eg <p> etc.

    document.querySelector(".description p:first-of-type").innerHTML=product.description;
    document.querySelector(".description p:nth-child(2)").innerHTML=product.styledesc;
    document.querySelector(".description div.textile").innerHTML=product.materialcaredesc;
    document.querySelector(".product-style div.color").textContent=product.basecolour;

    // adding the image

    document.querySelector(".product-photo img").src=`https://kea-alt-del.dk/t7/images/webp/1000/${id}.webp`;

    document.querySelector(".product-photo img").alt=product.productdisplayname;
}
