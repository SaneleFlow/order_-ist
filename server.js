//Install express server
const express = require('express');
const path = require('path');

const app = express();

// Serve only the static files form the dist directory
// app.use(express.static('./dist'));
app.use(express.static(__dirname+'/dist/list-app'));

// app.use(path.join(__dirname, "/src/index"));




// app.use(express.static(’./dist/<name-on-package.json>’));

// app.get('/*', function(req,res) {
    
// res.sendFile(path.join(__dirname+'/dist/list-app/index.html'));
// });

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname+'/src/index.html')); // load the single view file (angular will handle the page changes on the front-end)
});



// app.get('/*', function(req, res) {
//     res.sendFile('index.html', {root: 'dist/list-app/src/'}
//   );
//   });

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);