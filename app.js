const express = require('serverless-express/express')
const createError = require('http-errors');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const expressValidator = require('express-validator')
const expressSessions = require('express-session');
const bodyParser = require('body-parser')
const cors = require('cors');
//handling the routes of the restAPI
const apiRouter = require('./routes/users')
// this is for configuiring express for serverless program
const app = express()
console.log('looking of app type')
console.log(typeof app)

//connectiing the middleware through cors npm
app.use(cors())
//setting up the cookie parser for cookie manupulation
app.use(cookieParser());

//setting up the logs of the error or the sussesfull messages 
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}))

//calling the router folder to use the routes
app.use(apiRouter)


// creating the errror functio if the error come will not find the routes it throw errs
app.use(function(req, res, next){
    next(createError(404))
})

/*
const PORT = process.env.PORT || 7876

app.use(function(err, req, res, next){
    res.locals.message = err.message
    res.locals.error = req.app.get('env') === 'development' ? err : {}


    res.status(err.status || 500)
}).listen(PORT, console.log('port is working on '+ PORT))
*/
module.exports = app