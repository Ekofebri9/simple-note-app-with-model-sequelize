<h1 align="center">Simple Note App RESTful API with Model Sequelize</h1>

<p align="center">
  <a href="https://nodejs.org/">
    <img alt="restfulapi" title="Restful API" src="https://user-images.githubusercontent.com/50242300/61191604-9c7a8c80-a6d6-11e9-9f16-96d2a1664ec0.png">
  </a>
</p>

## Table of contents
* [Introduction](#introduction)
* [Requirements](#requirements)
* [How to run the app ?](#how-to-run-the-app-)
* [Set up .env file](#set-up-env-file)
* [End Point List](#end-point-list)

## Introduction
[![Express.js](https://img.shields.io/badge/Express.js-4.x-orange.svg?style=rounded-square)](https://expressjs.com/en/starter/installing.html)
[![Node.js](https://img.shields.io/badge/Node.js-v.10.16-green.svg?style=rounded-square)](https://nodejs.org/)
[![Sequelize](https://img.shields.io/badge/Sequelize-v.5-blue.svg?style=rounded-square)](https://http://docs.sequelizejs.com/)

Here i was built the Simple Note App which specially for backend only and this project is the development of the previous version  [simple-note-app](https://github.com/Ekofebri9/simple-note-app.git)

## Requirements
1. node_modules
2. Postman
3. Web Server (ex. localhost)

## How to run the app ?
1. Open CMD or Terminal and enter to the app directory
2. Type `npm install`
3. Make a new file with name **.env** in the root directory, set up first [here](#set-up-env-file)
4. Turn on Web Server and database (for example :MySQL as database and xampp as web server) you can using Third-party tool.
5. Run command in CMD r Terminal to migrate database with `sequelize db:migrate`
6. Open Postman desktop application or Chrome web app extension that has installed before
7. Choose HTTP Method and enter request url.(ex. localhost:3002/notes)
8. You can see all the end point [here](#end-point-list)

## Set up .env file
Open .env file on your favorite code editor, and copy paste this code below :
```
NODE_ENV=development
PORT= // fill with your port

DB_HOST=localhost
DB_USER=root // default
DB_PASS= // default
DB_NAME=task_week1_with_model_sequelize
```

## End Point List
**1. GET**
* `/note`
* `//note/:idNote` (Get notes by id)
* `/category`
* `/category/:idCategory` (Get category by id)
* `/notes?idCategory=` (Get notes by category id)
* `/notes?search=` (Search operation by title)
* `/notes?sort=` (Sort operation) // fill with asc or desc
* `/notes?page=` (Paging for limiting notes) // fill only with integer

**2. POST**
* `/note`
* `/category`

**3. PATCH**
* `/note/:idNote` (Update notes by id)
* `/category/:idCategory` (Update category by id)

**4. DELETE**
* `/notes/:idNote` (Delete notes by id)
* `/category/:idCategory` (Delete category by id)

<hr>

<h3 align="center">Author: Eko Febriyanto</h3>
