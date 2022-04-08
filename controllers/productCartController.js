const productCartController ={
    productCart: (req, res) =>{
        res.render('productCart', {style: 'productCart.css'});
    }
}


module.exports = productCartController;