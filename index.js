var express = require('express')
const app = express()
const methodOverride = require('method-override')
const swaggerJsDoc = require('swagger-jsdoc')
const swaggerUI = require('swagger-ui-express')
const mongoose = require('mongoose')
require('dotenv').config()
const options = {
    definition: {
      openapi: '3.0.0',
      info: {
        title: 'Library API',
        version: '1.0.0',
      },
    },
    apis: ['./route/routes.js'], 
  };

const swaggerDoc = swaggerJsDoc(options)
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDoc    ))
app.use(express.urlencoded({extended:false}))
app.use(express.json({}))
app.use(methodOverride('X-HTTP-Method-Override'))

require('./route/routes')(app)

let server = require('http').createServer(app)

server.listen(process.env.PORT || 3000, function(){
    console.log("Server is listening on port 3000")
})

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*")
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE')
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
    next();
});

app.use(express.urlencoded({extended:false}))
app.use(express.json({}))

mongoose.connect(process.env.DB_CONN).then(function(){
    console.log("Connected to MongoDB")
}).catch(function(err){
    console.log('Connection failed with err' + err)
})
app.get('/', (req,res)=>{
    res.send("lab3")
})

