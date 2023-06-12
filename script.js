const total = 0;
const ticket = 200;

function resumen() {

    event.preventDefault(); // Con esto evito que se refresque la pagina al tocar el botón "Resumen"

    var nombre = document.getElementById('nombre').value;
    var apellido = document.getElementById('apellido').value;
    var correo = document.getElementById('correo').value;
    var cantidad = document.getElementById('cantidad').value;
    var categoria = document.getElementById('categoria').value;
    
    if(nombre == "" || correo == "" || apellido == ""|| cantidad == "" || categoria == "")
    {
        alert("Ingrese correctamente los datos faltantes.");
    }
    else{
        document.getElementById('total').value = (ticket - (ticket*categoria))*cantidad;

    alert("Datos cargados correctamente");
    }
    
}


function borrar() {
    event.preventDefault();
    document.getElementById('nombre').value = "";
    document.getElementById('apellido').value = "";
    document.getElementById('correo').value = "";
    document.getElementById('cantidad').value = "";
    document.getElementById('total').value = "";
}
