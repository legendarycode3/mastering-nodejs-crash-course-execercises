/**
 * USING THE "HTTP MODULE" , FOR CREATING A SERVER
 */
// import http from 'http';
import { createServer } from 'http';



/** INSTEAD OF HARDCODING  THIS "PORT", , LETS USE THE .env FILE , TO ACCESS THE PORT*/
const PORT = process.env.PORT;


/**
 * TRYING TO CREATE USERS APIs, (JUST HARDCODING IT), BECUS IT WAS SUPPOSE TO COME FROM A DATABASE
 */
const users = [
    {id: 1, name: 'Nathaniel'},
    {id: 2, name: 'Williams'},
    {id: 3, name: 'LegendaryCode'}
];



/**
 * MY "LOGGER"  CUSTOM MIDDLEWARE  
 *  A middleware that will log the "url" & "the method" when ever a request is made.
 * 
 * (NOTE: I CREATED IT ON A SEPARATE FILE called (server3-myCustomMiddleware.js),  JUST DOING IT HERE)
 * 
 * SO FIRST 1st: WE CREATE A FUNCTION
 */

// 1st FUNCTION 
// const  myCustomLogger = (req, res, next) => {
    // console.log(`${req.method} ${req.url}`);
    // next();
// }

// 2nd FUNCTION -- 1st middleware here
function myLogger(req, res, next){
    console.log(`${req.method} ${req.url}`);
    next();
}




/**
 * JSON MIDDLEWARE (A MIDLLEWARE FUNCTION HERE) -2nd MiddleWare here
 */
// const jsonMiddleware = (req, res, next) => {
//     res.setHeader('Content-Type', 'application/json');
//     next();
// }
function jsonMiddleware(req, res, next) {
    res.setHeader('Content-Type', 'application/json');
    next();
}




/**
 * ROUTE HANDLER  FOR "GET" /api/users  (THIS NOT A MIDDLE FUNCTION, IT IS JUST A FUNCTION)
 */
// const getUsersHandler = (req, res) => {
//     res.write(JSON.stringify(users));
//     res.end();
// }
function getUsersHandler(req, res) {
    res.write(JSON.stringify(users));
    res.end();
}




/**
 * ROUTE HANDLER FOR "GET" /api/users/:id   (function)
 */
const getUserByIdHandler = (req, res) => {
    const id = req.url.split('/')[3];
    const user = users.find((user) => user.id === parseInt(id));
    if(user){
        //res.setHeader('Content-Type', 'application/json');
        res.write(JSON.stringify(user));
        res.end();
    }
    else{
        //res.setHeader('Content-Type', 'application/json');
        res.statusCode = 404;
        res.write(JSON.stringify({ message: 'User not found' }));
        //res.end();
    }
    res.end();
}




/**
 * LETS SAY , WE MAKE A "POST" REQUEST, WE CAN ACTUALLY SEND DATA, AND CREATE A NEW USER..
 * SO, LET CREATE A  -  ROUTE HANDLER FOR "POST" REQUEST
 */
// ROUTE HANDLER FOR POST /api/users
const createUserHandler = (req, res) => {
    let body = '';
    // LISTEN TO THE DATA
    req.on('data', (chunk) => {
        body += chunk.toString();
    });
    req.on('end', () => {
        const newUser = JSON.parse(body);
        users.push(newUser);
        res.statusCode = 201;
        res.write(JSON.stringify(newUser));
        res.end();
    });

}




/**
 * ROUTE NOT-FOUND HANDLER (function) 
 */
const notFoundHandler = (req, res) => {
    res.statusCode = 404;
    res.write(JSON.stringify({ message: 'Route not found' }));
    res.end();
}




