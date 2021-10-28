var express = require('express')
const app = express()
const methodOverride = require('method-override')
const swaggerJsDoc = require('swagger-jsdoc')
const swaggerUI = require('swagger-ui-express')

const options = {
    definition: {
      openapi: '3.0.0',
      info: {
        title: 'Library API',
        version: '1.0.0',
      },
    },
    apis: ['messageCtrl.js'], 
  };

const swaggerDoc = swaggerJsDoc(options)
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDoc    ))
app.use(express.urlencoded({extended:false}))
app.use(express.json({}))
app.use(methodOverride('X-HTTP-Method-Override'))

require('./routes')(app)

let server = require('http').createServer(app)

server.listen(3000, function(){
    console.log("Server is listening on port 3000")
})

app.get('/', (req,res)=>{
    res.send("lab3")
})

