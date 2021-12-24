# Meditation App

Cookbook is full MERN stack web application. Meditation app is a meditation timer and tracker carefully designed for seasoned or beginning-but-serious mindfulness meditators. Meditation application is a computer-based application that provides ambient sounds for meditation. The benefit of this app is primarily to ensure high-quality relaxation and achieve the external and internal harmony of the user.

## technologies
In this MERN stack application the **frontend** is developed in HTML5, CSS3 and React.js while **backend** is created in Express and Node.js. 
**Data** is stored in MongoDB Atlas and users can access only their data but no others.

## product features
-User tutorial
-Authorization
-Facebook Login
-Track library screen
-Meditation screen
-User profile screen

## application flow

**Welcome screen** - User sees this screen shown below when he goes on the app page (Initial load of the application).

**How it works tab** - Shows the most important features to get the user going with the app

**Register tab** contains a sign-up form. Appropriate validation messages show when the user doesn’t fill out sign-up fields.

**Log in** tab contains login form. Appropriate validation messages show when the user doesn’t fill out login fields.

After the successful signup or login, the user is redirected to the **Songs Library**. Songs are sorted on screen by their length in minutes. Only songs marked with green badge are in full length the rest are default short song 50 seconds long. 

When the user chooses one track to listen to, he gets a **Audio Player** screen. It contains basic audio controls and favourite button. When the user clicks on the heart, the heart becomes red and the track is to be stored as users favourites as the one of the user favourites.

Click on the profile icon in the top right corner leads the user on the **Profile** screen

Click on the Account details leads the user on the **Account details** page. If the user wants to update email or username he can do that by clicking on the pencil icon, and changing one field, or another, or both. He can save the changes by clicking on the button **save**.

Click on the **Change password** at the Profile page leads the user on the Change password page

Click on the **My stats** at the Profile page leads the user on the My stats page. My stats page is an additional feature that I haven't implemented yet. Idea is to provide user with basic info about his meditating habits.

Click on the **Log out** at the Profile page leads the user on the Login screen.

## starting application

#### frontend

After cloning repository and opening it in terminal type command `cd client` and run `npm install` script to install all the dependencies. After successfull instalataion run `npm start`. 

That runs the frontend part of application in the development mode.

Open http://localhost:3000 to view it in the browser.

#### backend

In terminal type command `cd server` and add your own .env file with following variables: **PORT** use 5000,  **MONGO_URI** use "mongodb+srv://**username**:**password**@pizzaordercomposer.n9nav.mongodb.net/**project_number**?retryWrites=true&w=majority" and **JWT_SECRET** . After that run `npm install` to install all the dependencies. After completing these steps run `npm start` script. 

That runs the server part of application in the development mode on http://localhost:5000.


#### seeding database

To seed database with users and recipes make sure you are located in `server` then type command `npm run seed`. This will first drop all collections in database and then seed it with data. This is to avoid any potential disfuncionalities of application during your testing. 
