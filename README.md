# Setting up the project & Running it on windows

This guide will walk you through setting up a Laravel 11 and React 18 project on a fresh Windows machine using XAMPP, Node.js, and Vite. By the end of this guide, you will be able to run the project locally on your browser.

## Prerequisites

Before you begin, ensure that you have the following installed on your Windows machine:

1. [Git](https://git-scm.com/download/win) (for cloning the project from GitHub)
2. [Node.js](https://nodejs.org/en/) (for running the React app)
3. [XAMPP](https://www.apachefriends.org/index.html) (for running Laravel locally)
4. [Composer](https://getcomposer.org/download/) (for managing Laravel dependencies)
5. [Visual Studio Code (VSCode)](https://code.visualstudio.com/) (for editing the project files)

## Step 1: Install XAMPP

1. Download and install [XAMPP](https://www.apachefriends.org/index.html) for Windows.
2. During the installation, make sure to select **Apache**, **MySQL**, and **PHP** components.
3. After installation, open the **XAMPP Control Panel** and start **Apache** and **MySQL** services.
4. Verify the installation by going to `http://localhost` in your browser. You should see the XAMPP welcome page.

## Step 2: Install Node.js

1. Download and install [Node.js](https://nodejs.org/en/).
2. Verify the installation

## Step 3: Install Composer
1. Download the composer [executable file](https://getcomposer.org/download/)
2. Verify Composer by running the following command in the terminal:

```bash
composer --version
```

##  Step 4: Clone the Project
1. Clone from [Github](https://github.com/nio04/react-mobiles.git)
2. Navigate to project

```bash
cd react-mobiles
```

## Setup 5: setup XAMPP
### Enable the Apache & mysql service from xampp panel


## Step 6: Set Up Laravel Backend
1. In the project directory, install Laravel dependencies using Composer:
```bash
composer install
```
2. Copy the .env.example file to .env:
```bash
copy .env.example .env
```
3. Generate Application Key for laravel:
```bash
php artisan key:generate
```
4. setup Database (mysql):
```
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=mobiles
DB_USERNAME=root
DB_PASSWORD=
```
5. Create the Database on [PhpMyAdmin](http://localhost/phpmyadmin)
6. Vscode Terminal:
```bash
php artisan migrate
```
7. Run the seeder:
```bash
php artisan db:seed
```

## Step 7: Setup Frontend with Vite
1. navigate to project directory in vscode & run:
```bash
npm i
```
2. make sure .env file contain this line:
```
APP_URL=http://127.0.0.1:8000
```
3. Run Vite
```bash
npm run dev
```

## setp 8: run the app
1. on vscode terminal, execute if not already:
```bash
npm run dev
php artisan serve
```
2. view the App:
### [Load on Browser](http://localhost:8000)
