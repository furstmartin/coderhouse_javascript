
//comprueba que hayas ingresado el nombre y el apellido, obligatorio los dos

/* 
let a = prompt("Ingrese su Nombre: ");
let b = prompt("Ingrese su Apellido: ");

if ((a!="") && (b!="")) {
    alert ("Su nombre es " + a +" y su apellido: " + b);
}
else{
    alert ("Error: debe ingresar su nombre y apellido");
}
 */

/* for (let i=0; i<10; i++){
    alert("El valor de `i` es: " + i);
}  */

let userName = "1"
let password = "2"
let confirmPassword = "3"

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

