var cuentaActiva;


var pacientes = [];

function paciente(name,dni,pass){
  this.nombre=name;
  this.dni=dni;
  this.password=pass;
  this.nivel = "paciente";
  this.consulta = [];


}

var doctores = [];

function doctor(name,dni,pass){
  this.nombre=name;
  this.dni=dni;
  this.password=pass;
  this.nivel = "doctor";

}


function consulta(paciente,doctor,dia,sintomas,receta){
  this.paciente=paciente;
  this.doctor=doctor;
  this.dia=dia;
  this.sintomas = sintomas;
  this.receta = receta;
}


function obtenerListaEstudiantes() {
    // TO DO: Retornar la lista de estudiantes
    return (estudiantes);


}

function agregarPaciente() {
    // TO DO: Preguntar al usuario por el nombre, puntos técnicos y puntos de HSE de un estudiante
    // Hint: El estudiante debe ser agregado a la lista de estudiantes
    // TO DO: Retornar el estudiante recientemente creado



    var nom=prompt("Ingrese su Nombre: ");
    var ptec=prompt("Ingrese su DNI: ");
    var phse=prompt("Ingrese su Password: ");
    var e=  new  paciente(nom,ptec,phse);

    pacientes.push(e);

    return e;
}


function agregarDoctor() {
    // TO DO: Preguntar al usuario por el nombre, puntos técnicos y puntos de HSE de un estudiante
    // Hint: El estudiante debe ser agregado a la lista de estudiantes
    // TO DO: Retornar el estudiante recientemente creado
    var nom=prompt("Ingrese su Nombre: ");
    var ptec=prompt("Ingrese su DNI: ");
    var phse=prompt("Ingrese su Password: ");
    var e=  new  doctor(nom,ptec,phse);
    doctores.push(e);
    return e;
}

function agregarConsulta(paciente) {
    // TO DO: Preguntar al usuario por el nombre, puntos técnicos y puntos de HSE de un estudiante
    // Hint: El estudiante debe ser agregado a la lista de estudiantes
    // TO DO: Retornar el estudiante recientemente creado

    var doctor=prompt("Ingrese su doctor: ");
    var dia=prompt("Ingrese su dia: ");
    var sintomas=prompt("Ingrese su sintomas: ");
    var receta=prompt("Ingrese su receta: ");

    var consulta_ = new consulta(paciente.nombre,doctor,dia,sintomas,receta);
    paciente.consulta.push(consulta_);
    console.log(paciente);
    return consulta_;
}



function mostrar(paciente) {
    // TO DO: Completar el template para que muestre las propiedades correctas del estudiante
    var resultado = "";
    resultado += "<div class='row'>";
    resultado += "<div class='col m12'>";
    resultado += "<div class='card blue-grey darken-1'>";
    resultado += "<div class='card-content white-text'>";
    resultado += "<p><strong>Nombre:</strong> " + paciente.nombre + "</p>";
    resultado += "<p><strong>DNI:</strong> " + paciente.dni + "</p>";
    resultado += "<p><strong>Nivel:</strong> " + paciente.nivel + "</p>";
    resultado += "</div>";
    resultado += "</div>";
    resultado += "</div>";
    resultado += "</div>";
    return resultado;
}



function mostrarConsulta(consulta) {
  console.log(consulta);

    // TO DO: Completar el template para que muestre las propiedades correctas del estudiante
    var resultado = "";
    resultado += "<div class='row'>";
    resultado += "<div class='col m12'>";
    resultado += "<div class='card blue-grey darken-1'>";
    resultado += "<div class='card-content white-text'>";

    resultado += "<p><strong>Paciente:</strong> " + consulta.paciente + "</p>";
    resultado += "<p><strong>Doctor:</strong> " + consulta.doctor + "</p>";
    resultado += "<p><strong>Dia:</strong> " + consulta.dia + "</p>";
    resultado += "<p><strong>Sintomas:</strong> " + consulta.sintomas + "</p>";
    resultado += "<p><strong>Receta:</strong> " + consulta.receta + "</p>";
    resultado += "</div>";
    resultado += "</div>";
    resultado += "</div>";
    resultado += "</div>";
    return resultado;

}

function mostrarHistorial(paciente) {
  console.log(paciente);
  for (var i = 0; i < paciente.consulta.length; i++) {
     return mostrarConsulta( paciente.consulta[i]);
   }
 }


function mostrarLista(estudiantes) {
    // TO DO: Iterar la lista del estudiantes para devolverlos en el formato que usa la función mostrar(estudiante)
    // Retornar el template de todos los estudiantes
    return estudiantes.map(function(x) {
   return mostrar(x);
});
}

function buscarDNI(dni, pacientes) {
    // TO DO: Buscar el nombre en la lista de estudiantes que se recibe por parámetros
    // Retornar el objeto del estudiante buscado
    // Nota: NO IMPORTA SI EL USUARIO ESCRIBE EL NOMBRE EN MAYÚSCULAS O MINÚSCULAS

    for (m in pacientes) {
      if (pacientes[m].dni.toLowerCase()==dni.toLowerCase()) {
        return pacientes[m];

      }
    }

}


function buscarNombre(nombre, pacientes) {
    // TO DO: Buscar el nombre en la lista de estudiantes que se recibe por parámetros
    // Retornar el objeto del estudiante buscado
    // Nota: NO IMPORTA SI EL USUARIO ESCRIBE EL NOMBRE EN MAYÚSCULAS O MINÚSCULAS

    for (m in pacientes) {
      if (pacientes[m].nombre.toLowerCase()==nombre.toLowerCase()) {
        return pacientes[m];

      }
    }

}


function validarUser(nombre,password, lista) {
    // TO DO: Buscar el nombre en la lista de estudiantes que se recibe por parámetros
    // Retornar el objeto del estudiante buscado
    // Nota: NO IMPORTA SI EL USUARIO ESCRIBE EL NOMBRE EN MAYÚSCULAS O MINÚSCULAS

    for (m in lista) {
      if (lista[m].nombre.toLowerCase()==nombre.toLowerCase()) {
          if (lista[m].password.toLowerCase()==password.toLowerCase()) {
            cuentaActiva = lista[m].nombre;
            return lista[m];
          }
      }
    }

}


function topTecnico(estudiantes) {
    // TO DO: Retornar el arreglo de estudiantes ordenado por puntaje técnico de mayor a menor
  return  estudiantes.sort(function(a, b){
    return b.puntosTecnicos - a.puntosTecnicos
  });

}

function topHSE(estudiantes) {
    // TO DO: Retornar el arreglo de estudiantes ordenado por puntaje de HSE de mayor a menor
    return  estudiantes.sort(function(a, b){
      return b.puntosHSE - a.puntosHSE
    });
}
