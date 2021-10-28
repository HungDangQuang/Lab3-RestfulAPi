
const Customer = require('../model/customer')

module.exports = function(app){

    /**
    * @swagger
    * /:
    *   post:
    *     description: insert customer!
    *     responses:
    *       200:
    *         description: Returns 1 or 0 with err
    */
    app.post("/addCustomer", function(req,res){
        var newCustomer = Customer({
            name: req.body.name,
            active: true
        });
        newCustomer.save(function(err){
            if(err){
                res.json({kq:0, errMsg: err});
            }
            else{
                res.json({kq:1});
            }
        });
    });

    /**
    * @swagger
    * /:
    *   get:
    *     description: send message!
    *     responses:
    *       200:
    *         description: Returns 1 with list of customers or 0 with err
    */
    app.get("/getList", function(req,res){
        Customer.find(function(err, data){
            if (err){
                res.json({kq:0, errMSg:err});
            }
            else {
                res.json({kq:1, list:data});
            }
        });
    });

    /**
    * @swagger
    * /:
    *   put:
    *     description: update customer's name!
    *     responses:
    *       200:
    *         description: Returns 1 or 0 with error.
    */
    app.put("/update", function(req,res){
        Customer.updateOne({name: req.body.name},{$set:{name:'Updated Name'}}, function(err){
            if(err){
                res.json({kq:0, errMsg:err});
            }
            else {
                res.json({kq:1});
            }
        });
    });

    /**
    * @swagger
    * /:
    *   delete:
    *     description: delete customer!
    *     responses:
    *       200:
    *         description: Returns result 1 or 0 with error.
    */
    app.delete("/delete", function(req,res){
        Customer.deleteOne({name: req.body.name}, function(err){
            if(err){
                res.json({kq:0, errMsg:err});
            }
            else{
                res.json({kq:1});
            }
        });
    });
}