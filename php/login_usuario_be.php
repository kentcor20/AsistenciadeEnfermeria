<?php
    
    include 'conexion_be.php'


    $correo = $_POST['correo'];
    $contraseña = $_POST['contraseña']

    $validar_login = mysqli_query($conexion, "SELECT * FROM usuarios WHERE correo='$correo' and contrasena='$contrasena'");

    if(mysqli_num_rows($validar_login) > 0)^{
        header("location: ../pag.html");
        exit;
    }else{
        echo'
           <script>
               alert("usuario no existe, por favor verifique los datos introducidos");
               window.location = "../login.php";
            </script>
  
        ';
        exit;
    }
?>