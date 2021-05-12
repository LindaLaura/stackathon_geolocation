const {TEXT, ENUM, DATE, STRING} = require('sequelize');
const db = require('../db');

const Ticket = db.define('ticket', {
    title:{
        type:STRING,
        allowNull: false,
        validate:{
            notEmpty:true
        }
    },
    // description:{
    //     type:TEXT
    // },
    status: {
        type:ENUM,
        values:['created', 'deleted', 'resolved']
    },
    createdDate:{
        type:DATE,
        timestamps: true,
        defaultValue: db.fn('NOW')
    },
    // closedDate:{
    //     type:DATE,
    //     timestamps: true,
    // }
})

module.exports  = Ticket