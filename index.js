'use strict';

const app = require('./app.js')

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log('App is running on port 3000', port)
});