# MALAUVA - BACKEND

MalaUva is a wine cellar online, focused in bringing the wine life-style to modern audiences by being a place where everyone can feel understood in terms of tastes.

## Folder Structure: 

- [MALAUVA - BACKEND](#malauva---backend)
  - [Folder Structure:](#folder-structure)
  - [MalaUva Backend](#malauva-backend)
  - [Public](#public)
  - [src](#src)
    - [api](#api)
    - [config](#config)
    - [data](#data)
    - [middlewares](#middlewares)
    - [seeds](#seeds)
    - [tests](#tests)
    - [utils](#utils)
  - [Tech Stack](#tech-stack)

---

## MalaUva Backend

In the root of the project you'll find the config files, the linter and the `package.json`, where you can find the scripts for the project.

To highlight:

`vercel.json`: document with info for vercel's deployment, necesary for it.


## Public

Assets and images needed.

## src

The project itself.

In this folder you'll find the main files of the project. By folder:

### api

Files that modify how the database works:

`controllers`: files for controlling the endpoints of the different collections of the database

`models`: files that stablish the different models of the database collections. We used *mongoose* for creating the Schemas.

`routes`: files with the routes for the database requests

### config

Folder that includes the file `db.js`, which cointains the database configuration. Wer used *mongoose* for stablishing the connection.

### data

Files with data, here there's only one file: `mockData.js`. Which contains placeholder data for the tests.

### middlewares

Middleware functions for the routes.

`files.middleware.js`: all the functions related to upload, remove or modify files in the cloud service that hosts the images.

`isAdmin.js`: functions for verifying if the user has the role 'admin'.

`isAuth.js`: functions to verify if the user is Authorized in the DB.

### seeds

Data and functions for the initial data that we had to upload to the DB

`seeds/files`: different iterations of the files used to feed the database as a batch

`feedData.js`: Function to feed the data depending on the collection to add it.

`purchases.seed.js`: Function to read the file and upload the data.

`users.seed.js`: Function to read the file and upload the data.

`wines.seed.js`: Function to read the file and upload the data.

### tests

Tests folder. We did Unit Testing for the endpoints using `Jest`.

`purchase_api.test.js`: tests for the purchases endpoints

`user_api.test.js`: tests for the users endpoints

`wine_api.test.js`: tests for the wines endpoints

`teardown.js`: function to close the process in the db after the tests => More notes inside this file.

### utils

`calc.js`: Mathematical Calculus functions.

`globalVariables.js`: Global variables for the project, used in different files and functions.

`jwt.js`: Functions to create a verify tokens.

`parseSeedsData`: function to clean and prepare all the data from the CSV files in the seeds.

## Tech Stack

![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![Next JS](https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![Jest](https://img.shields.io/badge/-jest-%23C21325?style=for-the-badge&logo=jest&logoColor=white)