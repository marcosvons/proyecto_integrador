CREATE SCHEMA `usuarios`;
USE usuarios;

CREATE TABLE usuarios(
id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT NOT NULL,
nombre_usuario VARCHAR (50) NOT NULL,
date_registration DATE,
followers INT,
email VARCHAR (320) NOT NULL 
);

CREATE TABLE posts(
id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
id_usuario INT UNSIGNED NOT NULL,
url_img TEXT NOT NULL, 
post_descr TEXT NOT NULL,
published DATE,
FOREIGN KEY (id_usuario) REFERENCES usuarios(id)
);

CREATE TABLE comentarios(
id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
id_post INT UNSIGNED NOT NULL,
id_usuario INT UNSIGNED NOT NULL,
comentario TEXT,
fecha_comment DATE,
FOREIGN KEY (id_post) REFERENCES posts(id),
FOREIGN KEY (id_usuario) REFERENCES usuarios(id)
);

INSERT INTO usuarios (id, nombre_usuario, date_registration, followers, email)
VALUES 
(DEFAULT, 'marcosvons', DATE('2010-09-18'), 3410, 'vonstremayrmarcos@gmail.com'),
(DEFAULT, 'timokarl', DATE('2014-10-02'), 5123, 'tkarl@udesa.edu.ar'),
(DEFAULT, 'valennies', DATE('2012-03-28'), 4213, 'vnies@udesa.edu.ar'),
(DEFAULT, 'alevivone', DATE('2005-01-15'), 10000, 'alevivone@gmail.com'),
(DEFAULT, 'dariosus', DATE('2007-06-13'), 12497, 'sus@gmail.com');

INSERT INTO posts (id, id_usuario, url_img, post_descr, published)
VALUES
(DEFAULT, 1, 'https://cdn.memegenerator.es/imagenes/memes/full/3/80/3805897.jpg', 'Aca ranchando con los pibes despues de la jodita de año nuevo!', DATE('2020-01-01')),
(DEFAULT, 1, 'https://cdn.memegenerator.es/imagenes/memes/full/3/80/3805897.jpg', 'Arranco el calorsito', DATE('2018-04-12')),
(DEFAULT, 2, 'https://cdn.memegenerator.es/imagenes/memes/full/3/80/3805897.jpg', 'Librito, vinito al sol', DATE('2015-05-20')),
(DEFAULT, 2, 'https://cdn.memegenerator.es/imagenes/memes/full/3/80/3805897.jpg', 'Aca en Depo', DATE('2016-11-27')),
(DEFAULT, 3, 'https://cdn.memegenerator.es/imagenes/memes/full/3/80/3805897.jpg', 'Salidita con la chicas', DATE('2018-04-02')),
(DEFAULT, 3, 'https://cdn.memegenerator.es/imagenes/memes/full/3/80/3805897.jpg', 'Flashback al verano', DATE('2019-05-17')),
(DEFAULT, 4, 'https://cdn.memegenerator.es/imagenes/memes/full/3/80/3805897.jpg', 'Programando a full', DATE('2008-12-29')),
(DEFAULT, 4, 'https://cdn.memegenerator.es/imagenes/memes/full/3/80/3805897.jpg', 'Que buen proyecto integrador se mandaron!', DATE('2020-09-28')),
(DEFAULT, 5, 'https://cdn.memegenerator.es/imagenes/memes/full/3/80/3805897.jpg', 'Hola Mundo!', DATE('2010-07-29')),
(DEFAULT, 5, 'https://cdn.memegenerator.es/imagenes/memes/full/3/80/3805897.jpg', 'Que lindo dia', DATE('2020-09-19'));


INSERT INTO comentarios(id, id_post, id_usuario, comentario, fecha_comment)
VALUES
(DEFAULT, 1, 1, 'JAJA', DATE('2020-01-01')),
(DEFAULT, 1, 1, '!!!!!', DATE('2020-01-02')),
(DEFAULT, 1, 1, 'Buenisimo', DATE('2020-01-03')),
(DEFAULT, 1, 1, 'Genial', DATE('2020-01-04')),
(DEFAULT, 2, 1, 'jajajajajaaa', DATE('2020-01-05')),
(DEFAULT, 2, 1, 'genial', DATE('2020-01-06')),
(DEFAULT, 2, 1, 'buena', DATE('2020-01-07')),
(DEFAULT, 2, 1, 'jajajaj', DATE('2020-01-08')),
(DEFAULT, 3, 2, 'JAJAJJA', DATE('2020-01-09')),
(DEFAULT, 3, 2, 'que careta', DATE('2020-01-10')),
(DEFAULT, 3, 2, 'malo malo', DATE('2020-01-11')),
(DEFAULT, 3, 2, 'jajajajja', DATE('2020-01-12')),
(DEFAULT, 4, 2, '@fonsi', DATE('2020-01-13')),
(DEFAULT, 4, 2, 'malo', DATE('2020-01-14')),
(DEFAULT, 4, 2, 'Noo no', DATE('2020-01-15')),
(DEFAULT, 4, 2, 'JAJAJ', DATE('2020-01-16')),
(DEFAULT, 5, 3, 'barbaro', DATE('2020-01-17')),
(DEFAULT, 5, 3, '@colores', DATE('2020-01-18')),
(DEFAULT, 5, 3, '@guardiaAyres', DATE('2020-01-19')),
(DEFAULT, 5, 3, 'milanesas', DATE('2020-01-20')),
(DEFAULT, 6, 3, 'Hay milanesas', DATE('2020-01-21')),
(DEFAULT, 6, 3, 'Mauu', DATE('2020-01-22')),
(DEFAULT, 6, 3, 'JOOO JOO', DATE('2020-01-23')),
(DEFAULT, 6, 3, 'ju juu', DATE('2020-01-24')),
(DEFAULT, 7, 4, 'Buenoo', DATE('2020-01-25')),
(DEFAULT, 7, 4, 'eso', DATE('2020-01-26')),
(DEFAULT, 7, 4, 'manso', DATE('2020-01-27')),
(DEFAULT, 7, 4, 'ee', DATE('2020-01-28')),
(DEFAULT, 8, 4, '@nqv', DATE('2020-01-29')),
(DEFAULT, 8, 4, 'jajaja', DATE('2020-01-30')),
(DEFAULT, 8, 4, 'juuuu', DATE('2020-02-01')),
(DEFAULT, 8, 4, 'Ja', DATE('2020-02-02')),
(DEFAULT, 9, 5, 'JAJ', DATE('2020-02-03')),
(DEFAULT, 9, 5, 'shoroo', DATE('2020-02-04')),
(DEFAULT, 9, 5, 'mee estalle', DATE('2020-02-05')),
(DEFAULT, 9, 5, 'jaj', DATE('2020-02-06')),
(DEFAULT, 10, 5, 'AJAJA', DATE('2020-02-07')),
(DEFAULT, 10, 5, 'Aaaa', DATE('2020-02-08')),
(DEFAULT, 10, 5, 'JAJAJJAJA', DATE('2020-02-09')),
(DEFAULT, 10, 5, 'ajaja', DATE('2020-02-10'));


