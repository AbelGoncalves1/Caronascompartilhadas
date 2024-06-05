mapboxgl.accessToken = 'pk.eyJ1IjoiYWJlbHpvbGFtZW50byIsImEiOiJjbHZmOXltMDAwajNqMkttbzJuaWo3cnBjIn0.RDLi90vCajl18QajXUt_jw'; // Seu token de acesso Mapbox

var map = new mapboxgl.Map({
  container: 'map', // O ID do contêiner HTML onde o mapa deve aparecer
  style: 'mapbox://styles/abelzolamento/clvfiltpx058401nu39obbsew', // A URL do estilo do mapa que você criou no Mapbox Studio
  center: [40.730,-74.000], // Substitua com as coordenadas [longitude, latitude] para o centro do mapa
  zoom: 6, 
});


fetch('URL_DA_API_AQUI', {
  method: 'GET', // ou 'POST', 'PUT', 'DELETE', etc.
  headers: {
    'Content-Type': 'application/json',
    // Inclua outros cabeçalhos necessários pela API
  },
  // body: JSON.stringify(data), // se for um método POST ou PUT, envie os dados aqui
})
.then(response => {
  if (!response.ok) {
    throw new Error('Network response was not ok ' + response.statusText);
  }
  return response.json(); // ou response.text() se a resposta for uma string
})
.then(data => {
  console.log(data); // Aqui você trabalha com os dados
})
.catch(error => {
  console.error('There has been a problem with your fetch operation:', error);
});
