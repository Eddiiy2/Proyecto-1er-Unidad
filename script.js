const $btnInicio=document.querySelector('.sign-in-btn'),
      $btnReg=document.querySelector('.sign-up-btn'),   
      $inicio=document.querySelector('.sign-in'),
      $reg=document.querySelector('.sign-up');

document.addEventListener('click', e => {
    if(e.target === $btnInicio || e.target === $btnReg){
        $inicio.classList.toggle('active');
        $reg.classList.toggle('active')
    }
})

function obtenerLista() {
    var listaUser = JSON.parse(localStorage.getItem('listaUserLs'));

    if(listaUser == null){
        listaUser = [
            ['administrador','asd'],
            ['cliente','123']
        ]
    }
    return listaUser;
}


function validarCredenciales(usuario, contra) {
    var listaUser=obtenerLista();
    var bAcceso = false;

    for (var i = 0 ; i <listaUser.length; i++){
        if(usuario==listaUser[i][0] && contra==listaUser[i][1]){
            bAcceso = true
            sessionStorage.setItem('usuarioActivo',listaUser[i][0]+''+listaUser[i][1])
            sessionStorage.setItem('rolUsuarioActivo',listaUser[i][0])
        }
    }

    return bAcceso;
}





