<?php  
	if (!isset($_GET['num_matricula'])) {
		exit();
	}

	$codigo = $_GET['num_matricula'];
	include '../modelo/conexion.php';
	$sentencia = $bd->prepare("DELETE FROM vehiculos WHERE num_matricula = ?;");
	$resultado = $sentencia->execute([$codigo]);

	if ($resultado === TRUE) {
		header('Location: ../index.php');
	}else{
		echo "Error";
	}

?>