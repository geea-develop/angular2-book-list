/**
 * Created by guy on 10/05/17.
 */
var express = require('express');
var app = express();
var port = (process.env.PORT || 5000);

app.use(express.static('dist'));

app.listen(port);

console.log('listening port ' + port);
