
//Obtiene la informacion ingresada en el formulario de data.json y lo convierte.
const dataString = localStorage.getItem('data');
const data = JSON.parse(dataString);

// Muestra los datos obtenidos de .json y los incorpora en el código de clientes.hml 
const lista = document.querySelector("#listado");
const li = document.createElement("li");
li.innerHTML =  `<h5>Nombre: ${data.nombre}</h5>
                <h5>Domicilio: ${data.domicilio}</h5>
                <h5>Monto Solicitado: $${data.monto}</h5>
                <h5>Cuotas:  ${data.cuotas}</h5>`;
lista.append(li);

