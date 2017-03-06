#URL SHORTENER API(Static)
##Joey Fuller

**URL SHORTENER API** is a project started by myself for a school assignment. Code is subject to random and maybe mistaken changes. Use as an educational purpose at your own risk.

##Install
To install the **URL SHORTENER API** please clone or download the v1.0.0 via [THIS LINK](https://github.com/JoeyFuller/DWA1.git).

Some other files you will need include Node.js [LINK](https://nodejs.org/en/) and NPM [LINK](https://www.npmjs.com) which will both need to be install prior to installing the **URL SHORTENER API**.

After both Node.js and NPM are installed, open your command line or terminal and navigate to the directory you where you stored the repo files.

```
$CD /YOUR DIRECTORY/Deployment-Of-Web-Applications-master
```

Once you have reached your directory run the following command.

```
npm install
```
This will install everything needed(including dependencies).

##SQL Database

Install a MySQL Database 
https://www.mysql.com

##ENV Variables
Create an .env file in the root folder with the following
```
DB_NAME="your database name"
DB_HOST="your host"
DB_PORT="your port"
DB_SCHEMA=mysql
DB_DIALECT=mysql
DB_USER="your username"
DB_PASS="your password"
```
##Routes
To view the "home page" navigate to

```
http://localhost:3000/
```
where you will see a simple message displayed as a JSON object. Future changes will show more user friendly interfaces and have actual functionality.
```
http://localhost:3000/go/:shortURL
```
this is the redirect for the original URL using the short URL

##Endpoints
The endpoints currently active are

```
Create Short URL
POST /api/v1/urls

Displays all URLs
GET /api/v1/urls

Displays URLs based on ID
GET /api/v1/urls/:id

Updates URLs based on ID
Post /api/v1/urls/:id

Deletes URLs based on ID
DELETE /api/v1/urls/:id

```
This is ment to display a shortened URL or in this case a placeholder url with a 4 digit short code added. EX:

```
short_url:dj32
```
#Thank you for your time!
##If you have questions feel free to contact me.