const express = require('express');
const bodyParser = require('body-parser');
const controllers = require('./controllers');
const app = express();
var cors = require('cors')
const port = 4000;

app.use(cors())

app.use(bodyParser.json());

app.get('/', (req, res) => res.send('Hello World!'));

app.use('/collaborators', controllers.collaborators);
app.use('/afd', controllers.afds);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
