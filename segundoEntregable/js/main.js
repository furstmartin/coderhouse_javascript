function signUp (password_1, confirmPassword_1){
    let password_1 = prompt("Ingrese su contraseña: ");
    let confirmPassword_1 = prompt ("Ingrese nuevamente su contraseña: ");
}




let user_Name = 0
let password_1 = 0
let confirmPassword_1 = 0

let user_Name = prompt("Ingrese su nombre de usuario: ");

do {
    signUp();
}

while (password_1 != confirmPassword_1){
    alert("Sus contraseñas no conciden, por favor vuelva a ingresarlas");
    if (password_1 == confirmPassword_1){
        console.log("Las contraseñas conciden");
        break;
    }
}

