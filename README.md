<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="images/logo.png" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center" style="font-family: impact; font-size: 20px">Ferretería "Todo en Uno"</p>

## Descripción

Ferretería "Todo en Uno" fue fundada en 2015, ubicada en la Av. Hernando Siles #818 .Comenzó como una pequeña tienda en el corazón de Ciudad del Este, con una modesta selección de herramientas básicas y suministros para la construcción.

A lo largo de los años, la ferretería ha experimentado un crecimiento constante, expandiendo su inventario y atrayendo a una clientela fiel gracias a su compromiso con la calidad y el servicio al cliente. Hoy en día, es una de las principales tiendas de suministros de construcción en la región, conocida por su amplia selección de productos y su personal experto.

En cuanto al manejo de datos, Ferretería "Todo en Uno" ha optado por un enfoque principalmente manual. A pesar de los avances tecnológicos, mantiene un registro detallado y preciso de todas las transacciones y el inventario.

Cada vez que se realiza una venta, los empleados completan un formulario de papel que incluye detalles como el nombre del cliente, los productos comprados, el precio y la fecha de la transacción. Estos formularios se archivan cuidadosamente en carpetas por fecha y cliente para su fácil acceso en caso de necesidad.

Para el inventario, se lleva un registro manual de los productos entrantes y salientes. Los empleados anotan cada nuevo envío de mercancía y registran las ventas diarias para mantener un control preciso de las existencias. Aunque este enfoque puede ser más laborioso que el uso de sistemas informáticos automatizados.

## Entidades

```bash
Persona(id, nombres, paterno, materno, direccion, telefono)

Empleados(id, ci, fecha_contratacion, id_persona)

Clientes(id, id_persona)

Usuario(id, usuario, clave, email, rol, id_empleado)

Proveedores(id, nombre, direccion, telefono, correo_electronico)

Categoria(id, nombre, descripcion)

Productos (id, nombre, marca, descripcion, tipo_unidad, precio, stock, id_proveedor, id_categoria)

Venta(id, fecha_venta, hora_venta, total_venta, id_usuario, id_cliente, id_detalle_venta)

Detalle_Venta(id, cantidad, precio, subtotal, id_venta, id_producto)
```
