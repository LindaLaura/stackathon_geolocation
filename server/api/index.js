const router = require('express').Router()

router.use('/companies', require('./routes/companyRoute'));
router.use('/products', require('./routes/productRoute'));
router.use('/tickets', require('./routes/ticketRoute'));

module.exports = router