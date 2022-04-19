* install node v 16.14.2
* yarn (in project folder)
* add .env file<br>
APP_PORT=3030 <br>
<br>
DB_CONNECTION=pgsql<br>
DB_HOST=localhost<br>
DB_PORT=5432<br>
DB_DATABASE=online_shop<br>
DB_USERNAME=user<br>
DB_PASSWORD=<br>
<br>
TEST_DB_CONNECTION=pgsql<br>
TEST_DB_HOST=localhost<br>
TEST_DB_PORT=5432<br>
TEST_DB_DATABASE=online_shop_test<br>
TEST_DB_USERNAME=user<br>
TEST_DB_PASSWORD=<br>
<br>
SMTP_SERVICE="Mail.ru"<br>
SMTP_HOST="smtp.mail.ru"<br>
SMTP_PORT=993<br>
SMTP_USER=blackhole.test@mail.ru<br>
SMTP_PASSWORD=iL9VN9k05bPhUrQ8PCsk<br>
<br>
API_URL=http://localhost:3030<br>
CLIENT_URL=http://localhost:8080<br>


* yarn sq db:create
* yarn sq db:migrate

* yarn (in client folder)

