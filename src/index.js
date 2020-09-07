const express = require('express');
const axios = require('axios');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.options('/', cors());

//  ===================================================================================================================================

// DETERMINES THE PORT NUMBER
const PORT = process.env.PORT || 8888;

const key = process.env.RIOT_API_KEY;
console.log(key)

const options = {
    header: {
        "User-Agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.105 Safari/537.36",
        "Accept-Language": "en-US,en;q=0.9,zh-CN;q=0.8,zh;q=0.7",
        "Accept-Charset": "application/x-www-form-urlencoded; charset=UTF-8",
        "Origin": "https://developer.riotgames.com",
        "X-Riot-Token": key
    }
}

app.get('/league/:region/:summoner', (req, res) => {
    let url = `https://${req.params.region}.api.riotgames.com/lol/summoner/v4/summoners/by-name/${req.params.summoner}?api_key=${key}`

    axios.get(url, options)
        .then(response => {
            return response.data
        })
        .then(response => {
            res.send(response)
        })
        .catch(error => {
            console.error(`(${error.response ? error.response.status: 408 }) Error while fetching the profile of the summoner: ${req.params.summoner} from ${req.params.region}`)
            res.status(error.response ? error.response.status: 408 )
            res.send(`Error while fetching the profile of the summoner: ${req.params.summoner} from ${req.params.region}`)
        })
})

//http://localhost:8888/history/na1/accId/e4Y6KlhngtFEYFEW1hO4zQiJ9WKRfZyISFnS8FTwW237aQE

app.get('/history/:region/accId/:accountId', (req, res) => {
    let url = `https://${req.params.region}.api.riotgames.com/lol/match/v4/matchlists/by-account/${req.params.accountId}?api_key=${key}`

    axios.get(url, options)
        .then(response => {
            return response.data.matches        
        })
        .then(response => {
            res.send(response);
        })
        .catch(error => {
            console.error(`(${error.response ? error.response.status: 408 }) Error while fetching the match history with id: ${req.params.accountId} from ${req.params.region}`)
            res.status(error.response ? error.response.status: 408 )
            res.send(`Error while fetching the match history with id: ${req.params.accountId} from ${req.params.region}`)
        })
})

// http://localhost:8888/match/na1/matchId/3533889677
app.get('/match/:region/matchId/:matchId', (req, res) => {
    let url = `https://${req.params.region}.api.riotgames.com/lol/match/v4/matches/${req.params.matchId}?api_key=${key}`

    axios.get(url, options)
        .then(response => {
            return response.data   
        })
        .then(response => {
            res.json(response);
        })
        .catch(error => {
            console.error(`(${error.response ? error.response.status: 408 }) Error while fetching the match details of match id: ${req.params.matchId} from ${req.params.region}`)
            res.status(error.response ? error.response.status: 408 )
            res.send(`Error while fetching the match details of match id: ${req.params.matchId} from ${req.params.region}`)
        })
})

// http://localhost:8888/rank/na1/summonerId/kyS4GYmg8f1R9TYIp4ugHLhfCwRDWK-JKUWCEkG03uuNCt8
app.get('/rank/:region/summonerId/:summonerId', (req, res) => {
    let url = `https://${req.params.region}.api.riotgames.com/lol/league/v4/entries/by-summoner/${req.params.summonerId}?api_key=${key}`

    axios.get(url, options)
        .then(response => {
            return response.data
        })
        .then(response => {
            res.json(response);
        })
        .catch(error => {
            console.error(`(${error.response ? error.response.status: 408 }) Error while fetching the ranked stats of summoner id: ${req.params.summonerId} from ${req.params.region}`)
            res.status(error.response ? error.response.status: 408 )
            res.send(`Error while fetching the ranked stats of summoner id: ${req.params.summonerId} from ${req.params.region}`)
        })
})

app.listen(PORT, ()=> console.log(`server started on port ${PORT}`))