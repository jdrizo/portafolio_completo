<?php
include '../modelo/conexion.php';
$sentencia = $bd->query("SELECT * FROM vehiculos;");
$vehiculos = $sentencia->fetchAll(PDO::FETCH_OBJ);
//print_r($vehiculos);
?>

<!DOCTYPE html>
<html lang="es">
<head>
	<title>Listado de vehiculos</title>
	<meta charset="utf-8">
</head>
<body>
	<center>
		
		<h3>Lista de vehiculos registrados en el parqueaero</h3>
		<table>
			<tr>
				<td>num_matricula</td>
				<td>marca</td>
				<td>color</td>
				<td>tipo</td>
				<td>Editar</td>
				<td>Eliminar</td>
			</tr>

			<?php 
				foreach ($vehiculos as $dato) {
					?>
					<tr>
						<td><?php echo $dato->num_matricula; ?></td>
						<td><?php echo $dato->marca; ?></td>
						<td><?php echo $dato->color; ?></td>
						<td><?php echo $dato->tipo; ?></td>	
						<td><a href="editar.php?num_matricula=<?php echo $dato->num_matricula; ?>">Editar</a></td>
						<td><a href="eliminar.php?num_matricula=<?php echo $dato->num_matricula; ?>">Eliminar</a></td>
					</tr>
					<?php
				}
			?>
			
		</table>
		
	</center>
</body>
</html>