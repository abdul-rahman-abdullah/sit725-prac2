var express = require('express');
var app = express();


//creating Linked List 
class LinkedList {
    //constructor to define 
    constructor(id, name, deposit) {
        this.id = id
        this.name = name
        this.deposit = deposit
        
        this.next = null
    }
}
//Initializing the first node and adding other nodes
let firstNode = new LinkedList(1, 'alex', 5)
secondNode=firstNode.next = new LinkedList(2, 'sarah', 10)
thirdNode=secondNode.next = new LinkedList(3, 'jim', 15)


app.get('/accountIdLinked', function (req, res) {
    //
    let id = parseInt(req.query.id);
    console.log(id)
    let message = "Account doesn't exist"
    // start from the list head
    let node = firstNode
    // node exist
    while (node!=null) {
        // node id matches
        if (id == node.id) {
            message = "ID:"+id+" Account Name: "+node.name+" Account Deposit:     "+node.deposit
            break
        }
        
        node = node.next
        //Traversing to next nodes
    }
    res.send(message)
})




var port=3000;
app.listen(port)
console.log('Server listening: '+port)

/*
1) Insertion and deletion operations are faster on Linked list when 
   compared to arrays. 
2) Linked list are dynamic in nature and can be easily expanded
*/
