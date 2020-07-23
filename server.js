var express= require('express')
var app = express()

app.use(express.static(__dirname + '/public'));
app.get('/test',function(req,res){
    var username=req.query.username;
    console.log('Yo, '+username);
    res.send('hit, got it '+username);
}) 

var adder=function(num1, num2){
    res=+num1 + +num2
    return res
}

app.get('/adder', function(req, res){
    var num1=req.query.num1
    var num2=req.query.num2
    var result=adder(num1, num2)
    res.send('Result is '+result)
})

var port=3000;
app.listen(port)
console.log('Server listening: '+port)
