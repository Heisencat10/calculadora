const lstArticulos = document.getElementById('lstArticulos'); 
const txtArticulo = document.getElementById('txtArticulo');
function añadirArticulo() {
    let valorTxtArticulo = txtArticulo.value; txtArticulo.value = '';
    const lstArticuloNuevo = document.createElement('li'); 
    const lstTxtNuevo = document.createElement('span'); 
    const lstBtnNuevo = document.createElement('button');

    lstArticuloNuevo.appendChild(lstTxtNuevo); 
    lstTxtNuevo.textContent = valorTxtArticulo; 
    lstArticuloNuevo.appendChild(lstBtnNuevo); 
    lstBtnNuevo.textContent = 'Borrar'; 
    lstArticulos.appendChild(lstArticuloNuevo);

    lstBtnNuevo.onclick = function(e) { 

        lstArticulos.removeChild(lstArticuloNuevo);
    }
    txtArticulo.focus();
}