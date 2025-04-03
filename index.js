const express = require('express');
const app = express();
app.use(express.json());
const PORT = process.env.PORT || 3000;

const STATUS = 'missingeodc';
//const STATUS = 'missing-eodc';

//import * as COLLECTIONS from './collections-healthy.json' with { type: "json" };
const fs = require('fs')
const CAPABILITIES = JSON.parse(fs.readFileSync('./capabilities-'+STATUS+'.json'));
CREDENTIALS_OIDC = JSON.parse(fs.readFileSync('./credentials-oidc.json'));
const COLLECTIONS = JSON.parse(fs.readFileSync('./collections-'+STATUS+'.json'));

app.get('/', (request, response) => {
    response.send(CAPABILITIES);
});

app.get('/credentials/oidc', (request, response) => {
    response.send(CREDENTIALS_OIDC);
});

app.get('/collections', (request, response) => {
    response.send(COLLECTIONS);
});
  
app.get("/status", (request, response) => {
    const status = {
       "Status": "Running"
    };
    response.send(status);
});

app.listen(PORT, () => {
    console.log("Server Listening on http://localhost:"+PORT);
  });