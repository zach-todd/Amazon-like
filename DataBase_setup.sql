CREATE DATABASE bamazon;

use bamazon;

create table products(
	item_id INT NOT NULL AUTO_INCREMENT,
    product_name varchar(20) NOT NULL,
    department_name varchar(20) NOT NULL,
    price decimal(10,2) NOT NULL,
    stock_quantity int(99),
    PRIMARY KEY (item_id)
);
insert into products(product_name, department_name,price,stock_quantity)
values("Socks","Clothing", 15.00, 5000);

insert into products(product_name, department_name,price,stock_quantity)
values("Tolberone","Food",5.89, 20000);

insert into products(product_name, department_name,price,stock_quantity)
values("Destiny 2", "Video Games", 60.00, 10);

insert into products(product_name, department_name,price,stock_quantity)
values("Headphones", "Electronics",58.99, 3000);

insert into products(product_name, department_name,price,stock_quantity)
values("Shoes","Clothing",600.00, 700);

insert into products(product_name, department_name,price,stock_quantity)
values("Gold Bar","industrial",65.99, 15);

insert into products(product_name, department_name,price,stock_quantity)
values("AA Batteries", "Electronics", 7.64, 60);

insert into products(product_name, department_name,price,stock_quantity)
values("Bag of Dice","Games",29.99, 100);

insert into products(product_name, department_name,price,stock_quantity)
values("Keyboard","Electronics", 60.00, 5);

insert into products(product_name, department_name,price,stock_quantity)
values("Echo Dot","Amazon",49.99, 99);

SELECT * From products;



