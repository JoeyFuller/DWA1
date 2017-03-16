#URL SHORTENER API
##Joey Fuller

**URL SHORTENER API** is a project started by myself for a school assignment. Code is subject to random and maybe mistaken changes. Use as an educational purpose at your own risk.

##Install
To install the **URL SHORTENER API** please clone or download the v1.4.0(at the time of this update) via [THIS LINK](https://github.com/JoeyFuller/DWA1.git).

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


##Style Guild

If you have to install ESLint (or update it) I suggest installing globally on your machine with NPM using the following command
```
npm install -g eslint
```
Your IDE of choice must support the lastest ESLint plugin. I use Sublime Text 3, if you choose to use another IDE you must submit to their rules and plugins. For Sublime text I used a plugin called SublimeLinter which you can install VIA the build in plugin manager on Sublime Text. Documentation for the plugin can be found [HERE](https://github.com/roadhump/SublimeLinter-eslint)

NOTE: If will need to follow the guide strickly and check the Sublime Text console for errors for details on how to fix any issues you maybe having with the plugin reading ESLint.

NOTE: To use SublimeLinter you will also have to manually install AirBnB. There are often version problems with this which can be resolved by the following command in your terminal
```
(                                                      
  export PKG=eslint-config-airbnb;
  npm info "$PKG@latest" peerDependencies --json | command sed 's/[\{\},]//g ; s/: /@/g' | xargs npm install --save-dev "$PKG@latest"
)
```

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
##Unit tests
Using Mocha and chai, you can test your node.js programming easy through the terminal. All you have to do is navigate to the root folder, create a /test directory and create the tests you want using mocha, supertest, or any other tester you would like. In order to run ALL tests via terminal add
```
"test": "mocha --recursive"
``` 
to your package.json file. Then head to terminal in your root folder and execute 
```
npm test
``` 
and this will run every test you have in said test folder.

#Thank you for your time!
##If you have questions feel free to contact me.