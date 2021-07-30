const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Lunch extends Model {}

Lunch.init({
    description:{
        type:DataTypes.TEXT
    }
},{sequelize})

module.exports = Lunch