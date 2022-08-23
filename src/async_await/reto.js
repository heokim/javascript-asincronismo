import fetch from "node-fetch";

const API = 'https://api.escuelajs.co/api/v1';

async function fetchData(urlApi) {
  const response = await fetch(urlApi);
  const data = await response.json();
  return data;
}

const otraFn = async (urlApi) => {
  try {
    const products = await fetchData(`${API}/products`);
    const product = await fetchData(`${API}/products/${products[0].id}`);
    const category = await fetchData(`${API}/categories/${product.category.id}`);

    console.log('Lista de Productos:', products);
    console.log('Producto:', product.title);
    console.log('Categoria:', category.name);

  } catch (error) {
    console.error('Error:', error);
  }
}

otraFn(API);