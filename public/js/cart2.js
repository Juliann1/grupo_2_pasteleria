document.addEventListener("DOMContentLoaded", () =>{
    let botonAgregar = document.getElementById('boton-mas');
    let botonBorrar = document.getElementById('boton-menos');
    let cantidad = document.getElementById('cantidad');
    let eliminar = document.querySelector('.eliminar');

    botonAgregar.addEventListener('click', e =>{
        cantidad.value++;
    });
    
    botonBorrar.addEventListener('click', e =>{
        if(cantidad > 0){
            cantidad.value--;
        }   
    });

    /*agregarCarrito.addEventListener('click', e =>{
        let productId = e.target.dataset.id;

        fetch(`/cart/add`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id: productId,
                count: cantidad.value
            })
        })
        .then(res => res.json())
        .then(data => {
            alert(data.msg);
        }).catch(err => console.log(err));
    });*/
})