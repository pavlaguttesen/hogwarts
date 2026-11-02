create table houses
(
    id      integer generated always as identity
        primary key,
    name    varchar(100) not null,
    colors  varchar(100) not null,
    founder varchar(100) not null
);

alter table houses
    owner to postgres;

INSERT INTO houses(name, colors, founder)
VALUES ('Gryffindor', 'Scarlet and Gold', 'Godric Gryffindor'),
('Slytherin', 'Green and Silver', 'Salazar Slytherin'),
('Ravenclaw', 'Blue and Bronze', 'Rowena Ravenclaw'),
('Hufflepuff', 'Yellow and Black', 'Helga Hufflepuff');
