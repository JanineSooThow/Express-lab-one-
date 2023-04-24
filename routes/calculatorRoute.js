
var express = require('express')

var router = express.Router()

var calculatorController = require('../controllers/calculatorController') //initiatae the controller

/*
router.get('/add', (req, res) => {
    let number1 = parseInt(req.query.number1)
    let number2 = parseInt(req.query.number2)
    let sum = number1 + number2 

    console.log(sum)
    res.status(200) //200 series means ok (error status in 400 - 500 range) 403 = forbidden, 401 - unauthorised, 500 - server error
    res.json({result:sum})
}) */

/*path
router.get('/subtract/:number1/:number2', (req, res) => {
    let number1 = parseInt(req.params.number1)
    let number2 = parseInt(req.params.number2)
    let result = number1 - number2 */

//BODY
/*
    router.post('/subtract', (req, res) => {
        let number1 = parseInt(req.body.number1)
        let number2 = parseInt(req.body.number2)
        let result = number1 - number2 

router.post('/subtract', (req, res) => {
}) */

/*var calculatorController = require('../controllers/calculatorController')
router.get('/subtract', calculatorController.addNumbers) 
router.get('/add', calculatorController.addNumbers)
*/

router.get('/add', calculatorController.addNumbers)
router.get('/subtract', calculatorController.addNumbers)


module.exports = router
   /* console.log(result)
    res.status(200) // 200 series means ok (error status in 400 - 500 range) 403 = forbidden // 401 = unauthorised // 500 means server error
    res.json({"result":result})
}) */
