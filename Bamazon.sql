

/* Creating bama database. */
CREATE DATABASE bamazon;


/* useing bama database. */
USE bamazon;


/* Schema */
CREATE TABLE products (
  item_id INTEGER(11) AUTO_INCREMENT NOT NULL,
  item_name VARCHAR(30) NOT NULL,
  department_name VARCHAR(30) NOT NULL,
  price INTEGER(4),
  quantity INTEGER(11),
);

/* seed */
INSERT INTO products (item_id, item_name, department_name, price, quantity)
VALUES (21, "Card Deck", "Fun Stuff", 5, 24);

INSERT INTO products (item_id, item_name, department_name, price, quantity)
VALUES (22, "coffee", "drinks", 15, 24);

INSERT INTO products (item_id, item_name, department_name, price, quantity)
VALUES (23, "macbook", "electronics", 999, 6);

INSERT INTO products (item_id, item_name, department_name, price, quantity)
VALUES (24, "headphones", "electronics", 25, 24);

INSERT INTO products (item_id, item_name, department_name, price, quantity)
VALUES (25, "fountainPens", "stationary", 31, 24);

INSERT INTO products (item_id, item_name, department_name, price, quantity)
VALUES (26, "forks", "utensils", 5, 24);

INSERT INTO products (item_id, item_name, department_name, price, quantity)
VALUES (27, "beer", "alcohol", 4, 24);

INSERT INTO products (item_id, item_name, department_name, price, quantity)
VALUES (28, "boxes", "materials", 1, 24);

INSERT INTO products (item_id, item_name, department_name, price, quantity)
VALUES (29, "diapers", "baby", 100, 24);

INSERT INTO products (item_id, item_name, department_name, price, quantity)
VALUES (30, "jeans", "clothing", 30, 24);
