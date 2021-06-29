function operaciones(nombre , edad) {
    let anyo = 2021;
    const anyoNacimiento = anyo - edad;
    const mensaje = "Hola mi nombre es " + nombre + " y nací en el año " + anyoNacimiento;
    return mensaje;
}

let saludo = operaciones ("María" , 32);
console.log(saludo);