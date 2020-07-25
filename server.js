var express= require('express')
var app = express()

//Responses with HTML file in the public directory
app.use(express.static(__dirname + '/public'));

//response with username passed as query
app.get('/test',function(req,res){
    var username=req.query.username;
    console.log('Yo I got Hit, '+username);
    res.send('hit, got it '+username);
}) 

//Initializing  the given array as 
let accounts=[
    { id:1, name:'alex',deposit:5},
    { id:2, name:'sarah',deposit:10},
    { id:3, name:'jim',deposit:15}
]

//Display Account details if account id exist in the stored array 
app.get('/accountIdArray',function(req, res)
{  
    var id=req.query.id
    console.log(id)
    //Iterating through array elements
    accounts.forEach(account=>{
        //if passed argument exists in array
        if (account.id==id){
            //Print statement is id exist in array  
            res.send("ID:"+id+" Account Name: "+account.name+" Account Deposit:     "+account.deposit);
            res.end()
                  

        }
        
        

    });
    //Print Statement if account id doesnt exist
    res.send("Account doesn't exist")
    
    
})

//Funtion to add two numbers
var adder=function(num1, num2){
    res=+num1 + +num2
    return res
}

//Display result 
app.get('/sumOf', function(req, res){
    var num1=req.query.num1
    var num2=req.query.num2
    var result=adder(num1, num2)
    res.send('Result is '+result)
})




var port=3000;
app.listen(port)
console.log('Server listening: '+port)
