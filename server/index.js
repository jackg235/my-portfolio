const express = require('express');
const app = express();
const cors = require('cors');
const path = require('path');
const https = require('https');
app.use(cors());

const oxfordAppId = "0055160e"
const oxfordAppKey = "d53526e603982bc7bd8ccf6cb546533b"
const port = 8080;

app.use(express.static(path.resolve(__dirname, '../build')));

app.get('/isWord', (req, res) => {
    console.log("got req")
    const word = req.query.word
    console.log("checking if " + word + " is word")
    const options = {
        host: 'od-api.oxforddictionaries.com',
        port: '443',
        path: '/api/v2/lemmas/en/' + word,
        method: "GET",
        headers: {
            'app_id': oxfordAppId,
            'app_key': oxfordAppKey
        }
    };
    https.get(options, (resp) => {
        let body = '';
        resp.on('data', (d) => {
            body += d;
        });
        resp.on('end', () => {
            const obj = JSON.parse(body);
            console.log(obj)
            if (obj.results) {
                console.log(word + " is a word")
                res.send({'isWord' : true})
            } else {
                console.log(word + " is NOT a word")
                res.send({'isWord' : false})
            }
        });
    });
});

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../build/index.html'));
});