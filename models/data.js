const listaProductos = [
    {
        id: 1,
        name: "Macarons",
        description: "Dulce francés de harina de almendras a base de merengue con relleno de ganache de frutos o chocolate",
        image: "macarons.jpg",
        category: "pasteleria",
        precio: "$300",
        entrega: "Es un producto delicado, la entrega únicamente será en auto o para retirar desde el local",
        consejos: "Mantener en la heladera solo por 3 días",
        reclamos: "Ante cualquier reclamo, comuniquese a tphouse@gmail.com",
        information: "se vende por unidad o por cajas de media docena",
    },
    {
        id: 2,
        name: "Muffins",
        information: "Caja de 12 unidades",
        description: " Mini torta de chocolate, vainilla o red velvet con relleno a elección y cobertura de buttercream o ganache de chocolate ",       
        image: "muffins.jpg",
        category: "panaderia",
        precio: "$2000",
        entrega: "Es un producto delicado, la entrega únicamente será en auto o para retirar desde el local",
        consejos: "Los muffins con buttercream deben permanecer dentro de la heladera, así como los que tengan rellenos frutales",
        reclamos: "Ante cualquier reclamo, comuniquese a tphouse@gmail.com",

    },
    {
        id: 3,
        name: "Barra de chocolate",
        description: "Barra de chocolate artesanal, realizado con chocolate cobertura amargo, blanco o semi amargo, con el método de templado por tableado",
        image: "chocolate.jpg",
        category: "chocolatería",
        precio: "$800",
        entrega: "Se puede realizar cualquier método de entrega",
        consejos: "Se mantiene a temperatura ambiente y en días de mucho calor se puede poner en refrigeración a no menos de 20° ",
        reclamos: "Ante cualquier reclamo, comuniquese a tphouse@gmail.com",
        information: "se vende por unidad, puede también realizar cambios a su pedido comunicándose a tphouse@gmail.com",
    }
];

module.exports ={
    listaProductos,
}

