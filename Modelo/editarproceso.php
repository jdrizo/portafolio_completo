<?php 
	//print_r($_POST);
	if (!isset($_POST['oculto'])) {
		header('Location: index.php');
	}

	include '../modelo/conexion.php';
	$num = $_POST['num'];
	$matricula = $_POST['matricula'];
	$marca = $_POST['marca'];
	$color = $_POST['color'];
	$tipo = $_POST['tipo'];

	$sentencia = $bd->prepare("UPDATE vehiculos SET num_matricula = ?,  marca = ?, 
												color = ?, tipo = ? WHERE num_matricula = ?;");
	$resultado = $sentencia->execute([$matricula,$marca,$color,$tipo, $num]);

	if ($resultado === TRUE) {
		header('Location: index.php');
	}else{
		echo "Error";
	}
?>