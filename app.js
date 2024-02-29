const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser'); // FIXME: Keep only if using cookies
const schedule = require('node-schedule'); // FIXME: Keep only if scheduling cronjobs

// Routes
const sampleRouter = require('./routes/sample'); // FIXME: delete sample router

schedule.scheduleJob('0 0 0 0 0', () => console.log('Hello Cron Job!')); // FIXME: delete sample cronjob

const app = express();

app.use(
  cors({
    origin: process.env.CLIENT_URL,
  }),
);

app.use(cookieParser());

app.use(express.json()); // for req.body
app.use('/', sampleRouter); // FIXME: delete sample endpoint

app.listen(process.env.SERVER_PORT, () => {
  console.log(`Server listening on ${process.env.SERVER_PORT}`);
});
