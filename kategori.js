fetch("https://kea-alt-del.dk/t7/api/categories")
  .then((res) => res.json())
  .then(showCategories);

function showCategories(categories) {
  const categoryList = document.querySelector(".categorylist");

  categories.forEach((oneCategory) => {
    const template = document.querySelector("template").content;
    const copy = template.cloneNode(true);

    const categoryLink = copy.querySelector(".category");
    categoryLink.textContent = oneCategory.category;
    categoryLink.href = `produktliste.html?category=${oneCategory.category}`;

    categoryList.appendChild(copy);
  });
}
