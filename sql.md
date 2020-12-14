#task-1 create database


create database catering_db;
use catering_db;

#task-2 create table users for registration


create table users( id int primary key auto_increment, username varchar(50) not null, email varchar(50) not null, 
password varchar(50));

#insert values into user table


insert into users(username,email,password)values('ashwini','ash@gmail.com', 'ashni');
insert into users(username,email,password)values('ananya','an@gmail.com','anu');

#selecting values from user table


select * from users;
select * from users where email='an@gmail.com' and password='anu';

#create events table


create table events(id int primary key auto_increment, eventname varchar(150) not null
date timestamp not null default current_timestamp);

#insert event names


insert into events(eventname)values('birthday party');
insert into events(eventname)values('bento catering');

#create items table


create table items(item_id int primary key auto_increment, item_name varchar(200) not null)

#insert items 


insert into items(item_name)values('dal tadka,jalebi rabdi,paneer tikka,jeera rice')

#select values from items table


select * from items;
select * from items where item_id='1';

#outer join


select * from items 
full outer join events
on items.item_id=events.id;
