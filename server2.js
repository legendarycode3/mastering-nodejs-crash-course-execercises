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





const server = createServer((req, res) => {
/**
 * > IN HERE, WE WANT TO CHECK FOR THE "url" AND THE "method"  -- BECUS WE CREATINGAN API , YOU GOONA LISTEN FOR 'POST request'(to add a user). 'GET request'(to get the users). 'PUT request' (to update ).  'DELETE request' (to delete).
 * 
 * > "JSON.stringify()", IS A BUILT-I JAVASCRIPT METHOD USED TO CONVERT A JAVASCRIPT VALUE(typically an object or an array) INTO A JSON(JavaScript Object Notation) STRING. THIS PROCESS IS KNOWN AS SERIALIZATION.
 */
    if(req.url === '/api/users' && req.method === 'GET'){
        res.setHeader('Content-Type', 'application/json');
        res.write(JSON.stringify(users));
        res.end();
    } 
    else if(req.url.match(/\/api\/users\/([0-9]+)/) && req.method === 'GET'){
        
        // res.setHeader('Content-Type', 'application/json');
        // res.write(JSON.stringify({ id: 1, name: 'John Doe' }));
        // res.end();

        const id = req.url.split('/')[3];
        const user = users.find((user) => user.id === parseInt(id));

        res.setHeader('Content-Type', 'application/json');
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

    else {
        
        // res.writeHead(404, { 'Content-Type': 'text/plain' });
        // res.end('Not Found, Client Error');
        res.setHeader('Content-Type', 'application/json');
        res.statusCode = 404;
        res.write(JSON.stringify({ message: 'Route not found' }));
        res.end();
    }
});

server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});