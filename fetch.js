
//crea variable ejecutivo para mostrar datos de uso interno del simulador
const ejecutivo = document.querySelector("#ejecutivo");

//Usa fetch para obtener los datos de data.json y los muestra al final del index.html en una lista.
fetch("./data.json")
  .then((res) => res.json())
  .then((data) => {
    
    //itera sobre el archivo data.json
    data.forEach((info) => { 
    
      //modifica index.html mediante Dom para mostrar los datos capturados.
      const li = document.createElement("li");
        li.innerHTML =  ` <h5>Ejecutivo: ${info.ejecutivo}</h5>
                          <h5>Sucursal: ${info.sucursal}</h5>
                          <h5>Departamento: ${info.departamento}</h5>
                          `;
        ejecutivo.append(li);
      });     
      });

