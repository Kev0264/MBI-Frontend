const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();

app.use(cors());
app.use(express.static(__dirname + '/dist/spa-app'));

app.get('/*', function(req,res) {
  res.sendFile(path.join(__dirname+'/dist/spa-app/index.html'));
});
app.listen(process.env.PORT || 8080);
