create database if not exists db_retrogames
use db_retrogames;

create table jogos (
    id int primary key auto_increment,
    titulo varchar(150) not null,
    plataforma varchar(100) not null,
    desenvolvedora varchar(150) not null,
    imagem_url text not null,
    preco decimal(10, 2) not null,
    data_cadastro datetime default(curdate())
);

insert into jogos
    (titulo, plataforma, desenvolvedora, imagem_url, preco)
values
    (
        'Super Mario World',
        'Super Nintendo',
        'Nintendo EAD',
        'https://upload.wikimedia.org/wikipedia/en/3/32/Super_Mario_World_Coverart.png',
        89.90
    ),
    (
        'Sonic the Hedgehog',
        'Mega Drive',
        'Sonic Team',
        'https://upload.wikimedia.org/wikipedia/en/9/9d/Sonic_the_Hedgehog_1_Genesis_box_art.jpg',
        79.90
    ),
    (
        'Street Fighter II',
        'Super Nintendo',
        'Capcom',
        'https://upload.wikimedia.org/wikipedia/en/1/1a/Street_Fighter_II_SNES_cover.jpg',
        99.90
    ),
    (
        'The Legend of Zelda: A Link to the Past',
        'Super Nintendo',
        'Nintendo EAD',
        'https://upload.wikimedia.org/wikipedia/en/2/21/Legend_of_zelda_a_link_to_the_past.png',
        119.90
    ),
    (
        'Mega Man X',
        'Super Nintendo',
        'Capcom',
        'https://upload.wikimedia.org/wikipedia/en/5/5e/Mega_Man_X_Coverart.png',
        109.90
    );