const server = createServer((req, res) => {
        //1st MiddleWare myCustomLogger-  ()next CALLBACK function below
        myLogger(req, res, () => {
            
            //2nd Middleware - ()next CALLBACK function 
            jsonMiddleware(req, res, () => {
                // ROUTING HERE BELOW
                if(req.url === '/api/users' && req.method === 'GET'){
                    getUsersHandler(req, res);
                }
                // FOR ID CHECKING (below)
                else if(req.url.match(/\/api\/users\/([0-9]+)/) && req.method === 'GET') 
                {
                    getUserByIdHandler(req, res);
                } 
                else if(req.url === '/api/users' && req.method === 'POST')
                {
                    createUserHandler(req,res);
                }
                else 
                {
                    notFoundHandler(req, res);
                }
            });


            // if(req.url === '/api/users' && req.method === 'GET'){
            //     res.setHeader('Content-Type', 'application/json');
            //     res.write(JSON.stringify(users));
            //     res.end();
            // } 
            // else if(req.url.match(/\/api\/users\/([0-9]+)/) && req.method === 'GET'){
                
            //     // res.setHeader('Content-Type', 'application/json');
            //     // res.write(JSON.stringify({ id: 1, name: 'John Doe' }));
            //     // res.end();

            //     const id = req.url.split('/')[3];
            //     const user = users.find((user) => user.id === parseInt(id));

            //     res.setHeader('Content-Type', 'application/json');
            //     if(user){
            //         //res.setHeader('Content-Type', 'application/json');
            //         res.write(JSON.stringify(user));
            //         res.end();
            //     }
            //     else{
            //         //res.setHeader('Content-Type', 'application/json');
            //         res.statusCode = 404;
            //         res.write(JSON.stringify({ message: 'User not found' }));
            //         //res.end();
            //     }
            //     res.end();
            // }

            // else {
                
            //     // res.writeHead(404, { 'Content-Type': 'text/plain' });
            //     // res.end('Not Found, Client Error');
            //     res.setHeader('Content-Type', 'application/json');
            //     res.statusCode = 404;
            //     res.write(JSON.stringify({ message: 'Route not found' }));
            //     res.end();
            // }
        });
        


/**
 * > IN HERE, WE WANT TO CHECK FOR THE "url" AND THE "method"  -- BECUS WE CREATINGAN API , YOU GOONA LISTEN FOR 'POST request'(to add a user). 'GET request'(to get the users). 'PUT request' (to update ).  'DELETE request' (to delete).
 * 
 * > "JSON.stringify()", IS A BUILT-I JAVASCRIPT METHOD USED TO CONVERT A JAVASCRIPT VALUE(typically an object or an array) INTO A JSON(JavaScript Object Notation) STRING. THIS PROCESS IS KNOWN AS SERIALIZATION.
 */
    // if(req.url === '/api/users' && req.method === 'GET'){
    //     res.setHeader('Content-Type', 'application/json');
    //     res.write(JSON.stringify(users));
    //     res.end();
    // } 
    // else if(req.url.match(/\/api\/users\/([0-9]+)/) && req.method === 'GET'){
        
    //     // res.setHeader('Content-Type', 'application/json');
    //     // res.write(JSON.stringify({ id: 1, name: 'John Doe' }));
    //     // res.end();

    //     const id = req.url.split('/')[3];
    //     const user = users.find((user) => user.id === parseInt(id));

    //     res.setHeader('Content-Type', 'application/json');
    //     if(user){
    //         //res.setHeader('Content-Type', 'application/json');
    //         res.write(JSON.stringify(user));
    //         res.end();
    //     }
    //     else{
    //         //res.setHeader('Content-Type', 'application/json');
    //         res.statusCode = 404;
    //         res.write(JSON.stringify({ message: 'User not found' }));
    //         //res.end();
    //     }
    //     res.end();
    // }

    // else {
        
    //     // res.writeHead(404, { 'Content-Type': 'text/plain' });
    //     // res.end('Not Found, Client Error');
    //     res.setHeader('Content-Type', 'application/json');
    //     res.statusCode = 404;
    //     res.write(JSON.stringify({ message: 'Route not found' }));
    //     res.end();
    // }
});

server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});


