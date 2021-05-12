const {STRING} = require ('sequelize');

//import your db
const db = require('../db')

// define your model
const Company = db.define('company', {
    name:{
        type: STRING,
        allowNull: false,
        validate:{
            notEmpty:true
        }
    },
    address:{
        type: STRING,
        validate:{
            notEmpty:true
        }
    },

})

// define any class or instance method

module.exports = Company