import fetch from "node-fetch";

const API = 'https://api.escuelajs.co/api/v1';

function postData(urlApi, id) {
  const response = fetch(`${urlApi}/${id}`, {
    method: 'DELETE',
    mode: 'cors',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json'
    }
  });
  return response;
}

let id_a_eliminar = 214;

postData(`${API}/products`, id_a_eliminar)
  .then(response => {
    response.json();
    console.log('response: ', response);
  })
  .catch(error => console.log('Error', error))
  .finally(() => console.log('DELETE Finalizado'));
