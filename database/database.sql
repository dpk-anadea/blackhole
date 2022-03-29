create TABLE products_type(
  id SERIAL PRIMARY KEY,
  type VARCHAR(255)
);

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    first_name TEXT NOT NULL,
    last_name TEXT NOT NULL,
    phone VARCHAR NOT NULL,
    email TEXT NOT NULL,
    password VARCHAR NOT NULL
);

create TABLE products(
  id SERIAL PRIMARY KEY,
  name VARCHAR(255),
  products_type_id INTEGER,
  FOREIGN KEY (products_type_id) REFERENCES products_type (id)
);
