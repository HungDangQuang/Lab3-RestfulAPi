const messageCtrl = require('./messageCtrl')


module.exports = function(app){
    app.post('/v1/message', messageCtrl.sendMessage)
    app.get('/v1/message', messageCtrl.getMessage)
}