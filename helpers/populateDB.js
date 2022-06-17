const db = require('../database/models')
const path = require('path')
const fs = require('fs')

function populateDB() {
    const products = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../data/products.json'), 'utf8'))
    
    let categories = {
        'pasteleria': 1,
        'panaderia': 2,
        'chocolateria': 3
    }
    
    let shippings = {
        "Es un producto delicado, la entrega únicamente será en auto o para retirar desde el local": 1,
        "Se puede realizar cualquier método de entrega": 2
    }

    db.Category.create({
        category: 'pasteleria'
    })
    db.Category.create({
        category: 'panaderia'
    })
    db.Category.create({
        category: 'chocolateria'
    })

    db.Shipping.create({
        shipping: "Es un producto delicado, la entrega únicamente será en auto o para retirar desde el local"
    })
    db.Shipping.create({
        shipping: "Se puede realizar cualquier método de entrega"
    })


    products.forEach(product => {
        db.Product.create({
            id: product.id,
            product_name: product.name,
            product_description: product.description,
            price: product.precio,
            images: JSON.stringify([product.img1, product.img2, product.img3]),
            tip: product.consejos,
            shipping_id: shippings[product.entrega], 
            category_id: categories[product.category]
        })
    })
}

populateDB()