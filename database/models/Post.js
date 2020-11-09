module.exports = function (sequelize, dataTypes){

    let alias= 'Post';

    let cols={
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER
        },
        id_usuario: {
            type: dataTypes.INTEGER,
        },
        url_img: {
            type: dataTypes.STRING
        },
        post_descr: {
            type: dataTypes.STRING
        },
        published: {
            type:dataTypes.DATE
        }

    };

    let config={
        timestamps: false,
    };

    const Post = sequelize.define(alias, cols, config);

    return Post;

}