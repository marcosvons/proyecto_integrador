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
        date_registration: {
            type: dataTypes.DATE,
        },
        followers: {
            type: dataTypes.INTEGER
        },
        email: {
            type:dataTypes.STRING
        }

    };

    let config={
        timestamps: false,
    };

    const User = sequelize.define(alias, cols, config);

    return User;

}