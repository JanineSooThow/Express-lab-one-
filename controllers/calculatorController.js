// page 41 - module 5

//const addNumbers = (req, res) => {

    //GRAB VALUES FROM FRONT END QUERY PARAMETERS 
    /*
    let number1=parseInt(req.query.number1);
    let number2=parseInt(req.query.number2);
    let sum=number1+number2

    console.log(sum)

    //RESPOND (res) TO CLIENT
    res.status(200) //200 means ok
    res.json({result:sum})
}
*/

//module 5 pg 51-53

const Calculator = require('../libraries/calculator')

const myCalc = new Calculator()   //myCalc becomes instance of class 

const addNumbers = (req,res) => {

    let number1=parseInt(req.query.num1);
    let number2=parseInt(req.query.num2);
    let sum= myCalc.add(number1,number2)

console.log(sum)

//RESPOND (res) TO CLIENT
res.status(200) //200 means ok
res.json({result:sum})
}
// export the function for the router to access
module.exports = {
    addNumbers
}