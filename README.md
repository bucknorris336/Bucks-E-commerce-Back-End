# Bucks-E-commerce-Back-End

Check out a short video walkthrough
📽️ [Click Here](https://drive.google.com/file/d/13URy1n1jm432Fp-n7MzNxYXu-bbTkq5F/view?usp=sharing)

---

## Table of Contents

- [Description](#Description)
- [Installation/Usage](#Installation/Usage)
- [Tests](#Tests)
- [Contributing](#Contributing)

---

## Description

```
This project was developed using starter code to create a back-end
e-commerce site, using a working Express.js API configured to use Sequelize to interact with a MySQL database.

The schema.sql file in the db folder was run with MySQL to create the ecommerce_db and establish a connection with Insomnia Core through the command line interface. Once the database is created, the specific NPM packages are installed using npm install. MySQL2 and Sequelize packages to connect an Express.js API to a MySQL database, which utilizes username, password, and database name. npm run seed command migrates the data to MYSQL. A table is created out of the four objects located in the models folder: Product, Category, Tag, ProductTag.

Run NPM Start to start the server and connect to local host http://localhost:3001/. Then, an API GET request is performed for each route displaying in JSON format. All API POST, PUT, and DELETE routes are tested in Insomnia Core. I am able to successfully create, update, and delete data in my database.

```

---

## Installation/Usage

💾 💻

Use this back end database to see, create, update, and delete category, product, and tag information.
Watch the following demo to see how to use the routes:

Install packages from the package.json file. This project requries:

- MySQ:2
- Sequelize
- dotenv

From the command line, run:

`mysql -u root -p`

`SOURCE db/schema.sql`

`exit`

`node seeds/index.js` to seed the database and test routes

`npm install`

`npm run start`

Then you are able to connect to local host http://localhost:3001/ in Insomnia.

---

## Contributing

[Buck Blocker](https://github.com/bucknorris336)

[def]: #license
