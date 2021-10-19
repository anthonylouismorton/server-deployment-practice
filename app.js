'use strict';

const express = require('express');
const app = express();

const talk = require('./routes/talk.js')
const repeat = require('./routes/repeat.js')
const log = require('./middleware/log.js')

app.use(express.json());
app.use(log)

app.post('/talk', talk);
app.get('/repeat', repeat);

module.exports = app;