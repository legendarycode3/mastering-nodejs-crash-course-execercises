/**
 * IMPORTING THE "http modules" IN ORDER FOR US TO CREATE A "SERVER"
 */
 import http from 'http';



/**
 * IMPORTING THE fs FILE SYSTEM
 * IMPORTING THE url MODULE
 * GET CURRENT PATH
 */
//IMPORTING THE MODULES
import fs from 'fs/promises';
import url from 'url';
import path from 'path';
import { error } from 'console';





/** INSTEAD OF HARD CODING THIS "PORT" , LETS USE THE .env FILE , TO ACCESS THE PORT  */
const PORT = process.env.PORT;

// const PORT = 5000;



//GETING CURRENT PATH
const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
console.log(__filename, __dirname);



const server = http.createServer(async (req, res) => {
    //res.write('Congratulation, keep going you are successfully learning Nodejs gradually');

    /**
     * MAKING A "HTTP REQUEST"
     */
    // console.log(req.url);
    // console.log(req.method);



    /**
     * CREATING A SERVER THAT WILL CHECK FOR "get Request", WITH try catch
     */
    try {
        // Check if it is a "Get request"
        if(req.method === 'GET'){
            let filePath;
            if (req.url === '/'){
                // res.writeHead(200, { 'Content-Type': 'text/html' });
                // res.end('<h1>Homepage</h1>');
                filePath = path.join(__dirname, 'public', 'index.html');
            }   
            else if(req.url === '/about'){
                // res.writeHead(200, { 'Content-Type': 'text/html' });
                // res.end('<h1>About</h1>');
                filePath = path.join(__dirname, 'public', 'about.html');
            }   
            else {
                // res.writeHead(404, { 'Content-Type': 'text/html' });
                // res.end('<h1>Not Found</h1>');
                throw new Error('Not Found');
            }
            const data = await fs.readFile(filePath);
            res.setHeader('Content-Type', 'text/html');
            res.write(data);
            res.end();


        } else{
            throw new Error('Method not allowed');
        }
    } catch (error) {
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end('Server Error');
    }



    /**
     * SETTING UP A "router" WHEN MAKING A HTTP REQUEST.
     * below
     */
    // if (req.url === '/'){
    //     res.writeHead(200, { 'Content-Type': 'text/html' });
    //     res.end('<h1>Homepage</h1>');
    // }   else if(req.url === '/about'){
    //     res.writeHead(200, { 'Content-Type': 'text/html' });
    //     res.end('<h1>About</h1>');
    // } else {
    //     res.writeHead(404, { 'Content-Type': 'text/html' });
    //     res.end('<h1>Not Found</h1>');
    // }



    // res.setHeader('Content-Type', 'text/html');
    // //res.statusCode = 404;
    // res.end('<h1>Congratulation, keep going you are successfully learning Nodejs gradually</h1>');

    
    // res.writeHead(404, {
    //     'Content-Type': 'application/json'
    // });

    // res.end(JSON.stringify({ message: 'Server Error'}));
});


// const PORT = 5000;
server.listen(PORT, () => {
    console.log(`Server running on PORT ${PORT}`);
});