module.exports = function (sequelize, dataTypes){

    let alias= 'Comment';

    let cols={
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER
        },
        id_post: {
            type: dataTypes.INTEGER
        },
        id_usuario: {
            type: dataTypes.INTEGER,
        },
        comentario: {
            type: dataTypes.STRING
        },
        fecha_comment: {
            type:dataTypes.DATE
        }

    };

    let config={
        timestamps: false,
    };

    const Comment = sequelize.define(alias, cols, config);

    return Comment;

}