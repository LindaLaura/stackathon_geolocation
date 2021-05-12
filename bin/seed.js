#!/usr/bin/env node


const fs = require('fs')

const {db, Company, Product, Ticket} = require('../server/db')

const companies = JSON.parse(fs.readFileSync('companies.json', 'utf8'));
const products = JSON.parse(fs.readFileSync('products.json', 'utf8'));
const tickets = JSON.parse(fs.readFileSync('tickets.json', 'utf8'));

const seed = async () => {
    await db.sync({force: true});
    
    //companies
    await Promise.all(companies.map(company => Company.create({
        name: company.name,
        address: company.address
    })));

    //products
    await Promise.all(products.map(product => Product.create({
        model: product.model,
        longitude: product.longitude,
        latitude: product.latitude,
        imageUrl: product.imageUrl,
        status: product.status,
        companyId: product.companyId
    })));

    //Tickets
    await Promise.all(tickets.map(ticket => Ticket.create({
        title: ticket.title,
        status: ticket.status,
        createdDate: ticket.createdDate,
        productId: ticket.productId
    })))

    db.close();
    console.log(`Seeding successful!`)
}

seed().catch(err => {
    db.close()
    console.log(`
        Error seeding:
        ${err.message},
        ${err.stack}
    `)
    
})