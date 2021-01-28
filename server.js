const express = require('express');
const path = require('path')


const app = express();


app.use(express.static(_dirname +'/dist/list-app'));


app.get('/*', function (req, res) {
  res.sendFile(path.join(_dirname +  'dist/list-app/index.html' )
  );
});


app.listen(process.env.PORT || 8080);


console.log(`Running on port ${process.env.PORT || 8080}`)