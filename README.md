# lol-tracker-server
ExpressJS server to be used with the LOL Tracker front-end. 

### Introduction
This server fetches data from the Riot-Dev api and is meant to be used in conjunction with [front-end](https://github.com/Justin-Lyy/lol-tracker "LOL Tracker")

However, since the front-end requires the deployed version on Heroku to be active, the server cannot be run locally without making changes to the front-end repositry. 
Unfortunately, I cannot run the deployed version 24/7 since I don't possess a production key from Riot Games. Furthermore, my dyno plan on Heroku doesn't allow me to use 
the site at a production level scale.

### Dependencies for Development and Operation

#### Dependencies
* axios: ^0.20.0
* cors: ^2.8.5
* dotenv: ^8.2.0
* express: ^4.17.1

#### Dev Dependencies
* nodemon: ^2.0.4

### Installation

#### Local Installation:
1. Download the repository
2. Install [NodeJS](https://nodejs.org/en/ "Install NodeJS") if not done so already
2. Run `npm install`
3. Created a file in the top level directory called `.env`
4. Get a developer API Key from [Riot](https://developer.riotgames.com/ "Riot Dev API")
5. In the .env file place the following: `RIOT_API_KEY=YOUR_API_KEY`
6. You can specify a port number like so: `PORT=PORT_NUMBER`
7. Save the file
8. Run `npm start`

### Heroku Deployed version 
There is a version of LOL-Tracker deployed on [Heroku](https://lol-stat-tracker-project.herokuapp.com/ "LOL Tracker")

Please note that this deployed version will not always be available

### Front-end Application
Note that the dist files make use of the deployed version on Heroku, so if you want to run the server using the premade front-end on your own device, you MUST setup the front-end yourself too. You can find instructions for doing so [here](https://github.com/Justin-Lyy/lol-tracker "LOLTracker repo")
