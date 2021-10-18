const express = require("express");
const cors = require('cors');
const bodyParser = require("body-parser");
const routes = require('./routes/');
const router = express.Router()

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(bodyParser.json());
app.use((_, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  )
  next()
})
app.use(express.static(__dirname + "/build"));

routes(router);
app.use('/api', router);

const port = process.env.PORT || 7070;
app.listen(port, () => console.log(`🚩Listening on port ${port}`));
