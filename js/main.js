  var anadirLista = document.getElementById('agregar');

function agregarLista(){
  var form = document.createElement("form");
  var input = document.createElement("input");
  var btn = document.createElement("button");
  btn.setAttribute("type", "submit");
  btn.classList.add("btn", "btn-default");
  var btnTxt = document.createTextNode("Anañdir");
  btn.appendChild(btnTxt);
  form.appendChild(input);
  form.appendChild(btn);


  form.setAttribute("onsubmit","return guardado");

  agregar.appendChild(form);
}
function guardado(){

  var textoLista = document.getElementsByTagName('input')[0].value;
  var nodoTexto = document.createTextNode(textoLista);
  
  var inpuText = document.createElement('span');
  
  inputext.appendChild(nodoTexto);
  
  var tarjetaboton = document.createElement('button');
  var nodotarjeta = document.createTextNode('Agregar Tarjeta');
  tarjetaboton.appendChild(nodotarjeta);
  tarjetaboton.classList.add("btn", "btn-success");
  
  agregar.appendChild(inpuText);
  agregar.appendChild(tarjetaboton);
 
  return false;
}




