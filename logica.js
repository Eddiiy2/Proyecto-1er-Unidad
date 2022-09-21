document.querySelector("#btnIniciar").addEventListener('click', iniciarSesion);

function iniciarSesion() {
    var sUsuario = "";
    var sContra = "";
    var bAcceso = false;

    sUsuario = document.querySelector('#user').value;
    sContra = document.querySelector('#pass').value;

    bAcceso = validarCredenciales(sUsuario, sContra);
    console.log(bAcceso);
    if(bAcceso == true){
        // alert("Bienvenido")
        ingresar();
    } else{
        alert("Las credenciales ingresadas son incorrectas")
    }
}

function ingresar() {
    var rol = sessionStorage.getItem('rolUsuarioActivo');
    console.log(rol);

    switch (rol) {
        case "administrador":
            alert("ADMINISTRADOR")
            window.location.href = 'dashboard.html';
            break;
        case "cliente":
            // alert("CLIENTE")
            window.location.href = 'principalCliente.html';
            break;
        default:
            break;
    }
}