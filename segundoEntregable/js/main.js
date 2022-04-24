let userName = 0
let password = 0
let confirmPassword = 0

let userName = prompt("Ingrese su nombre de usuario: ");

do {
    let password = prompt("Ingrese su contraseña: ");
    let confirmPassword = prompt ("Ingrese nuevamente su contraseña: ");
}

while (password != confirmPassword){
    alert("Sus contraseñas no conciden, por favor vuelva a ingresarlas");
    if (password == confirmPassword){
        console.log("Las contraseñas conciden");
        break;
    }
}

