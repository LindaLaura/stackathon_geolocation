const {STRING, FLOAT, ENUM} = require('sequelize');

//import your db
const db = require ('../db');

//define your model
const Product = db.define('product',{
    model:{
        type: STRING,
        allowNull: false,
        validate:{
            notEmpty:true
        }
    },
    longitude:{
        type: FLOAT,
        validate:{
            min: -180,
            max: 180
        }
    },
    latitude:{
        type: FLOAT,
        validate:{
            min: -90,
            max: 90
        }
    },
    address:{
        type: STRING,
        validate:{
            notEmpty:true
        }
    },
    imageUrl:{
        type: STRING, 
        // defaultValue:'campus-default.jpeg' cercare un'immagine di default
    },
    status:{
        type: ENUM,
        values:['active', 'not active']
    },
    // validate: {
    //     bothCoordsOrNone(){
    //       if ((this.latitude === null) !== (this.longitude === null))
    //         {
    //             throw new Error('Either both latitude and longitude, or neither!');
    //         }
    //     }
    // }
})

module.exports = Product