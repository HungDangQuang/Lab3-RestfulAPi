module.exports = {

    /**
    * @swagger
    * /:
    *   post:
    *     description: send message!
    *     responses:
    *       200:
    *         description: Returns a mysterious string.
    */
    sendMessage: function(req,res){
        let Data = req.body || ''
        let resData = {}
        resData.name = Data.name
        resData.email = Data.email
        resData.subject = Data.subject
        resData.message = Data.message
        let returnData = {}
        returnData.data = resData
        returnData.result = "OK"
        res.status(200)
        res.contentType('json')
        res.json(returnData)
    },

    /**
    * @swagger
    * /:
    *   get:
    *     description: get message!
    *     responses:
    *       200:
    *         description: Returns a mysterious string.
    */
    getMessage: function(req,res){
        let resData = {}
        resData.name = "Hung"
        resData.email = "hung@gmail.com"
        let returnData = {}
        returnData.data = resData
        returnData.result = "OK"
        res.status(200)
        res.contentType('json')
        res.json(returnData)
    },
}