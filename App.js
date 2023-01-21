// Crea un objeto mediante un evento y almacena los datos ingresados en el formulario
const form = document.querySelector('#Formulario');
const elementoResultado = document.querySelector('#resultado');

form.addEventListener('submit',  (event) => {
  // Evita recargar la página
  event.preventDefault();

  // Crea un objeto FormData a partir del formulario
  const formData = new FormData(form);

  // Crea  objeto "datos" vacío para almacenar los datos del formulario
  const datos = {};

  // Itera para guardar los datos del formulario en el objeto que esta vacío
  for (const [clave, valor] of formData.entries()) {
    //valida si es el tipo de input es correcto agregando alertas de la libreria Sweet Alerts en caso de error
    if(clave === "nombre" && !isNaN(valor)){
      Swal.fire({
        title: "Error",
        text: "Ingrese un nombre solo con letras",
        icon: "error",
        confirmButtonText: "OK"
      });
      } else if(clave === "edad" && isNaN(valor)){
        Swal.fire({
          title: "Error",
          text: "Ingrese una edad solo con numeros",
          icon: "error",
          confirmButtonText: "OK"
        });
    } else if(clave === "monto" && isNaN(valor)){
      Swal.fire({
        title: "Error",
        text: "Ingrese un monto solo con numeros",
        icon: "error",
        confirmButtonText: "OK"
      });
      
    } 
    //convierte  los datos a Uppercase
    datos[clave] = valor.charAt(0).toUpperCase() + valor.slice(1).toLowerCase();
  }
  
 // Funcion que divide el monto solicitado por la cantidad de cuotas
 function dividir(datos) {
  return datos.monto / datos.cuotas;
}
//Resultado de la division se guarda en la variable resultado.
const resultado = dividir(datos);
datos["Valor cuota"] = resultado;

// Selecciono el elemento de index.html donde quiero mostrar el resultado
const elementoResultado = document.querySelector('#resultado');

// Muestro el resultado de la división modificando el contenido del elemento HTML
elementoResultado.innerHTML = resultado;

// Guardo el objeto 'datos' en localStorage como un string JSON en data.json
 localStorage.setItem('data', JSON.stringify(datos));

  // Crea un array vacio y usa metodo push para añadir clave y valor de "datos" seleccionados al Array. 
  let resumen = [];
  resumen.push(datos.nombre, datos.domicilio, datos.monto, datos.cuotas);
  
  // Muestra los valores del array en el elemento HTML con id #resumen
  document.querySelector("#resumen").innerHTML = `${resumen[0]} domiciliado en ${resumen[1]} solicitó $${resumen[2]} en ${resumen[3]} cuotas.`;
});


