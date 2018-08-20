'use strict';

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('Publicacion',{
        titulo: {
            type: DataTypes.STRING(255),
            allowNull: false
        },
        cuerpo: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        fecha: {
            type: DataTypes.DATE,
            allowNull: false
        }
    },{
        underscored: true,
        freezeTableName: true,
        tableName: 'publicaciones'
    })
};