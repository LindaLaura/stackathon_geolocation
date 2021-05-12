const router = require('express').Router();

const Product = require('../../db/models/product');
const Ticket = require('../../db/models/ticket');

router.get('/', async (req, res, next) => {
    try {
      const products = await Product.findAll();
      res.status(200).send(products);
    
    } catch (err) { next(err) }
})
  
router.get('/:productId', async (req, res, next) => {
    try {
        const {productId} = req.params;
        const product = await Product.findByPk(productId, {
            include: Ticket
        })
        res.status(200).send(product)
    } catch (err) { next(err) }
})
  
router.post('/', async (req, res, next) => {
    try {
        const {model} = req.body;
        const category = await Product.create({model})
        res.status(201).send(category);
    
    } catch (err) { next(err) }
})
  
router.delete('/:productId', async (req, res, next) => {
    try {
        const {productId} = req.params;
        const product = await Product.findByPk(productId);
        await product.destroy();
        res.sendStatus(204);
    
    } 
    catch (err) {
         next(err) 
    }
})
  
router.put('/:productId', async (req, res, next) => {
    try {
        const {model} = req.body;
        const {productId} = req.params;
        const productToBeUpdated = await Product.findByPk(productId);
        const editedProduct = await productToBeUpdated.update({model})
        res.status(204).send(editedProduct); // editedProduct.dataValues
    
    } catch (err) { next(err) }
})
  
  
module.exports = router