<?php  
	if (!isset($_POST['oculto'])) {
		exit();
	}

	include '../modelo/conexion.php';
	$matricula = $_POST['matricula'];
	$marca = $_POST['marca'];
	$color = $_POST['color'];
	$tipo = $_POST['tipo'];
	

	$sentencia = $bd->prepare("INSERT INTO vehiculos(num_matricula,marca,color,tipo) VALUES (?,?,?,?);");
	$resultado = $sentencia->execute([$matricula,$marca,$color,$tipo]);

	if ($resultado === TRUE) {
		//echo "Insertado correctamente";
		header('Location: ../vista/index1.php');
	}else{
		echo "Error";
	}
?>