let express = require ('express');

let app = new express();

app.get('/',function(req,res){
    res.render('./../app/index.ejs',{});
})
    .use(express.static(__dirname + '/../.tmp'))
    .use(express.static(__dirname + '/../bower_components'))
.listen(7777);