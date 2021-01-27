//Install express server
const express = require('express');
const path = require('path');

const app = express();

app.use(express.static('/dist/list-app'));


// app.get('/*', function(req,res) {
    
// res.sendFile(path.join(__dirname,'/src/index.html'));
// });



app.get('/*', function(req, res) {
    res.sendFile('index.html', {root: '/dist/list-app/'}
  );
  });

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);