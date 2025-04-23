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
const CREDENTIALS_BASIC = JSON.parse(fs.readFileSync('./credentials-basic.json'));
const ME = JSON.parse(fs.readFileSync('./me.json'));

const COLLECTIONS = JSON.parse(fs.readFileSync('./collections-'+STATUS+'.json'));
const COLLECTIONS_AGERA5 = JSON.parse(fs.readFileSync('./collections-agera5-'+STATUS+'.json'));
const COLLECTIONS_AUT_DEM = JSON.parse(fs.readFileSync('./collections-aut_dem-'+STATUS+'.json'));
const COLLECTIONS_S2 = JSON.parse(fs.readFileSync('./collections-s2-'+STATUS+'.json'));
const COLLECTIONS_S2L1C = JSON.parse(fs.readFileSync('./collections-s2l1c-'+STATUS+'.json'));

const PROCESSES = JSON.parse(fs.readFileSync('./processes-'+STATUS+'.json'));
const FILE_FORMATS = JSON.parse(fs.readFileSync('./file_formats-'+STATUS+'.json'));
const SERVICE_TYPES = JSON.parse(fs.readFileSync('./service_types-'+STATUS+'.json'));
const UDF_RUNTIMES = JSON.parse(fs.readFileSync('./udf_runtimes-'+STATUS+'.json'));

const PROCESS_GRAPHS = JSON.parse(fs.readFileSync('./process_graphs-'+STATUS+'.json'));
const JOBS = JSON.parse(fs.readFileSync('./jobs-'+STATUS+'.json'));
const SERVICES = JSON.parse(fs.readFileSync('./services-'+STATUS+'.json'));
const FILES = JSON.parse(fs.readFileSync('./files-'+STATUS+'.json'));

app.get('/', (request, response) => {
    response.send(CAPABILITIES);
});

app.get('/credentials/oidc', (request, response) => {
    response.send(CREDENTIALS_OIDC);
});

app.get('/credentials/basic', (request, response) => {
    response.send(CREDENTIALS_BASIC);
});

app.get('/me', (request, response) => {
    response.send(ME);
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

app.get('/collections/SENTINEL2_L1C', (request, response) => {
    response.send(COLLECTIONS_S2L1C);
});

app.get('/processes', (request, response) => {
    response.send(PROCESSES);
});

app.get('/file_formats', (request, response) => {
    response.send(FILE_FORMATS);
});

app.get('/service_types', (request, response) => {
    response.send(SERVICE_TYPES);
});

app.get('/udf_runtimes', (request, response) => {
    response.send(UDF_RUNTIMES);
});

app.get('/process_graphs', (request, response) => {
    response.send(PROCESS_GRAPHS);
});

app.get('/jobs', (request, response) => {
    response.send(JOBS);
});

app.get('/services', (request, response) => {
    response.send(SERVICES);
});

app.get('/files', (request, response) => {
    response.send(FILES);
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