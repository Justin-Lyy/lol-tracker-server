# lol-tracker-server
ExpressJS server to be used with the LOL Tracker front-end. 

### Introduction
This server fetches data from the Riot-Dev api and is meant to be used in conjunction with front-end [link](https://github.com/Justin-Lyy/lol-tracker "LOL Tracker")

However, since the front-end requires the deployed version on Heroku to be active, the server cannot be run locally without making changes to the front-end repositry. 
Unfortunately, I cannot run the deployed version 24/7 since I don't possess a production key from Riot Games. Furthermore, my dyno plan on Heroku doesn't allow me to use 
the site at a production level scale.

### Installation

#### Local Installation:
1. Download the repositry
2. Run `npm install`
3. Created a file in the top level directory called `.env`
4. Get a developer API Key from Riot [link](https://developer.riotgames.com/ "Riot Dev API")
5. In the .env file place the following: `RIOT_API_KEY=YOUR_API_KEY`
6. You can specify a port number like so: `PORT=PORT_NUMBER`
7. Save the file
8. Run `npm start`
