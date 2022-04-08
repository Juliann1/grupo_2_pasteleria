const productDetailController = {
    productDetail: (req, res) =>{
        res.render('productDetail', {style: 'productDetail.css'})
    }
}

module.exports = productDetailController;