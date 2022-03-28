create TABLE products_type(
  id SERIAL PRIMARY KEY,
  type VARCHAR(255)
);

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    user_first_name TEXT NOT NULL,
    user_last_name TEXT NOT NULL,
    user_phone_number VARCHAR NOT NULL,
    user_email TEXT NOT NULL,
    user_password VARCHAR NOT NULL
);

create TABLE products(
  id SERIAL PRIMARY KEY,
  name VARCHAR(255),
  products_type_id INTEGER,
  FOREIGN KEY (products_type_id) REFERENCES products_type (id)
);
