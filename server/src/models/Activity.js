const { DataTypes } = require('sequelize');

module.exports=(sequelize)=>{
    sequelize.define('Activity',{
        id:{
            type: DataTypes.INTEGER,
            autoIncrement:true,
            //defaultValue:1,
            allowNull: false,
            primaryKey: true,
        },
        name:{
            type: DataTypes.STRING,
            allowNull: false
        },
        difficulty:{
            type:DataTypes.INTEGER,
            allowNull:false,
            validate:{
                min:1,
                max:5
            },
        },
        duration:{
            type:DataTypes.INTEGER
        },
        season:{
            type:DataTypes.ENUM('Verano','Otoño','Invierno','Primavera')
        }
    })
};