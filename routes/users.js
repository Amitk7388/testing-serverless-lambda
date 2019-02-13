const express = require('serverless-express/express');
const router = express.Router()


//creating the restfull api to check weather its working
router.get('/api/v1/users', function(req, res, next){
    res.send('Hello world! welcome to the Serverless Program')
})


//exporting the router file to use in app.js
module.exports = router

