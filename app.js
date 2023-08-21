// Creating express server
require('dotenv').config();

const express = require('express');
const expressLayout = require('express-ejs-layout');

const app = express();
const PORT = 5000 || process.env.PORT;

// Middleware : Templating engine
app.use(expressLayout);
app.set('layout', './layout/main');
app.set('view engine', 'ejs');

app.get('', (req, res) => {
  res.send("Hello word");
});

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
