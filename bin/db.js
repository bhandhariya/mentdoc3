  
var mongoose = require('mongoose');
var mongoURI = "mongodb://raja:raja1234@ds119018.mlab.com:19018/aadish";


mongoose.Promise = global.Promise;
mongoose.connect(mongoURI,{useNewUrlParser:true,useUnifiedTopology:true})
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log("mongodb connection open");
});
exports.db = db;