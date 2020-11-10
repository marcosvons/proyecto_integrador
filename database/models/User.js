module.exports = function (sequelize, dataTypes){

    let alias= 'User';

    let cols={
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER
        },
        nombre_usuario: {
            type: dataTypes.STRING
        },
        password: {
            type: dataTypes.STRING
        },
        date_registration: {
            type: dataTypes.DATE
        },
        followers: {
            type: dataTypes.INTEGER
        },
        email: {
            type:dataTypes.STRING
        },
        fecha_nac: {
            type: dataTypes.DATE
        },
        preg_seg: {
            type: dataTypes.STRING
        } 

    };

    let config={
        timestamps: false,
        tableName: "usuarios"
    };

    const User = sequelize.define(alias, cols, config);

    return User;

}