<?php  
	
	if (!isset($_GET['num_matricula'])) {
		header('Location: index.php');
	}

	
		include '../modelo/conexion.php';
		$matricula = $_GET['num_matricula'];

		$sentencia = $bd->prepare("SELECT * FROM vehiculos WHERE num_matricula = ?;");
		$sentencia->execute([$matricula]);
		$vehiculo = $sentencia->fetch(PDO::FETCH_OBJ);
		//print_r($vehiculo);
	

?>

<!DOCTYPE html>
<html>
<head>
	<title>Editar Alumno</title>
	<meta charset="utf-8">
</head>
<body>
	<center>
		<h3>Editar Vehiculo:</h3>
		<form method="POST" action="../editarProceso.php">
			<table>
				<tr>
					<td>num_matricula: </td>
					<td><input type="text" name="matricula" value="<?php echo $vehiculo->num_matricula; ?>"></td>
				</tr>
				<tr>
					<td>marca: </td>
					<td><input type="text" name="marca" value="<?php echo $vehiculo->marca; ?>"></td>
				</tr>
				<tr>
					<td>color: </td>
					<td><input type="text" name="color" value="<?php echo $vehiculo->color; ?>"></td>
				</tr>
				<tr>
					<td>tipo: </td>
					<td><input type="text" name="tipo" value="<?php echo $vehiculo->tipo; ?>"></td>
				</tr>
				
				<tr>
					<input type="hidden" name="oculto">
					<input type="hidden" name="num" value="<?php echo $vehiculo->num_matricula; ?>">
					<td colspan="2"><input type="submit" value="EDITAR VEHICULO"></td>
				</tr>
			</table>
		</form>
	</center>
</body>
</html>