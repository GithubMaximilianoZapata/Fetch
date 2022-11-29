const productosFetch = async()=>{
    const producto = await fetch(`productos.json`)
    const prodJson = await producto.json();
    console.log(prodJson)
    
}  
console.log(productosFetch())