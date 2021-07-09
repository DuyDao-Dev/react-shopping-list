-- Don't forget to add your create table SQL 
-- It is also helpful to include some test data

-- database name: ShoppingList

-- query to make tasks table
CREATE TABLE "items" (
    "id" serial PRIMARY KEY,
    "name" varchar(80) NOT NULL,
    "quantity" decimal(5, 2),
    "unit" varchar(20),
    "isPurchased" boolean NOT NULL
);

-- query to insert item
INSERT INTO "items" ("name", "quantity", "unit", "isPurchased")
		VALUES ('Apples', '5', 'lbs', 'false');