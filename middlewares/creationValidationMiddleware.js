const { body } = require("express-validator");
const path = require('path')

module.exports = [
    body("name").notEmpty().withMessage("Agregue un nombre"),
    body("information").notEmpty().withMessage("Agregue información"),
    body("precio").notEmpty().withMessage("Agregue un precio"),
    body("entrega").notEmpty().withMessage("Agregue un metodo de entrega"),
    body("consejos").notEmpty().withMessage("Agregue un consejo"),
    body("reclamos").notEmpty().withMessage("Agregar contacto de reclamo"),
    body("description").notEmpty().withMessage("Agregar descripción"),
    body("category").notEmpty().withMessage("Debe seleccionar una categoria"),
    body("img1").custom((value, { req }) => {
        let files = req.files;

        let acceptedExtensions = ['.jpg', '.png'];

        if (files.length != 3) {
            throw new Error(`Tienes que subir tres imagenes`);
        } else {
            files.forEach(e => {
                if (!acceptedExtensions.includes(path.extname(e.originalname))) {
                    throw new Error(`Las extensiones de archivo permitidas son ${acceptedExtensions.join(', ')}`);
                }
            })
		}

        return true;
    }),
];
