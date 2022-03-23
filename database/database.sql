create TABLE products_type(
  id SERIAL PRIMARY KEY,
  type VARCHAR(255)
);

create TABLE products(
  id SERIAL PRIMARY KEY,
  name VARCHAR(255),
  products_type_id INTEGER,
  FOREIGN KEY (products_type_id) REFERENCES products_type (id)
);
