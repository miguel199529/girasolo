
var idURL = window.location.search.substring(1);

const data = new XMLHttpRequest();
const elementNombre = document.getElementById('nombre');
const elementFecha = document.getElementById('fecha');
const elementCategoria = document.getElementById('categoria');
const elementDescripcion = document.getElementById('descripcion');
const elementCarousel = document.getElementById('carousel')
const elementNexProyect = document.getElementById('siguiente-proyecto');
const elementNextNombre = document.getElementById('next-nombre');
const elementNextFecha = document.getElementById('next-fecha');
const elementNextCategoria = document.getElementById('next-categoria');
const elementNextButton = document.getElementById('next-button');
const elementLogo = document.getElementById('next-logo');
let nextId = 0;

data.open('GET', 'proyectos/proyectos.json', true);
data.send();
data.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    const proyectos = JSON.parse(this.responseText);
    for (let i of proyectos) {

      if (Number(idURL) === Number(i.Id)) {
        nextId = Number(idURL) + 1;
        elementNombre.innerHTML = "<h1>" + i.Nombre + "</h1>";
        elementFecha.innerHTML = "<small>" + i.Fecha + "</small>";
        elementCategoria.innerHTML = "<small>" + i.Categoria + "</smalll>";
        elementDescripcion.innerHTML = "<p><small>" + i.Descripcion + "</small></p>";
        for (let img of i.Imagenes) {
          elementCarousel.innerHTML =
            "<div class='carousel-inner row w-100 mx-auto' role='listbox'>" +
            "<div class='carousel-item col-md-4 active'>" +
            "<img class='img-fluid mx-auto d-block' src='"+ img.Imagen1 +"' alt='slide 1' align='left'>" +
            "</div>" +
            "<div class='carousel-item col-md-4 '>" +
            "<img class='img-fluid mx-auto d-block' src='"+ img.Imagen2 +"' alt='slide 1' align='left'>" +
            "</div>" +
            "<div class='carousel-item col-md-4 '>" +
            "<img class='img-fluid mx-auto d-block' src='"+ img.Imagen3 +"' alt='slide 1' align='left'>" +
            "</div>" +
            "<div class='carousel-item col-md-4 '>" +
            "<img class='img-fluid mx-auto d-block' src='"+ img.Imagen4 +"' alt='slide 1' align='left'>" +
            "</div>" +
            "</div>";
        }
      }
      if (nextId === Number(i.Id)) {
        elementNexProyect.classList.remove('ocultar');
        elementNextNombre.innerHTML = "<h1>" + i.Nombre + "</h1>";
        elementNextFecha.innerHTML = "<small>" + i.Fecha + "</small>";
        elementNextCategoria.innerHTML = "<small>" + i.Categoria + "</small>";
        elementNextButton.innerHTML = "<button onclick='redireccionar(" + i.Id + ")'>" +
          "<small> Ver Proyecto &nbsp;&nbsp;" +
          "<i class='fa fa-chevron-right'></i></small></button>";
        elementLogo.innerHTML = "<img src='" + i.Logo + "' alt='logo'>"
      } else {
        elementNexProyect.classList.add('ocultar');
      }
    }
  }
}


function redireccionar(id) {
  location.href = "proyecto.html?" + id;
}


function myFunction(x) {
  const element = document.getElementById('next-button');
  if (x.matches && element) { // If media query matches
    element.setAttribute("align", "center");
  } else if (element) {
    element.setAttribute("align", "");
  }
}
var x = window.matchMedia("(max-width: 767px)")
myFunction(x) // Call listener function at run time
x.addListener(myFunction) // Attach listener function on state changes
