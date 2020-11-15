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
        tableName: "comentarios"
    };

    const Comment = sequelize.define(alias, cols, config);

    Comment.associate=function(models){
        Comment.belongsTo(models.Post, {
            as: "post",
            foreignKey: "id_post",

        })
        Comment.belongsTo(models.User, {
            as: "user_comments",
            foreignKey:"id_usuario"
        })
    }

    return Comment;

}