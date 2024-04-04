let banco = {
    clientes: [],
    agregarCliente: function(nombre, saldo) {
        this.clientes.push({nombre: nombre, saldo: saldo});
    },
    buscarCliente: function(nombre) {
        let clientesFiltrados = this.clientes.filter(function(cliente) {
            return cliente.nombre === nombre;
        });
        return clientesFiltrados.length > 0 ? clientesFiltrados[0] : null;
    },
    transferir: function(nombreOrigen, nombreDestino, monto) {
        let clienteOrigen = this.buscarCliente(nombreOrigen);
        let clienteDestino = this.buscarCliente(nombreDestino);
        if(clienteOrigen === null || clienteDestino === null) {
            return false;
        }
        if(clienteOrigen.saldo < monto) {
            return false;
        }
        clienteOrigen.saldo -= monto;
        clienteDestino.saldo += monto;
        return true;
    }
};

let opcion;
do {
    opcion = parseInt(prompt('Ingrese el numero de la accion que desea realizar:\n1. Agregar cliente\n2. Ver saldo\n3. Transferir\n4. Salir'));
    switch(opcion) {
        case 1:
            let nombre = prompt("Ingrese el nombre del cliente");
            let saldo = parseFloat(prompt("Ingrese el saldo inicial del cliente"));
            banco.agregarCliente(nombre, saldo);
            alert("Cliente agregado exitosamente");
            break;
        case 2:
            let nombreBusqueda = prompt("Ingrese el nombre del cliente a buscar");
            let cliente = banco.buscarCliente(nombreBusqueda);
            if(cliente === null) {
                alert("Cliente no encontrado");
            } else {
                alert("El saldo del cliente " + cliente.nombre + " es: " + cliente.saldo);
            }
            break;
        case 3:
            let nombreOrigen = prompt("Ingrese el nombre del cliente que transfiere");
            let nombreDestino = prompt("Ingrese el nombre del cliente que recibe la transferencia");
            let monto = parseFloat(prompt("Ingrese el monto a transferir"));
            if(banco.transferir(nombreOrigen, nombreDestino, monto)) {
                alert("Transferencia realizada exitosamente");
            } else {
                alert("No se pudo realizar la transferencia");
            }
            break;
        case 4:
            alert("Gracias por usar nuestro servicio");
            break;
        default:
            alert("Opción no válida");
            break;
    }
} while(opcion !== 4);