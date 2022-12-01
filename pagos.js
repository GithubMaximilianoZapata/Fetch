const pagar = document.getElementById("pagar");
pagar.onclick = () => {    
    Swal.fire('Compra finalizada con exito');
    carrito = []; 
    carrito = localStorage.clear();    
    guardaStorage();      
    pintarCarrito();
    actualizarCarrito();        
    contarCarrito();     
};