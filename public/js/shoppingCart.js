//const { header } = require("express-validator");

document.addEventListener("DOMContentLoaded", () => {
    let botonAgregar = document.getElementById("boton-mas");
    let botonBorrar = document.getElementById("boton-menos");
    let cantidad = document.getElementById("cantidad");
    let eliminar = document.querySelector(".eliminar");

    //Probando
    let productInCart = document.querySelector('.product-in-cart')

    botonAgregar.addEventListener("click", (e) => {
        e.traget
        // console.log(productInCart);
    });


    function countProductsInCart() {

    }

    //Probando




    if (eliminar) {
        eliminar.addEventListener("click", (e) => {
            let productID = e.target.dataset.id;
            fetch(`/cart/remove`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    id: productID,
                }),
            })
                .then((res) => res.json())
                .then((data) => {
                    alert("se borró artículo del carrito");
                    window.location.reload();
                })
                .catch((err) => console.log(err));
        });
    }

    botonBorrar.addEventListener("click", (e) => {
        if (cantidad > 0) {
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
});
