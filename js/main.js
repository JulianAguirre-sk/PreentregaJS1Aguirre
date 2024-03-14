function promediarAlumno(){
    let nombre = prompt('Ingrese el nombre y apellido o codigo del alumno a promediar');
    let contador = 0;
    let suma = 0;
    let promedio = 0;
    let nota = "";
    
    if (nombre !== null) {
        nota = prompt('Ingrese una nota para el alumno ' + nombre + ' (entre 1 y 10) o presione cancelar para terminar');
    } else {
        nota = prompt('Ingrese una nota para el alumno (entre 1 y 10) o presione cancelar para terminar');
    }
    
    while (nota !== null && !isNaN(nota) && nota >= 1 && nota <= 10){
        suma += parseFloat(nota);
        contador++;
        if (nombre !== null) {
            nota = prompt('Ingrese la siguiente nota para el alumno ' + nombre + ' (entre 1 y 10) o presione cancelar para terminar');
        } else {
            nota = prompt('Ingrese la siguiente nota para el alumno (entre 1 y 10) o presione cancelar para terminar');
        }
        
    }

    if (contador > 1) {
        promedio = suma / contador;
        if (nombre !== null) {
            alert("El promedio de las notas del alumno " + nombre + " es " + promedio.toFixed(2) + " a continuacion se refrescara la pagina");
        } else {
            alert("El promedio de las notas del alumno es " + promedio.toFixed(2) + " a continuacion se refrescara la pagina");
        }
    } else {
        if (nombre !== null) {
            alert("No se ingresaron notas válidas para el alumno " + nombre + " a continuacion se refrescara la pagina");
        } else {
            alert("No se ingresaron notas válidas para el alumno a continuacion se refrescara la pagina");
        }
    }

    location.reload();
}

promediarAlumno()