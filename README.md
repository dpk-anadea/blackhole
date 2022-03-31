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

* yarn sq db:create
* yarn sq db:migrate

* yarn (in client folder)




