const express = require('express');
const cors = require('cors');
// Routes
const sampleRouter = require('./routes/sample'); // FIXME: delete sample router

require('dotenv').config();

const app = express();

const PORT = process.env.PORT || 3001;

app.use(
  cors({
    origin: `${process.env.REACT_APP_HOST}:${process.env.REACT_APP_PORT}`,
  }),
);

app.use(express.json()); // for req.body
app.use('/', sampleRouter); // FIXME: delete sample endpoint

app.listen(SERVER_PORT, () => {
  console.log(`Server listening on ${SERVER_PORT}`);
});
