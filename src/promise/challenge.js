import fetch from "node-fetch";
const API = "https://api.escuelajs.co/api/v1";

const fetchData = (urlAPI) => {
  return fetch(urlAPI);
};
// fetchData(`${API}/products`)
//   .then((response) => response.json())
//   .then((products) => {
//     console.log("====================================");
//     console.log(products[0]);
//     console.log("====================================");
//   })
//   .then(() => {
//     console.log("====================================");
//     console.log("hola");
//     console.log("====================================");
//   })
//   .catch((error) => console.log(error));

fetchData(`${API}/products`)
  .then((res) => res.json())
  .then((products) => {
    console.log(products);
    return fetchData(`${API}/products/${products[0].id}`);
  })
  .then((res) => res.json())
  .then((product) => {
    console.log("====================================");
    console.log(product.title);
    console.log("====================================");
    return fetchData(`${API}/categories/${product.category.id}`);
  })
  .then((response) => response.json())
  .then((category) => {
    console.log("====================================");
    console.log(category.name);
    console.log("====================================");
  })
  .catch((err) => {
    console.log("====================================");
    console.log(err);
    console.log("====================================");
  })
  .finally(() => {
    console.log("====================================");
    console.log("fullfiled");
    console.log("====================================");
  });
