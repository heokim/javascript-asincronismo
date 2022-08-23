import fetch from "node-fetch";

const API = 'https://api.escuelajs.co/api/v1';

function fetchData(urlApi) {
  return fetch(urlApi);
}

// fetch a todos los productos
fetchData(`${API}/product`)
  .then(response => response.json())
  .then(products => {
    console.log(products);
  })
  .then(() => {
    console.log('then anidado extra!');
  })
  .catch((error) => console.log(error));

// fetch a categoria del producto
fetchData(`${API}/products`)
  .then(response => response.json())
  .then(productos => {
    console.log("cantidad de productos encontrados:", productos.length);
    fetchData(`${API}/products/${productos[0].id}`)
      .then(response => response.json())
      .then(producto => {
        console.log("producto:", producto)
        fetchData(`${API}/categories/${producto.category.id}`)
          .then(response => response.json())
          .then(category => {
            console.log("categoria:", category.name);
          })
      })
  })
  .catch(error => console.log(error))
  .finally(() => console.log('Fetch finalizado'));