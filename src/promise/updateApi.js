import fetch from "node-fetch";

const API = 'https://api.escuelajs.co/api/v1';

function putData(urlApi, updatedData) {
  const response = fetch(`${urlApi}/${updateData.id}`, {
    method: 'PUT',
    mode: 'cors',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(updatedData)
  });
  return response;
}

let updateData = {
  "id": 214,
  "title": "Nuevo Producto(modificado)",
  "price": 1000
}

putData(`${API}/products`, updateData)
  .then(response => response.json())
  .then(data => console.log('data:', data))
  .catch(error => console.log('Error', error))
  .finally(() => console.log('POST Finalizado'));
