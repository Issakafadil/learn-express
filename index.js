const express = require('express')
const path = require('path')
const bodyParser =  require('body-parser')

const app = express()

const port = '3000'

app.use(express.static(path.join(__dirname, 'public')))
app.set('view engine', 'ejs')
app.set('views', 'views')

app.get('/', (req, res) =>{
    res.render('index')
   
    
})

app.get('/article/:article_id/users/:user_id', (req, res) =>{
    const id = res.send(req.params)
    console.log(id)
    
})

// var myLogger =  (req, res, next) =>{
//     console.log("logged")
//     next()
// }

// app.use(myLogger)

// app.get('/users', (req, res) =>{
//     res.send("Hello Welcome")
// })

var requestTime = (req, res, next)=>{
    req.requestTime = Date.now()
    next()
}

 app.use(requestTime)
 app.get('/today', (req, res) =>{
    // var responseText = "Hello world"
    var responseText = `Hello World <small> requested at:  ${req.requestTime} </small>`
    res.send(responseText)
   

})

app.listen(port, ()=>console.log(`this server is listening on http://localhost:${port}`))