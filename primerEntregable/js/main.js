let nombre = prompt("Cual es tu nombre?").toUpperCase();

while (nombre != "si") {
    switch(nombre) {
        case "PEDRO":
            alert("Hola Pedro!");
            break;
        case "JUAN":
            alert("Hola Juan!");
            break;
        default:
            alert("No te conozco.");
            break;
    }

    let llueve = prompt("Está lloviendo " + nombre + "?").toUpperCase();

    if (llueve = "SI") {
        alert("Entonces, fijate de llevar paraguas.");
    } else { 
        alert("Sali sin cuidado entonces. ")
    }
    nombre = prompt("desea salir? ingrese si");
}
