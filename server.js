const express = require('express'),
      bodyParser = require('body-parser'),
      app = express(),
      path = require('path');

// Middlewares //
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/dist'));

// View Engine
app.set('view engine', 'html');

// Routes // 

// Index
// app.get('/', (req, res, next) => {
//     res.status(200).sendFile(path.join(__dirname+'/dist/index.html'));
// });

// Deployment
const PORT = process.env.PORT || 3001;

const Server = app.listen(PORT, () => {
    console.log(`listening on port: ${PORT}`);
});