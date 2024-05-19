async function listaProductos(){
    const conexion = await fetch("http://localhost:3000/productos",{
        method:"GET",
        headers:{
        "Content-type":"application/json"
        }
    });
    
    // console.log(conexion.json());

    const conexionConvertida=await conexion.json();
    return conexionConvertida;
}

async function crearProducto(nombre,precio,imagen){
    const conexion= await fetch("http://localhost:3000/productos",{
    method:"POST",
    headers:{
        "Content-type":"application/json"
    },
    body:JSON.stringify({
        nombre:nombre,
        precio:precio,
        imagen:imagen
    })
    });
    if(!conexion.ok){
        throw new Error("No fue posible enviar el producto");
    }
    const conexionConvertida = await conexion.json();

    return conexionConvertida;
}

async function eliminarProducto(id){
    //console.log("estoy en datos, id:"+id);
    const conexion = await fetch(`http://localhost:3000/productos/${id}`, {
        method: "DELETE",
        headers: {
            "Content-type": "application/json"
        }
    });

    if (!conexion.ok) {
        throw new Error("No fue posible eliminar el producto");
    }

    return "Producto eliminado con éxito";

}

async function buscarProducto(palabraClave){
    const conexion = await fetch(`http://localhost:3000/productos?q=${palabraClave}`);
    const conexionConvertida = await conexion.json();
    return conexionConvertida;
}

export const conectaAPI={
    listaProductos,crearProducto,eliminarProducto,buscarProducto
}
