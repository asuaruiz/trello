function addLista(){
  var agregar = document.getElementById('remove');
       agregar.parentNode.removeChild(agregar);

  var contInput = document.createElement("div");
      contInput.classList.add("panel","panel-primary");
  var inputLista = document.createElement('input');
      inputLista.setAttribute("placeholder","Añadir una Lista...");
      inputLista.setAttribute("id","guardarLista")
      inputLista.classList.add("form-control","inputShadow");
 // var textoInput = document.createTextNode('Añadir una Lista...');

  var btnLista = document.createElement('button');
      btnLista.classList.add("btn","btn-success");
  var textoBtn = document.createTextNode("Guardar");
      btnLista.appendChild(textoBtn);
  contInput.appendChild(inputLista);
  contInput.appendChild(btnLista);
  añadirLista.appendChild(contInput);
  //añadirLista.appendChild(inputLista);
  //añadirLista.appendChild(btnLista);
  btnLista.addEventListener("click",function(){
    
    var resultLista = document.getElementById("guardarLista").value;
    var nuevoTexto=document.createElement('h3');
    var resultSpan=document.createTextNode(resultLista);
    nuevoTexto.appendChild(nuevoSpan);
    var rowLista = document.getElementById("rowLista");
    var columnaNueva = document.createElement("div");
        columnaNueva.classList.add("col-xs-12","col-sm-12","col-md-3")

    var contTarea = document.createElement("div");
        contTarea.setAttribute("id","contTarea");
        contTarea.classList.add("panel","panel-primary");
        columnaNueva.appendChild(contTarea);
        rowLista.appendChild(columnaNueva);
  })
}
