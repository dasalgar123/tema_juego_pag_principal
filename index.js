<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Piedra, Papel, Tijeras - Inicio</title>
    <link rel="stylesheet" href="index.css">
</head>
<body>
    <header>
        <div id="app">
            <div class="frame"><h1 id="titulo_principal">Juegos Sanos</h1></div>
        </div>
    </header>    
    <section class="contenido_formulario">
        <form action="">
            <button id="btnIniciarSesion" type="button" >Iniciar Sesión</button>
            <button id="btnCrearUsuario" type="button">Crear Usuario</button>
            <button id="btnOlvidoContrasena" type="button">juegos</button>
        </form>
    </section>
    
    </div>
            <div><img id="fondo_principal" src="fondo_2.jpg" alt=""></div>
    </div>


// Crear una instancia de la clase ButtonHandler cuando el DOM esté cargado
document.addEventListener("DOMContentLoaded", () => {
    new ButtonHandler();
});

