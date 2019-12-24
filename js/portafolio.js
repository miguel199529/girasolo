const data = new XMLHttpRequest();
const element = document.getElementById('proyecto');
let count = 0;
const elementNombre = document.getElementById('nombre');
let dataJSON = []

data.open('GET', 'proyectos/proyectos.json', true);
data.send();
data.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    const proyectos = JSON.parse(this.responseText);
    dataJSON = proyectos;
    for (let i of proyectos) {
      const div = document.createElement("div");
      count = i.Id;
      if (count % 2 == 0) {
        div.innerHTML = "<div id='proyecto3' class='row col-lg-12'>" +
          "<div class='col-lg-6 text' id='p-3'>" +
          "<h1>" + i.Nombre + "</h1>" +
          "<div class='proyecto'><div class='proyecto-line'></div><small>" + i.Categoria + "</small>" +
          "</div> <div> <button onclick='redireccionar("+ count +")'> <small> Ver Proyecto &nbsp;&nbsp;" +
          "<i class='fa fa-chevron-right'></i> </small> </button>" +
          "</div> </div>  <div class='col-lg-6'> <img src='" + i.Imagen + "' alt=''> </div>";
        element.appendChild(div);
      } else {
        div.innerHTML = "<div id='proyecto2' class='row col-lg-12'>" +
          "<div class='col-lg-6'><img src='" + i.Imagen + "' alt=''></div><div class='col-lg-6 text' id='p-2'>" +
          "<h1>" + i.Nombre + "</h1><div class='proyecto'><div class='proyecto-line'></div><small>" + i.Categoria +
          "</small></div><div><button onclick='redireccionar("+ count +")'><small>Ver Proyecto &nbsp;&nbsp;<i class='fa fa-chevron-right'>" +
          "</i></small></button></div></div></div>";
        element.appendChild(div);
      }
    }
  }
}

function redireccionar(id){
  location.href="proyecto.html?"+id;
}

