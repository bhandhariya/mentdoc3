const express = require('express');
const path = require('path');

const app = express();
var CorousalRouter=require('./routes/courousal_router');
// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist/mentdoc3'));

app.get('/*', function(req,res) {
    
res.sendFile(path.join(__dirname+'/dist/mentdoc3/index.html'));
});

app.use('/cor',CorousalRouter)
// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);