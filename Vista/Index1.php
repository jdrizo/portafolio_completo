<hr>
		<h3>Ingresar vehiculos:</h3>
		<form method="POST" action=" ../controlador/insertar.php">
			<table>
				<tr>
					<td>num_matricula: </td>
					<td><input type="text" name="matricula"></td>
				</tr>
				<tr>
					<td>marca: </td>
					<td><input type="text" name="marca"></td>
				</tr>
				<tr>
					<td>color: </td>
					<td><input type="text" name="color"></td>
				</tr>
				<tr>
					<td>tipo: </td>
					<td><input type="text" name="tipo"></td>
				</tr>
				<input type="hidden" name="oculto" value="1">
				<tr>
					<td><input type="reset" name=""></td>
					<td><input type="submit" value="INGRESAR VEHICULO"></td>
				</tr>
			</table>
		</form>