const express = require('express');
const cors = require('cors')
const app = express();
app.use(express.json());
app.use(cors());
const PORT = process.env.PORT || 3000;

const STATUS = 'missingeodc';
//const STATUS = 'healthy';

//import * as COLLECTIONS from './collections-healthy.json' with { type: "json" };
const fs = require('fs')
const CAPABILITIES = JSON.parse(fs.readFileSync('./capabilities-'+STATUS+'.json'));
const CREDENTIALS_OIDC = JSON.parse(fs.readFileSync('./credentials-oidc.json'));
const COLLECTIONS = JSON.parse(fs.readFileSync('./collections-'+STATUS+'.json'));
const COLLECTIONS_AGERA5 = JSON.parse(fs.readFileSync('./collections-agera5-'+STATUS+'.json'));
const COLLECTIONS_AUT_DEM = JSON.parse(fs.readFileSync('./collections-aut_dem-'+STATUS+'.json'));
const COLLECTIONS_S2 = JSON.parse(fs.readFileSync('./collections-s2-'+STATUS+'.json'));
const PROCESSES = JSON.parse(fs.readFileSync('./processes-'+STATUS+'.json'));
const FILE_FORMATS = JSON.parse(fs.readFileSync('./file_formats-'+STATUS+'.json'));

app.get('/', (request, response) => {
    response.send(CAPABILITIES);
});

app.get('/credentials/oidc', (request, response) => {
    response.send(CREDENTIALS_OIDC);
});

app.get('/collections', (request, response) => {
    response.send(COLLECTIONS);
});

app.get('/collections/AGERA5', (request, response) => {
    response.send(COLLECTIONS_AGERA5);
});

app.get('/collections/AUT_DEM', (request, response) => {
    response.send(COLLECTIONS_AUT_DEM);
});

app.get('/collections/SENTINEL2_L2A', (request, response) => {
    response.send(COLLECTIONS_S2);
});

app.get('/processes', (request, response) => {
    response.send(PROCESSES);
});

app.get('/file_formats', (request, response) => {
    response.send(FILE_FORMATS);
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