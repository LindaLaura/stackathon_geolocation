const router = require('express').Router();

const Company = require('../../db/models/company');
const Product = require('../../db/models/product');

router.get('/', async(req, res, next) =>{
    try{
        const companies = await Company.findAll();
        res.status(200).send(companies);
    }
    catch(ex){
        next(ex)
    }
})

router.get('/:companyId', async(req, res, next) =>{
    try{
        const company = await Company.findByPk(req.params.companyId,{
            include: Product
        });
        res.status(200).send(company);
    }
    catch(ex){
        next(ex)
    }
})

router.post('/', async(req, res, next) =>{
    try{
        const {name} = req.body;
        const company = await Company.create({name});
        res.status(200).send(company);
    }
    catch(ex){
        next(ex)
    }
})

router.delete('/:companyId', async (req, res, next) => {
    try {
        const {companyId} = req.params;
        const company = await Product.findByPk(companyId);
        await company.destroy();
        res.sendStatus(204);
    
    } 
    catch (err) {
        next(err) 
    }
})

router.put('/:companyId', async (req, res, next) => {
    try {
        const {name} = req.body;
        const {companyId} = req.params;
        const companyToBeUpdated = await Company.findByPk(companyId);
        const editedCompany = await companyToBeUpdated.update({name})
        res.status(204).send(editedCompany); // editedCompany.dataValues
    
    } catch (err) { next(err) }
})

module.exports = router 