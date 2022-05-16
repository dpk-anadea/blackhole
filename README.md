## Project setup
* install node v 16.14.2
* yarn (in project folder)
* add .env file:
```
APP_PORT=3030

DB_CONNECTION=pgsql
DB_HOST=localhost
DB_PORT=5432
DB_DATABASE=online_shop
DB_USERNAME=user
DB_PASSWORD=

TEST_DB_CONNECTION=pgsql
TEST_DB_HOST=localhost
TEST_DB_PORT=5432
TEST_DB_DATABASE=online_shop_test
TEST_DB_USERNAME=user
TEST_DB_PASSWORD=

SMTP_SERVICE="Mail.ru"
SMTP_HOST="smtp.mail.ru"
SMTP_PORT=993
SMTP_USER=blackhole.test@mail.ru
SMTP_PASSWORD=iL9VN9k05bPhUrQ8PCsk

API_URL=http://localhost:3030
CLIENT_URL=http://localhost:8080
```

* yarn sq db:create
* yarn sq db:migrate
* yarn sq db:migrate:undo
* yarn sq db:seed:undo:all 
* yarn sq db:seed:all   
