function addLista(){
  var agregar = document.getElementById('remove');
       agregar.parentNode.removeChild(agregar);

  var contInput = document.createElement("div");
      contInput.classList.add("panel","panel-primary");
  var inputLista = document.createElement('input');
      inputLista.setAttribute("placeholder","Añadir una Lista...");
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
  

}
