# Babakov test app
#### App has been hosted by [link](https://glacial-spire-64846.herokuapp.com/).

## Before starting app you should prepare the environment:

### DB connection
App uses MongoDB.
You have 2 ways:

1. **Use DB on localhost**. 
MongoDB must be installed on your machine.
If you want to install MongoDB on your machine use instruction [here](https://www.mongodb.com/docs/manual/installation/) or [here](https://zarkom.net/blogs/how-to-install-mongodb-for-development-in-windows-3328) (for windows).
*You will not have to configure DB in app if you chose this way.*

2. **Use Cloud**
For example you can use [Atlas](https://www.mongodb.com/atlas). 
Follow the link and create DB cluster.
***You should add .env file in the project's root directory and add your DB URL in thi file:***
```
DB_URL=<your-atlas-url>
```

### Google API Key
You have to add your Google API Key in .env file for google maps to work:
```
GOOGLE_API_KEY=<your-google-api-key>
```
***If you have not added .env file in the project yet, you have to create .env file in the project's root directory***

### Seed test data
If you want to add test data in database, you should run the following command from project's root directory:
```
node seesd/index.js
```


## Run App
**!To run the application, Node.js and npm must be installed on your machine.**
1. Use command line and go to project root directory.
2. Run:
```
npm install
```

### Seed test data
If you want to add test data in database, you should run the following command from project's root directory:
```
node seesd/index.js
```

3. Run:
```
node app.js
```

***App use port 3000 by default. If you want to change port, you may just add it in .env file:***
```
PORT=<your-port-number>
```
