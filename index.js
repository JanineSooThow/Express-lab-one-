const express = require('express')
const app = express()
/*const port = 3000 /*1024 -> 65535 - are good port numbers for dev, they are typically used in development, don't need to be an admin user with special privileges. Do not use const port =80*/
const port = 3001
//const testRoute = require('./routes/myTestRoute')


//swagger
const swaggerUi = require('swagger-ui-express');
swaggerDocument = require('./swagger.json');
app.use(
        '/api-docs',
        swaggerUi.serve,
        swaggerUi.setup(swaggerDocument)
);


//require routes here
const calculatorRoute = require('./routes/calculatorRoute')
const aPIDataRoute=require('./routes/APIDataRoute')

//app.use and app.get are both methods used to define routes but serve different purposes
//app.use - path parameter in app.use specifies the URL path or pattern on which t he middleware function should be executed
//app.get - used to define a route that only responds to HTTP GET requests.

//create a route to a static html page. Putting the routers which is '/'
app.use('/', express.static('public')) 
app.use(express.json())
//app.use is the function in express js for incoroporating middleware function. Way to say on the route route, process everything after that with express. static middleware. Express static will work through variety of routes.
//looking in directory which is 'public' for available files 
// '/' defaults to index.html Can't have duplicate endpoints
//eg: if it was 'public/js', it would only look in js folder under public. File names that match route that is being requested



//create a route to a router -calling caluclator route
app.use('/my-test-route', testRoute)   
app.use('/calculator', calculatorRoute)
app.use('/fetch-API-Data',aPIDataRoute) //what u use to put in path ie. 

/*This is an endpoint- you don't want to have duplicates
app.get('/test', (req, res) => {
res.send('Hello World! 123 456')
}) */

/* Code to handle the request and get a response
app.get('/', (req, res) => {
    res.send('Hello World!')
}) */
//start the server
app.listen(port, () => {  
console.log(`Example app listening at http://localhost:${port}`)
})

//app.use('/calculator',calculatorRoute)

/* Monday exercise 3/04/23
app.get('/', (req, res) => {
    res.send('Hello World2!')
    })
    
    app.listen(port2, () => {  
    console.log(`Example app
    listening at
    http://localhost:${port2}`)
    }) */
    
/*create new endpoints with port number - copy and paste. Then do 'npm start' in terminal and should show new port number in terminal. Ctrl and click - 
should show new message */

/*app.get('/', (req, res) => {
res.send('Hello World!')
})

app.listen(port, () => {  
console.log(`Example app
listening at
http://localhost:${port}`)
}) */
