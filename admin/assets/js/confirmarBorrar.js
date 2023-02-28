function confirmacion() {
            var respuesta = confirm("¿Está seguro que quiere eliminar este registro?");
            if (respuesta == true) {
                return true;
            } else {
                return false;
            }
        }