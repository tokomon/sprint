+function () {
    // Elementos
    var botonAgregarPaciente = document.getElementById("registrarPaciente");
    var botonAgregarDoctor = document.getElementById("registrarDoctor");

    var botonLogin = document.getElementById("login");
    var resultado = document.getElementById("contenedor");
    var botonHistorial = document.getElementById("mostrarHistorial");
    var botonAgregarConsulta = document.getElementById("agregarConsulta");
    var botonMostrarHistorialPaciente = document.getElementById("mostrarPaciente");
    var botonAtras = document.getElementById("atras");


    // Evento Click - Agregar
    var eventoAgregarPaciente = function (e) {
        e.preventDefault();
        var paciente = agregarPaciente();
        resultado.innerHTML = mostrar(paciente);
    };
    // Evento Click - Agregar
    var eventoAgregarDoctor = function (e) {
        e.preventDefault();
        var doctor = agregarDoctor();
        resultado.innerHTML = mostrar(doctor);
    };


    // Evento Click - Agregar
    var eventoLogin = function (e) {
        e.preventDefault();

        var nom=prompt("Ingrese su Nombre: ");
        var pass=prompt("Ingrese su Password: ");
        var activo = validarUser(nom, pass,pacientes);

        if (activo) {
          alert("Bienvenido "+activo.nivel);
            $("#menuPrincipal").hide();
             $("#menuPaciente").show();
             $("#atras").show();

        }else{

          var activoDoctor = validarUser(nom, pass,doctores);
          if (activoDoctor) {
            alert("Bienvenido "+activoDoctor.nivel);
            $("#menuPrincipal").hide();
            $("#menuDoctor").show();
            $("#atras").show();
         }
         else{
           alert("Usuario o Password no valido");
         }
        }
      //  resultado.innerHTML = mostrar(doctor);
    };
clas
    var eventoMostrar = function (e) {
        e.preventDefault();
        var estudiantes = obtenerListaEstudiantes();
        resultado.innerHTML = mostrarLista(estudiantes);
    };

    var eventoAgregarConsulta = function (e) {
        e.preventDefault();

        var dni=prompt("Ingrese DNI: ");
        var paciente = buscarDNI(dni,pacientes);
        var consulta = agregarConsulta(paciente);
        //el doctor puede ver todos los pacientes
        //y ya  a buscar por dni para ponerle consulta
        resultado.innerHTML = mostrarConsulta(consulta);
    };


    var eventoHistorial = function (e) {
        e.preventDefault();
        console.log(cuentaActiva);
        var paciente = buscarNombre(cuentaActiva,pacientes);
        resultado.innerHTML = mostrarHistorial(paciente);
    };


    var eventoMostrarHistorialPaciente = function (e) {
        e.preventDefault();

        var dni=prompt("Ingrese DNI: ");
        var paciente = buscarDNI(dni,pacientes);
        resultado.innerHTML = mostrarHistorial(paciente);
    };


    var eventoAtras = function (e) {
        e.preventDefault();
         $("#menuPrincipal").show();
         $("#menuPaciente").hide();
         $("#menuDoctor").hide();
         resultado.innerHTML = '';


      };



    // Manejadores de eventos
    botonAgregarPaciente.addEventListener("click", eventoAgregarPaciente);
    botonAgregarDoctor.addEventListener("click", eventoAgregarDoctor);

    botonLogin.addEventListener("click", eventoLogin);
    botonHistorial.addEventListener("click", eventoHistorial);
    botonAgregarConsulta.addEventListener("click", eventoAgregarConsulta);
    botonMostrarHistorialPaciente.addEventListener("click", eventoMostrarHistorialPaciente);
    botonAtras.addEventListener("click", eventoAtras);




}();
