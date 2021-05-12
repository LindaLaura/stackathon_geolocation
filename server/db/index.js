//import your db
//import your models
const db = require('./db')
const Product = require('./models/product');
const Company = require('./models/company');
const Ticket = require('./models/ticket');


//state your model associations (hasOne etc)
Product.belongsTo(Company);
Company.hasMany(Product);

Ticket.belongsTo(Product);
Product.hasMany(Ticket);

// Ticket.belongsTo(Company);
// Company.hasMany(Ticket);

//export your db and Models (so they all can be imported from a single central location)

module.exports={
    db,
    Company,
    Product,
    Ticket
}
