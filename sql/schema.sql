/* This is my SCHEMA file */
/* It contains the data structure for my tables */

CREATE TABLE languages (
    id serial primary key, 
    name text, 
    ranking_id integer,
    FOREIGN KEY (ranking_id) REFERENCES ranking (id)
);

CREATE TABLE ranking (
    id serial primary key, 
    ranking text, 
    value integer
);