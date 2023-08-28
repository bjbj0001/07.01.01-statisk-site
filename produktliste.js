fetch("https://kea-alt-del.dk/t7/api/products");
.then((res) => res.json())
.then (showProducts);

function showProducts(products) {
    //looper og kalder showProduct
    products.forEach(showProduct);
}

function showProduct(product) {
    console.log(product);
    //fang template
    const template = document.querySelector("#ProductTemplate").content;
    //lav en kopi 
    const copy = template.cloneNode(true);
    //ændre indhold
    //appende 
}