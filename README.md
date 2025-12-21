**MASTERING NODE.JS CRASh COURSE**



**Requirement / Prerequisites** </br>
1.JavaScript fundamentals (functions, loops, objects, classes etc) </br>
2. Asynchronous programming - Promise, callbacks, async/await.  </br>
3. HTTP Basics  (Methods, status codes, etc)  </br>
4. How JSON APIs work.  </br>


**Setting Development Environment** <br/>
**Browser** <br/>
There are many browsers out there but most developers prefer to use Google Chrome or FireFox. I usually use Google chrome for development and I recommend it too. Download https://www.google.com/chrome/ Google Chrome if you do not have one.

The browser render your HTML code to a human read website.


**Back-end development:**  Deals with the server, database, and application logic that powers the website or application. Back-end development (the server, database, and application logic), often requiring a blend of creative problem-solving and technical skills to deliver smooth and efficient user experiences. <br/>
The backend interacts with frontend and the database using a backend programming language that could be (Node.js, Python, Ruby, PHP, etc). Look at the following figure to understand the interaction between client. A client send a HTTP request to the backend and the backend return a HTTP response to the client computer(The response could be an HTML page, txt, image, or any other form of data). HTTP(Hypertext Transfer Protocol) is a communication protocol that allow transmitting data between a client and a sever. It is designed for communication between web browsers(client) and web servers.  <br/>


**Code Editor** <br/>

As web developer, you should write code using a text or code editor. Therefore, to write HTML code, CSS, JS, React etc. You need to have a code editor.

I will use Visual studio code and I will use it in this challenge too. I strongly suggest to use Visual Studio Code because it has lots of productivity extensions that makes super productive. Now, let's download https://code.visualstudio.com/Download visual studio code. <br/>


------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
**EVERY LESSONS YOU WILL FIND ON THIS "NODE.JS" COURSE ** (Below) <br/>
------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

➡️ **Course Outline**: <br/>
1.What is Node.js  and how does it work ? <br/>
2. Installation, setup, package.json, npm etc. <br/>
3.Modules import/export (CommonJS & ES Modules). <br/>
4.HTTP Module, reg/res, routing, serving JSON/HTML. <br/>
5.Custom middleware. <br/>
6.Other Core Modules - fs, path, url, events, process, os.’ <br/>
7. Some good Resource Documentations To Help As You Go: <br/>
https://nodejs.org/en/learn/  ,  https://www.w3schools.com/nodejs <br/>



➡️ **What is Node.js ?**  <br/>
a)“Node.js” is an open-source “Javascript runtime”. <br/>
b)“Node.js” Uses the “v8 Javascript engine” that Google chrome uses. Built on C++. <br/>
c)“Node.js” is basically used for deveoping “server-side and networking apps/apis”. <br/>
d)“Node.js” takes Javascript out of the browser . <br/>
e)“Node.js” is fast, scalable and popular in many areas of the industry. <br/>
f)“Node.js” is used by companies like “Netflix, Uber, Linkedin, startups” <br/>





➡️ **HOW NODE.JS  WORKS - LESSON 1**  <br/>

![](images/how-nodejs-works-img1.png)

a)V8 JS Engine: Node.js, is built under the “v8 JS Engine” same engine that powers google chrome & it is written in C++. <br/>

b)Non-Blocking: Node.js is what we call “non-blocking”, which means that , it doesnot wait around for I/o operations. <br/>

c)Single Threaded: Refers to javascript execution model, specifically the event loop. <br/>
Node.js  executes your javascript code within a “single main thread”. This means that, at any given point , only one piece of your javascript code, is likely running. <br/>

d)Event Loop: Node.js uses an event loop , which is a mechanism that allows Node, “to perform non-blocking I/o operations”. <br/>





➡️ **WHAT IS NODE.js USED FOR - LESSON 2** <br/>
✔️ Node.js Is Used For The Following: <br/>
1)APIs:  (like Restful apis, GraphQl apis). <br/>

2)Server-rendered apps: <br/>

3)Real-time applications: like chat, realtime game etc. <br/>

4)Microservices: A small independent services that works together. <br/>

5)Command Line Tools: You could build CLI command line interfaces. <br/>

6)Bots:  (Like building a twitter bot, discord bots). <br/>

7)Web Scraping: Nodejs is good for “web scraping”. <br/>

8)Web Server:   Nodejs provides robust capibilities for building web servers , leveraging its asyncronous, event -driven architecture.  <br/>



✔️ NPM (node package manager): Helps us as well to install 3rd party packages. <br/>

✔️ Repple :- (read, val, print, loop): A “command line” environment to run javascript. You can start that “command promt” by just typing node. It just a nice way to test out code and just experiment the javascript and not have to do it through the file, or browser or anything like that. <br/>
E.g Below on a diagram <br/>
![](images/command-prompt-usage-img2.png)

✔️ When Creating A NodeJs Project:  <br/>
	**NOTE:** When starting a new “nodejs project”. <br/>

The first 1st thing You will need to create 	a  “package.json” file .  <br/>
And we 	can do that by using an “NPM command on VSCode terminal (instead of creating it manuel)”, bellow is the following step : <br/>
 npm init <br/>
![](images/creating-a-nodejs-img3.png)





➡️ **MODULES IMPORT/EXPORT (commonJS & ES MODULES) - LESSON 3** <br/>
 ✔️ CommonJS:  Uses synchronous, dynamic loading with require / module.exports “CommonJS” is the traditional/native Nodejs module system that is widely used, especilly in older projects  and libraries. It file extension it uses are .js or .cjs <br/>

E.g Below is an example for CommonJS module usage <br/>

Utils.js file <br/>
function randomNumberGenerator() { <br/>
    return Math.floor(Math.random() * 200) + 5; <br/>
} <br/>

function celsiusToFahrenheit(celsius) { <br/>
    let f = celsius * 1.8; <br/>
    let total = f + 32; <br/>

    return total; <br/>
    // return (celsius * 1.8) + 32; <br/>
} <br/>

 
/** <br/>
 * "EXPORTING"  MULTIPLY STUFFS
 */ <br/>
module.exports = <br/>
{ <br/>
    randomNumberGenerator, <br/>
    celsiusToFahrenheit <br/>
}; <br/>


index.js file  <br/>
const {randomNumberGenerator, celsiusToFahrenheit} = require('./utils.js'); 

/** <br/>
 * CONSOLE.LOGS 
 */ <br/>
console.log(`RandomNumberGenerator: ${randomNumberGenerator()}`); <br/>

console.log(`Celsius To Fahrenheit: ${celsiusToFahrenheit(20)}`); <br/>



✔️ ES Modules: Uses asynchronous, static loading with import / export syntax. “ES Module” are the modern, standard format, offering better performance and environment compatibility across Node.js and browsers.  They support features like tree-shaking.  <br/>
It file extension it uses is .mjs <br/>

**NOTE:** To Use ESM in Node.js,  you can either: <br/>
✔️ Use the .mjs file extension for your module files. <br/>
✔️ Add “type”:  “module” to your package,json file, which makes all .js files in that project treated as ESM. <br/>

E.g Below is an example for ES module usage <br/>
![](images/ES-module-usage-img4.png)





➡️ **HTTP MODULE, REG/RES, ROUTING, SERVING JSON/HTML - LESSON 4**
 
✔️ Http Module , Creating A Server , Working With Request / Response:

**NOTE:**  import http from “http”;  or  import { createServer } from ‘http’; <br/>
1. This is used in Node.js project to import  built-in HTTP module. <br/>
2. This module provides the core functionality for creating HTTP servers and making HTTP requests within your Node.js application. <br/>
3. You can use the “http module” for creating a http server. <br/>
4. You can also use the “http module” for  making http request (in order to fetch data from an API etc.) <br/>
![](images/http-module-img5.png)  <br/>
![](images/http-module-img6.png)


✔️ Some command line terminal : <br/>
![](images/package-json-img7.png)  
![](images/package-json-img8.png)  <br/>


i. “npm”: NPM stands for Node Package Manager. It is the default package manager for Node.js. It serves several key purposes within the Node.js ecosystem. 
NPM simplifies the process of building and maintaining Node.js applications by providing a robust system for managing external code, handling dependencies, and facilitateing code sharing within the developer community.  <br/> 
https://www.npmjs.com/   <br/>

ii.“npm run dev” terminal command:- It is used in node.js projects, to initiate a development environment.  
The primary purpose of npm  run dev is to provide a streamlined and efficient workflow during active code development.
npm run dev automates the process of running and observing changes in Node.js project or application during development , saving developers from manually restarting servers or refreshing their browser after every code modification.  <br/>

iii.“npm start” terminal command: It used in node.js project, to execute a predefined script named “start” within the project’s package.json file.  <br/>

iv.“npm install nodemon” terminal command: Is used to install the nodemon package as a devlopment utility in a Node.js project.
nodemon is a tool that monitors for changes in your source code files and automatically restarts your Node.js application when those changes are detected.
This is particularly useful during development because it eliminates the need to manually stop and restart your server everytime you make an iteration to your code.  <br/>

v.“npm install -D nodemon”: Here is the breakdown of this commands:  <br/>
npm install :- This is the command to install packages using Node Package Manager(npm).  <br/>

-D  (or --save-dev ) :-This simply specifies that, nodemon should be installed as a development dependency. This means it’s a package required only during the “development phase of your project”  (e.g for testing, building, or running development servers) and not for the “final production deployment”. <br/>

nodemon :- This is the package itself.It is used to setup automatic server restarts during Node.js development, making the development workflow more efficient. <br/>

**NOTE:**  “development dependency” (or devDependency ) refers to a package or library 	that is only needed during the “development phase of a project” and is “not required for 	the application to run in a production environment”.These dependencies typically 	include tools that aid in development, testing , and building, but are not part of the core 	functionality of the deployed application.   <br/>

	**NOTE:**  When someone gets your code from “github”, all they have to do , is to just 	type:  npm install (or npm i ), and it will automatically instal the npm packages needed 	for the application or project. E.g like your nodemon npm folder file.  <br/>



✔️ .gitignore file, allows developers to specify which files and directories should be excluded from version control (Git). This helps keep repositories tidy, preventing sensitive information from being exposed , and ensures that only essential files are tracked.  A diagram below: <br/>
![](images/nodemon-npm-package-img9.png) <br/>

**NOTE:**  Since we are trying to automatically running the server, (without reloading it 	manually ourself ), we will have to remove the circle red diagram writeupand change it 	to the yollow diagram writeup,  diagrams below, after that we can now use the command npm start . <br/>



**NOTE:**  Since we are trying to automatically running the server, (without reloading it 	manually ourself ), we will have to remove the circle red diagram writeupand change it 	to the yollow diagram writeup,  diagrams below, after that we can now use the command npm start . <br/>
![](images/nodemon-npm-package-img10.png) <br/>



✔️ .env File :- The primary reason for using a .env file in a Node.js project is to manage environment variables. Which offers significant advantages for security and flexibility.  <br/>
E.g diagram below: <br/>
![](images/env-usage-img11.png) <br/> <br/>
![](images/env-usage-img12.png) <br/> <br/>
![](images/env-usage-img13.png) <br/> <br/>

✔️ Why we use .env file in Node.js  includes: <br/>
i). Security: We use .env file , to keep sensitive information, such as API keys, database passwords, and secret keys , out of your source code.
By doing this, you prevent accidental exposure of credentials when pushing your code to your version control systems like Git. <br/>
ii). Configuration Management: Environment variables allows you to change the behaviour of your application based on the enviroment in which it’s running (e.g ., development, testing, staging, or production) without changing the underlying codebase. <br/>
iii). Portability:  It makes the application more portable. Different environments can be have different configurations stored in their respective .env  files, which are loaded when the application starts. <br/>

**NOTE :**  The difference between “npm start” and “node start.js (or node index.js)”, is 	that : <br/>
1. npm  start  is a convenience command that relies on your package.json configuration to 	execute a specific script, offering flexibility for defining complex startup procedures and environment settings. <br/>
2. node start.js (or node index.js) (or node app.js): Is a direct execution command that runs a specific javascript file with the Node.js runtime , without involving  package.json scripts. <br/>



✔️ PostMan VsCode Extension : We can make a “Http Request” using postman in VSc.  <br/>
**NOTE :**  The PostMan VsCode Extension: Streamline API development and testing with the power of Postman. You can install it on VSCode. 
With “Postman Vs Code” extension, you can develop and test your APIs right from the VSCode. (Make sure to install the extension first).  <br/>
PostMan is used to build, test & manage APIs. It allows developers to design, test, and document APIs without writing code, send API requests to check 		     functionalityand retrieve  data, and automate testing  through collections and scripts.  <br/>
![](images/postman-vscode-extension-usage-img14.png) <br/>
![](images/postman-vscode-extension-usage-img15.png) <br/>


✔️ Creating A Server That Will Check For “get Request” :- These diagramatic image , indicates and shows you if the Request is not “GET Request” , it will show Serverside Error (500).  Tested it with “PostMan VSC extension ()” which PostMan is used to build, test & manage APIs.  <br/>
E.g below  <br/>
![](images/creating-a-server-to-check-for-get-request-img16.png)
![](images/creating-a-server-to-check-for-get-request-img17.png) <br/>
![](images/creating-a-server-to-check-for-get-request-img18.png) <br/>

/**
     * CREATING A SERVER THAT WILL CHECK FOR "get Request", WITH try catch
 */ <br/>
try { <br/>
	// Check if it is a "Get request" <br/>
	if(req.method === 'GET'){ <br/>
		
		if (req.url === '/'){ <br/>
			res.writeHead(200, { 'Content-Type': 'text/html' }); <br/>
			res.end('<h1>Homepage</h1>'); <br/>
		}    <br/>
		else if(req.url === '/about'){ <br/>
			res.writeHead(200, { 'Content-Type': 'text/html' }); <br/>
			res.end('<h1>About</h1>'); <br/>
		} <br/>
		else { <br/>
			res.writeHead(404, { 'Content-Type': 'text/html' }); <br/>
			res.end('<h1>Not Found</h1>'); <br/>
		} <br/>

	} else{ <br/>
		throw new Error('Method not allowed'); <br/>
	} <br/>
} catch (error) { <br/>
	res.writeHead(500, { 'Content-Type': 'text/plain' }); <br/>
	res.end('Server Error'); <br/>
} <br/>



✔️  Loading Files, Using The FS (File System Module)” :- fs, is th name of the built-in Node.js  module that provides functionalities for interacting with the file system. 
 Here I will be using it to load an html file. <br/>
1. So we start by creating a folder on VSCode project file e.g called “public”. <br/>
2. Also, we will then create 2 files inside the folder , e.g called “index.html” & “about.html”. <br/>
3. Also , make sure to import the fs file system e.g on the “server.js file”. <br/>

E.g Diagramatic examples below <br/>
![](images/loading-files-using-the-file-system-module-img19.png) <br/>
![](images/loading-files-using-the-file-system-module-img20.png) <br/>
![](images/loading-files-using-the-file-system-module-img21.png) <br/>
![](images/loading-files-using-the-file-system-module-img22.png) <br/>


/**  <br/> 
 * IMPORTING THE fs FILE SYSTEM
 * IMPORTING THE url MODULE
 * GET CURRENT PATH
 */  <br/>
//IMPORTING THE MODULES <br/>
import fs from 'fs/promises'; <br/>
import url from 'url'; <br/>
import path from 'path'; <br/>
import { error } from 'console'; <br/>

//GETING CURRENT PATH <br/>
const __filename = url.fileURLToPath(import.meta.url); <br/>
const __dirname = path.dirname(__filename); <br/>
console.log(__filename, __dirname); <br/>


const server = http.createServer(async (req, res) => { <br/>
    //res.write('Congratulation, keep going you are successfully learning Nodejs gradually'); <br/>

    /** <br/>
     * MAKING A "HTTP REQUEST" <br/>
     */ <br/>
    // console.log(req.url); <br/>
    // console.log(req.method); <br/>


    /** <br/>
     * CREATING A SERVER THAT WILL CHECK FOR "get Request", WITH try catch
     */ <br/>
    try { <br/> <br/>
        // Check if it is a "Get request" <br/>
        if(req.method === 'GET'){ <br/>
            let filePath; <br/>
            if (req.url === '/'){ <br/>
                // res.writeHead(200, { 'Content-Type': 'text/html' }); <br/>
                // res.end('<h1>Homepage</h1>'); <br/>
                filePath = path.join(__dirname, 'public', 'index.html'); <br/>
            }   <br/>
            else if(req.url === '/about'){ <br/>
                // res.writeHead(200, { 'Content-Type': 'text/html' }); <br/>
                // res.end('<h1>About</h1>');  <br/>
                filePath = path.join(__dirname, 'public', 'about.html'); <br/>
            }  <br/>
            else { <br/>
                // res.writeHead(404, { 'Content-Type': 'text/html' }); <br/>
                // res.end('<h1>Not Found</h1>'); <br/>
                throw new Error('Not Found'); <br/>
            } <br/>
            const data = await fs.readFile(filePath); <br/>
            res.setHeader('Content-Type', 'text/html'); <br/>
            res.write(data); <br/>
            res.end(); <br/>

        } else{ <br/>
            throw new Error('Method not allowed'); <br/>
        } <br/>
    } catch (error) { <br/>
        res.writeHead(500, { 'Content-Type': 'text/plain' }); <br/>
        res.end('Server Error'); <br/>
    } <br/>



✔️ Lets Say We Want To Check For The “url” & “method” (RestAPI) :- <br/>   
	E.g Diagramatic examples below  <br/>
![](images/checking-for-url-method-img23.png) <br/>
![](images/checking-for-url-method-img24.png) <br/>
![](images/checking-for-url-method-img25.png) <br/>
![](images/checking-for-url-method-img26.png) <br/>


/** <br/>
 * USING THE "HTTP MODULE" , FOR CREATING A SERVER
 */ <br/>
// import http from 'http'; <br/>
import { createServer } from 'http'; <br/>


/** INSTEAD OF HARDCODING  THIS "PORT", , LETS USE THE .env FILE , TO ACCESS THE PORT*/ <br/>
const PORT = process.env.PORT; <br/>

/** <br/>
 * TRYING TO CREATE USERS APIs, (JUST HARDCODING IT), BECUS IT WAS SUPPOSE TO COME FROM A DATABASE <br/>
 */ <br/>
const users = [
    {id: 1, name: 'Nathaniel'},
    {id: 2, name: 'Williams'},
    {id: 3, name: 'LegendaryCode'}
]; <br/>



const server = createServer((req, res) => { <br/>
/** <br/>
* > IN HERE, WE WANT TO CHECK FOR THE "url" AND THE "method"  -- BECUS WE CREATINGAN API , YOU GOONA LISTEN FOR 'POST request'(to add a user). 'GET request'(to get the users). 'PUT request' (to update ).  'DELETE request' (to delete). <br/>
* <br/>
* > "JSON.stringify()", IS A BUILT-I JAVASCRIPT METHOD USED TO CONVERT A JAVASCRIPT VALUE(typically an object or an array) INTO A JSON(JavaScript Object Notation) STRING. THIS PROCESS IS KNOWN AS SERIALIZATION. <br/>
*/
if(req.url === '/api/users' && req.method === 'GET'){ <br/>
	res.setHeader('Content-Type', 'application/json'); <br/>
	res.write(JSON.stringify(users)); <br/>
	res.end(); <br/> 
}  <br/>
		else if(req.url.match(/\/api\/users\/([0-9]+)/) && req.method === 'GET') <br/>
{
				// res.setHeader('Content-Type', 'application/json'); <br/>
				// res.write(JSON.stringify({ id: 1, name: 'John Doe' })); <br/>
				// res.end(); <br/>

			const id = req.url.split('/')[3]; <br/>
				const user = users.find((user) => user.id === parseInt(id)); <br/>
				if(user){ <br/>
					res.setHeader('Content-Type', 'application/json'); <br/>
					res.write(JSON.stringify(user)); <br/>
					res.end(); <br/>
				} <br/>
				else{ <br/>
					res.setHeader('Content-Type', 'application/json'); <br/>
					res.statusCode = 404; <br/>
					res.write(JSON.stringify({ message: 'User not found' })); <br/>
					res.end(); <br/>
				} <br/>
		   } <br/>

else { <br/>
	// res.writeHead(404, { 'Content-Type': 'text/plain' }); <br/>
	// res.end('Not Found, Client Error'); <br/>
res.setHeader('Content-Type', 'application/json'); <br/>
	res.statusCode = 404; <br/>
	res.write(JSON.stringify({ message: 'Route not found' })); <br/>
	res.end(); <br/>
} <br/>
}); <br/>

server.listen(PORT, () => { <br/>
console.log(`Server running on port ${PORT}`);
});


**NOTE :**  In Node.js , req.url.match(/\/api\/users\/([0-9]+)/) , is a javascript 	expression used in an HTTP server’s request handler to check if an incoming 	request URL matches a specific pattern and extract a numeric user ID from it.  <br/>
Here is the beakdown of it’s components: <br/>
req.url <br/>
✔️ req  is the request object, automatically created by Node.js for every incoming  HTTP request. <br/>
✔️ req.url is a property that contains the URL path requested by the client (e.g,  /api/users/456,  /products?id=1, etc.) <br/>

.match(…)  <br/>
✔️ This is the standard Javascript “string” method, that attemps to match the req.url string against the provided reqular expression. It returns an array of matches if successful, or null if no match is found.  <br/>

/\/api\/users\/([0-9]+)/   This is a  reqular expression (regex) used for pattern 	matching.  <br/>
✔️ /.../ : Delimeters indicating the start and end of  the regular expression.  <br/>
✔️ /api\/users\/ :
✔️ ( ... ) : This defines a capturing group. Th e context that matches the pattern inside these parentheses will be captured and returned as a separate item in the resulting  array.  <br/>
✔️ [0-9]+ : This character set matches one or more digits (0 through 9). In the context of the  capturing group, it is  designed to capture the dynamic user ID.  <br/>



**NOTE :**  The code  const id = req.url.split('/'); is a common code in Node.js when 	building  a web server to extract specific parts of a URL, typically an ID or 	parameter from te path.  <br/>
Here is a breakdown of what each part means :  <br/>
req.url  <br/>
req  stands for request. It is an object that represents the incoming request from the  client (e.g.,  a web browser) to your Node.js server.  <br/>
✔️ .url  is a property of the request object that contains the URL path requested by the client , relative to the server’s root . It typically looks something like /user /567 or  /products/details/shoes .   <br/>

✔️ .split(‘/’)  <br/>
✔️ .split() is a standard Javascript “string” method that divides a string into an array of substrings based on a specified separator.  <br/>
✔️ The separator used here is ‘/’ , which means the method will break the URL string everywhere a forward slash  appears .  <br/>

const id  = …   <br/>
✔️ This declares  constant variable  named id to store the result of the operation.  <br/>




**NOTE :**  The line of code const user = users.find((user) => user.id === 	parseInt(id));  <br/>
In essence, this line code searches through a collection of users to find a specific 	user whose id property matches a given id value, after converting that given id 	to an integer. <br/>
In Node.js, or any javascript environment,  performs the following actions: <br/>
✔️ users.find(…) : This part assumes there is an array or similar iterable collection named users. <br/>
The .find() method is a built-in javascript array method that iterates 	over the elements of an array and returns the first elements that 	satisfies the provided testing function. If no element satisfies the testing 	function , undefined is returned. <br/>

✔️ ((users) => user.id === parseInt(id)  :This is an arrow function , that serves as the testing function for find() . For each user object within the users collection, this function will be executed. <br/>
✔️ user.id :This accesses the id property of the current user object being evaluated in the iteraction. <br/>
✔️ parseInt(id) : This converts the id variable (which is likely a string, for e.g, from a URL parameter in an Express.js route ) into an integer. This is crucial for ensuring a correct comparison if user.id is a number. <br/>
✔️ === : This is the strict equality operator , which checks if both the value and the type of user.id and parseInt(id) are the same. <br/>
✔️ const user = … : The result of the users.find() operation (either the found user object or undefined ) is assigned to a new constant variable named user. 





➡️  **CUSTOM MIDDLEWARE , HTTP METHODS, REQ/RES, ROUTING , SERVING JSON/HTML-  LESSON 5**

✔️ Custom MiddleWare:  This is a broader category  encompassing any middleware that you, the developer , write specifically for your application’s needs.  It “custom”  becus it’s not a built-in or third -party middleware, but one tailored to your application logic. <br/>

✔️ Logging MiddleWare:  This is a specific type of custom middleware(function). It’s purpose is to, intercepts incoming HTTP requests and outgoing responses to “record information” about them. This information is valuable for debuging , monitoring application performance, understanding user behavior & security auditing . <br/>
![](images/logging-middleware-usage-img27.png) <br/>

In Node.js, are basically functions or modules  , that have access to the request object (req) & the response object (res), [becus they sit in the middle of incoming requests & outgoing responses, which they can perform basically any code & you can also make changes to the request & response objects]. <br/>
And  the next() function in the application’s request-response cycle. These functions allow developers to execute code , modify request & response objects , and perform various tasks before or after route handlers.  <br/>

E.g Diagramatic / pictorial usage & codes on how middleware works (below)  <br/>
![](images/how-middleware-works-img28.png) <br/>
![](images/how-middleware-works-img29.png) <br/>
![](images/how-middleware-works-img30.png) <br/>
![](images/how-middleware-works-img31.png) <br/>
![](images/how-middleware-works-img32.png) <br/>
![](images/how-middleware-works-img33.png) <br/>
![](images/how-middleware-works-img34.png) <br/>
![](images/how-middleware-works-img35.png) <br/>
![](images/how-middleware-works-img36.png) <br/>


Server3-myCustomMiddleware File <br/>

/**
 * USING THE "HTTP MODULE" , FOR CREATING A SERVER <br/>
 */ <br/>
// import http from 'http'; <br/>
import { createServer } from 'http'; <br/>


/** INSTEAD OF HARDCODING  THIS "PORT", , LETS USE THE .env FILE , TO ACCESS THE PORT*/ <br/>
const PORT = process.env.PORT; <br/>

/** <br/>
 * TRYING TO CREATE USERS APIs, (JUST HARDCODING IT), BECUS IT WAS SUPPOSE TO COME FROM A DATABASE <br/>
 */ <br/>
const users = [ 
    {id: 1, name: 'Nathaniel'},
    {id: 2, name: 'Williams'},
    {id: 3, name: 'LegendaryCode'}
]; <br/>


/**
 * MY "LOGGER"  CUSTOM MIDDLEWARE   <br/>
 *  A middleware that will log the "url" & "the method" when ever a request is made. <br/>
 *  <br/>
 * (NOTE: I CREATED IT ON A SEPARATE FILE called (server3-myCustomMiddleware.js),  JUST DOING IT HERE) <br/>
 *  <br/> 
 * SO FIRST 1st: WE CREATE A FUNCTION <br/>
 */ <br/>

// 1st FUNCTION  <br/>
// const  myCustomLogger = (req, res, next) => { <br/>
    // console.log(`${req.method} ${req.url}`); <br/>
    // next(); <br/>
// } <br/>

// 2nd FUNCTION <br/>
function myCustomLogger(req, res, next){ <br/>
    console.log(`${req.method} ${req.url}`); <br/>
    next(); <br/>
} <br/>


// JSON  middleware  <br/> <br/>
// const jsonMiddleware = (req, res, next) => { <br/>
//     res.setHeader('Content-Type', 'application/json'); <br/>
//     next(); <br/>
// } <br/>
function jsonMiddleware(req, res, next) { <br/>
    res.setHeader('Content-Type', 'application/json'); <br/>
    next(); <br/>
} <br/>



const server = createServer((req, res) => { <br/>
        // function myCustomLogger(req, res) { <br/>
            
        // } <br/>
        myCustomLogger(req, res, () => { <br/>
            if(req.url === '/api/users' && req.method === 'GET'){ <br/>
                res.setHeader('Content-Type', 'application/json'); <br/>
                res.write(JSON.stringify(users)); <br/>
                res.end(); <br/>
            }  <br/>
            else if(req.url.match(/\/api\/users\/([0-9]+)/) && req.method === 'GET'){ <br/>
                
                // res.setHeader('Content-Type', 'application/json'); <br/>
                // res.write(JSON.stringify({ id: 1, name: 'John Doe' })); <br/>
                // res.end(); <br/>

                const id = req.url.split('/')[3];
                const user = users.find((user) => user.id === parseInt(id)); <br/>

                res.setHeader('Content-Type', 'application/json'); <br/>
                if(user){ <br/>
                    //res.setHeader('Content-Type', 'application/json'); <br/>
                    res.write(JSON.stringify(user)); <br/>
                    res.end(); <br/>
                } <br/>
                else{ <br/>
                    //res.setHeader('Content-Type', 'application/json');
                    res.statusCode = 404; <br/>
                    res.write(JSON.stringify({ message: 'User not found' }));
                    //res.end();
                } <br/>
                res.end(); <br/>
            } <br/>

            else { <br/>
                
                // res.writeHead(404, { 'Content-Type': 'text/plain' }); <br/>
                // res.end('Not Found, Client Error'); <br/>
                res.setHeader('Content-Type', 'application/json'); <br/>
                res.statusCode = 404; <br/>
                res.write(JSON.stringify({ message: 'Route not found' })); <br/>
                res.end(); <br/>
            } <br/>
        }); <br/>
        

/** <br/>
 * > IN HERE, WE WANT TO CHECK FOR THE "url" AND THE "method"  -- BECUS WE CREATINGAN API , YOU GOONA LISTEN FOR 'POST request'(to add a user). 'GET request'(to get the users). 'PUT request' (to update ).  'DELETE request' (to delete). <br/>
 *  <br/>
 * > "JSON.stringify()", IS A BUILT-I JAVASCRIPT METHOD USED TO CONVERT A JAVASCRIPT VALUE(typically an object or an array) INTO A JSON(JavaScript Object Notation) STRING. THIS PROCESS IS KNOWN AS SERIALIZATION. <br/>
 */ <br/> 
    // if(req.url === '/api/users' && req.method === 'GET'){ <br/>
    //     res.setHeader('Content-Type', 'application/json'); <br/>
    //     res.write(JSON.stringify(users)); <br/>
    //     res.end(); 
    // } 
    // else if(req.url.match(/\/api\/users\/([0-9]+)/) && req.method === 'GET'){ <br/>
        
    //     // res.setHeader('Content-Type', 'application/json'); <br/>
    //     // res.write(JSON.stringify({ id: 1, name: 'John Doe' })); <br/>
    //     // res.end();

    //     const id = req.url.split('/')[3];  <br/>
    //     const user = users.find((user) => user.id === pa rseInt(id)); <br/>

    //     res.setHeader('Content-Type', 'application/json'); <br/>
    //     if(user){ <br/>
    //         //res.setHeader('Content-Type', 'application/json'); <br/>
    //         res.write(JSON.stringify(user)); <br/>
    //         res.end(); <br/>
    //     } <br/>
    //     else{ <br/>
    //         //res.setHeader('Content-Type', 'application/json'); <br/>
    //         res.statusCode = 404; <br/>
    //         res.write(JSON.stringify({ message: 'User not found' })); <br/>
    //         //res.end(); <br/>
    //     } <br/>
    //     res.end(); <br/>
    // }

    // else {
        
    //     // res.writeHead(404, { 'Content-Type': 'text/plain' });
    //     // res.end('Not Found, Client Error');
    //     res.setHeader('Content-Type', 'application/json');
    //     res.statusCode = 404; <br/>
    //     res.write(JSON.stringify({ message: 'Route not found' }));
    //     res.end(); <br/>
    // } <br/>
});

server.listen(PORT, () => { <br/>
    console.log(`Server running on port ${PORT}`); <br/>
}); <br/>




**OR (this code below, all works the same thing , but different simplified patterns)**  <br/>

/**  <br/>
 * USING THE "HTTP MODULE" , FOR CREATING A SERVER  
 */  <br/>
// import http from 'http';  <br/>
import { createServer } from 'http';  <br/>


/** INSTEAD OF HARDCODING  THIS "PORT", , LETS USE THE .env FILE , TO ACCESS THE PORT*/  <br/>
const PORT = process.env.PORT;  <br/>
/**  <br/>
 * TRYING TO CREATE USERS APIs, (JUST HARDCODING IT), BECUS IT WAS SUPPOSE TO COME FROM A DATABASE
 */  <br/>
const users = [
    {id: 1, name: 'Nathaniel'},
    {id: 2, name: 'Williams'},
    {id: 3, name: 'LegendaryCode'}
];


/**  <br/>
 * MY "LOGGER"  CUSTOM MIDDLEWARE  
 *  A middleware that will log the "url" & "the method" when ever a request is made.
 * 
 * (NOTE: I CREATED IT ON A SEPARATE FILE called (server3-myCustomMiddleware.js),  JUST DOING IT HERE)
 * 
 * SO FIRST 1st: WE CREATE A FUNCTION
 */  <br/>

// 1st FUNCTION   <br/>
// const  myCustomLogger = (req, res, next) => {  <br/>
    // console.log(`${req.method} ${req.url}`);  <br/>
    // next();  <br/>
// }  <br/> 

// 2nd FUNCTION -- 1st middleware here  <br/>
function myLogger(req, res, next){  <br/>
    console.log(`${req.method} ${req.url}`);  <br/>
    next();  <br/>
}  <br/>

/**
 * JSON MIDDLEWARE (A MIDLLEWARE FUNCTION HERE) -2nd MiddleWare here
 */  <br/>
// const jsonMiddleware = (req, res, next) => {  <br/>
//     res.setHeader('Content-Type', 'application/json'); <br/>
//     next();  <br/>
// }  <br/>
function jsonMiddleware(req, res, next) {  <br/>
    res.setHeader('Content-Type', 'application/json');  <br/>
    next();  <br/>
}  <br/>

/**
 * ROUTE HANDLER  FOR "GET" /api/users  (THIS NOT A MIDDLE FUNCTION, IT IS JUST A FUNCTION)
 */  <br/>
// const getUsersHandler = (req, res) => {  <br/>
//     res.write(JSON.stringify(users)); <br/>
//     res.end();  <br/>
// }  <br/>
function getUsersHandler(req, res) {  <br/>
    res.write(JSON.stringify(users));  <br/>
    res.end();  <br/>
}  <br/>

/**
 * ROUTE HANDLER FOR "GET" /api/users/:id   (function)
 */
const getUserByIdHandler = (req, res) => {  <br/>
    const id = req.url.split('/')[3];  <br/>
    const user = users.find((user) => user.id === parseInt(id));  <br/>
    if(user){  <br/>
        //res.setHeader('Content-Type', 'application/json');  <br/>
        res.write(JSON.stringify(user));  <br/>
        res.end();  <br/>
    }  <br/>
    else{  <br/>
        //res.setHeader('Content-Type', 'application/json');  <br/>
        res.statusCode = 404;  <br/>
        res.write(JSON.stringify({ message: 'User not found' }));  <br/>
        //res.end();  <br/>
    }  <br/>
    res.end();  <br/>
}

/**
 * LETS SAY , WE MAKE A "POST" REQUEST, WE CAN ACTUALLY SEND DATA, AND CREATE A NEW USER..
 * SO, LET CREATE A  -  ROUTE HANDLER FOR "POST" REQUEST 
 */  <br/>
// ROUTE HANDLER FOR POST /api/users  <br/>
const createUserHandler = (req, res) => {  <br/>
    let body = '';  <br/>
    // LISTEN TO THE DATA
    req.on('data', (chunk) => {  <br/>
        body += chunk.toString();  <br/>
    });  <br/>
    req.on('end', () => {  <br/>
        const newUser = JSON.parse(body); <br/>
        users.push(newUser); <br/>
        res.statusCode = 201; <br/>
        res.write(JSON.stringify(newUser)); <br/>
        res.end(); <br/>
    });

}

/**
 * ROUTE NOT-FOUND HANDLER (function)  <br/>
 */
const notFoundHandler = (req, res) => { <br/>
    res.statusCode = 404; <br/>
    res.write(JSON.stringify({ message: 'Route not found' })); <br/>
    res.end(); <br/>
} 



const server = createServer((req, res) => { <br/>
        //1st MiddleWare myCustomLogger-  ()next CALLBACK function below <br/>
        myLogger(req, res, () => { <br/>
            
            //2nd Middleware - ()next CALLBACK function  <br/>
            jsonMiddleware(req, res, () => { <br/>
                // ROUTING HERE BELOW <br/>
                if(req.url === '/api/users' && req.method === 'GET'){ <br/>
                    getUsersHandler(req, res); <br/>
                }
                // FOR ID CHECKING (below) <br/>
                else if(req.url.match(/\/api\/users\/([0-9]+)/) && req.method === 'GET') <br/>
                { <br/>
                    getUserByIdHandler(req, res); <br/>
                }  <br/>
                else if(req.url === '/api/users' && req.method === 'POST') <br/>
                { <br/>
                    createUserHandler(req,res); <br/>
                } <br/>
                else  <br/>
                { <br/> 
                    notFoundHandler(req, res); <br/>
                }  <br/>
            }); <br/>

}); <br/>

server.listen(PORT, () => { <br/>
    console.log(`Server running on port ${PORT}`); <br/>
}); <br/>





➡️ **OTHER CORE MODULES:  FS, PATH, URL, EVENTS, PROCESS, OS,  ETC  -  LESSON  6** <br/>

✔️ **File System Modules** :- Some of the File System Modules includes: <br/>
![](images/reading-files-with-file-sys-module-img37.png) <br/>

✔️ Reading Files With Node.js - (with File System Module) :  There are 3 way to  read a file in Node.js  <br/>
We have 3 ways this can be possible : <br/>
1) fs.readFile() : Is one of the simplest way to read a file path, encoding and a callback function that will be called with the file data (and the error). <br/>

E.g  using a callback version <br/>
import fs from 'fs'; <br/>

// readFile() -  CALLBACK (Callback Version) <br/>
fs.readFile('./textFsDemo.txt', 'utf8', (err, data) => { <br/>
    // if(err) throw err; <br/>
    // console.log(data); <br/>
    if(err) { <br/>
        console.error(err); <br/>
        return; <br/>
    }else{ <br/>
        console.log(data); <br/>
    } <br/>
    
}); <br/>

2) fs.readFileSync() : For simple scripts, you can use  synchronous methods , but  avoid them in  "production servers" as they can block the event loop. <br/>
E.g  using a Synchronous version <br/>
/** <br/>
 * READINg FILES  "SYNCHRONOUSLY" 
 * FOR simple scripts, you can use  synchronous methods , but  avoid them in  "production servers" as they can block the event loop. <br/>
 */ <br/>

import fs from 'fs'; <br/>
// const data = fs.readFileSync('./textFsDemo.txt', 'utf8'); <br/>
// console.log(data); <br/> 
try { <br/>
    const data = fs.readFileSync('./textFsDemo.txt', 'utf8'); <br/>
    console.log(data); <br/>
} catch (err) { <br/>
    console.error(err); <br/>
} <br/>


3) fsPromises.readFile() : Is the more modern approach to read files.  <br/>
	E.g  using a Promises version  <br/>

/**  <br/>
 * READINg FILES  WITH "PROMISES" (MODERN APPROACH)  <br/>
 */  <br/>

//ASYCHRONOUS NAMED FUNCTION  <br/>
// async function readFile() {  <br/>
//     try {  <br/>
//         const data =  await fs.readFile('./textFsDemo.txt', 'utf8');  <br/>
//          console.log(`File Content ${data}`);  <br/>
//         // console.log('File content:', data);  <br/>
//     }   <br/>
//     catch (err) {  <br/>
//          console.log(`Error Reading File: ${err}`);  <br/>
//         // console.log('Error reading file:', err);  <br/>
//     }  <br/>
// }  <br/>
// readFile();  <br/>

// ASYNCHRONOUS ARROW FUNCTION  <br/>
const readFile = async () => {  <br/>
    try {  <br/>
        const data =  await fs.readFile('./textFsDemo.txt', 'utf8'); <br/>
         console.log(`File Content ${data}`);  <br/>
        // console.log('File content:', data); <br/>
    }   <br/>
    catch (err) {  <br/>
         console.log(`Error Reading File: ${err}`);  <br/>
        // console.log('Error reading file:', err);  <br/>
    }  <br/>
};  <br/>
 
readFile();  <br/>



✔️ Some Common UseCases Of  “File System Module” Include: <br/>

✔️ File Operations: <br/>
a) Read & write files. <br/>
b) Create & delete files. <br/>
c) Append files  <br/>
d) Rename & move files.Change file permissions. <br/>

✔️ Directory Operations: <br/>
a) Create & remove directories. <br/>
b) List directory contents. <br/>
c) Watch for file changes. <br/>
d) Get file/directory stats. <br/>
e) Check file existence. <br/>

✔️ Advanced Features:
a) File streams. <br/>
b) File descriptors. <br/>
c) Symbolic links. <br/>
d) File watching. <br/>
e) Working with file  permisions. <br/>



✔️ Writing Files With Node.js Using  - (with File System Module) : There are also  3 way to  “Write file” in Node.js : <br/>
	
We have 3 ways this can be possible : <br/>
1.fs.writeFile() : This is the callback version of wrtiting  file. <br/>
E.g  using a callback version (to writeFile) <br/>

import fs from 'fs'; <br/>
// writeFile() -  CALLBACK (Callback Version) <br/>
const myContent = 'Iam writing my name Williams, to this file location'; <br/>
fs.writeFile('./textFsDemo.txt', myContent, (err, data) => { <br/>
    if(err){ <br/>
        console.error(`Error Writing The File: ${err}`); <br/>
        return; <br/>
    } <br/> <br/>
    else{ <br/>
        console.log(`File successfully written: ${myContent}`); <br/>
    } <br/>
}) <br/>

2.fs.writeFileSync() : This is the Synchronous version of wrtiting file. <br/>
E.g  using a Synchronous Version (to writeFile) <br/>

// writeFile() -  SYNCHROUNOUS (synchronous Version) <br/>
// const myContent = 'Iam writing my name Williams, to this file location'; <br/>
//const myContent = 'This is a file am writing to with my name LegendaryCode, written'; <br/>
import fs from 'fs'; <br/>
  

try {
    const data = fs.writeFileSync('./text-fsDemo.txt', 'My file am writting to'); <br/>
    console.log(`File Written succesful ${data}`); <br/>
} catch (err) { <br/>
    console.error(`Error Writing This Syncronous File: ${err}`);
    
} <br/>


3.fs.Promises.writeFile() : This is the Promises based version of wrtiting file. <br/>
E.g  using a Promises version (to writeFile) <br/>
// ASYNCHRONOUS ARROW FUNCTION  <br/>
const writeFiles = async () => { <br/>
    try {
        // const myContent = 'This is just my content for wrting into the text file'; <br/>

        await fs.writeFile('./text-fsDemo.txt', 'Hi, iam writing to this file'); <br/>
        //  console.log(`File Content ${data}`); <br/>
        // console.log('File content:', data); <br/>
        console.log('file wrtitten to: '); <br/>
    }  <br/>
    catch (err) { <br/>
         console.log(`Error Reading File: ${err}`); <br/>
        // console.log('Error reading file:', err); <br/>
    } <br/>
}; <br/>

writeFiles(); <br/>



✔️ **Path Modules :-** 
Getting information out of a path. Given a path, you can extract information out of  it using  these methods below: <br/>
a)dirname:  gets the parent folder of a file.  E.g  <br/>
b)basename: gets the filename path. E.g   pathDemo.txt <br/>
c)extname:  gets the file extension.  E.g  .txt <br/>
	
Eg using the dirname, basename, extname: <br/>
import path from 'path'; <br/>

const notesPath = './user/legendarycode/pathDemo.txt'; <br/>

const dir = path.dirname(notesPath); <br/>
//RESULT - dirname: ./user/legendarycode <br/>
console.log(`dirname: ${dir}`); <br/>

const base = path.basename(notesPath); <br/>
//RESULT - basename: pathDemo.txt <br/>
console.log(`basename: ${base}`); <br/>

const ext = path.extname(notesPath); <br/>
//RESULT - extname:  .txt <br/>
console.log(`extname: ${ext}`); <br/>




✔️  You can  join two (2) or more parts of a path by (using path.join()) : <br/>
Eg using path.join: <br/>

/**
 * WORKING WITH "path" MODULE <br/>
 * You can join 2 or more part together using "path.join()" <br/>
 */
const myName = 'Nathaniel'; <br/>
const joinResult = path.join('/',  'user', myName, 'welcome.txt'); <br/>
console.log(`Join : ${joinResult}`);



✔️ How You Can Get The “filename” , “dirname” Of The Current File Using  The “url” &  “path” IMPORT MODULE (Using path& url  module) : <br/>
		Eg using path.join: <br/>
 * HOW TO GET THE "filename", "dirname" OF THE CURRENT FILE, Using the "url" & "path" import module  <br/>
 */ <br/>
import url from 'url'; <br/>
import path from 'path'; <br/>

const  __filename = url.fileURLToPath(import.meta.url); <br/>
const __dirname = path.dirname(__filename); <br/>

console.log(`The Filename & Dirname :  ${__filename} & ${__dirname}`); <br/>
// RESULT; The Filename & Dirname :  C:\Users\hp\Desktop\nodejs-crash-course\pathDemo.js & C:\Users\hp\Desktop\nodejs-crash-course <br/>



✔️ **OS  Modules :-**  The “OS” module in Node.js provides a powerful set of utilities for interacting with the underlying operating system. It gives you informations  about your Pc(system), cpu etc.. <br/>
It offers a cross-platform way to access system-related information & perform common operating system tasks.  <br/>
Eg 1:  using os module: <br/>
import os from 'os'; <br/>

const osUsage1 = os.platform(); <br/>
const osUsage2 = os.version(); <br/>
console.log(`Platform: ${osUsage1} , Version: ${osUsage2}`); <br/>
// RESULT: Platform: win32 , Version: Windows 11 Pro <br/>

![](images/os-module-usage-img38.png) <br/>


✔️ **URL Modules :** The “url” modules provides utilities for URL  resolution and parsing. <br/>
It can be used to split up  a web address  into readable parts, contruct URLs and handle  different URL component. <br/>
Eg 1:  using url module: <br/>
import url from 'url'; <br/>

//URL STRING <br/>
const myURL = 'https://www.google.com/search?q=LegendaryCode'; <br/>

//URL OBJECT <br/>
const urlObject = new URL(myURL); <br/>

// URL Methods usage <br/>
console.log(urlObject); <br/>
console.log(`pathname ${urlObject.pathname}`); <br/>
console.log(`Hostname ${urlObject.hostname}`); <br/>
console.log(`Hash ${urlObject.hash}`); <br/>
console.log(`Password ${urlObject.password}`); <br/>
console.log(`Format: ${url.format(urlObject)}`); <br/>

console.log(params);
console.log(params.get('q'));
// RESULT 1:  URLSearchParams { 'q' => 'LegendaryCode' }
// RESULT 2: LegendaryCode <br/>

NOTE: In Node.js , import.meta is a special meta-property available within ECMAScript Modules(ES Module).
It’s provides an object containing metadata  about the current module <br/>
Eg :  using using the import.meta property: <br/>
import url from 'url'; <br/>

//Geting "Current File" Url <br/>
console.log(`Current File: ${import.meta.url}`); <br/>
// RESULT:  Current File: file:///C:/Users/hp/Desktop/nodejs-crash-course/urlDemo.js <br/>

//Getting the "fillURLToPath()" Url <br/>
console.log(`Current Path: ${url.fileURLToPath(import.meta.url)}`); <br/>
// RESULT:  Current Path: Current Path: C:\Users\hp\Desktop\nodejs-crash-course\urlDemo.js <br/>
// const  __filename = url.fileURLToPath(import.meta.url); <br/>



✔️ **Crypto Modules:** The “crypto” modules is a built-in module, that provides cryptographic functionality including: <br/>

1. Hash function (SHA - 256, SHA-512, etc.) <br/>
2. HMAC (Hash-based Message Authentication Code). <br/>
3. Symmetric encryption (AES, DES, etc). <br/>
4. Asymmetric encryption (RSA, ECDSA, etc ). <br/>
5. Digital Signatures and verifications. <br/>

The Crypto module is essential for applications that need  to handle sensitive information securely. <br/>
“The module” is often used to handle sensitive data , such as: <br/>
User authentication and password storage.  <br/>
Secure data transmission. <br/>
File encryption and decryption. <br/>
Secure communication channels. <br/>

Eg 1:  using crypto module: <br/>

import crypto from 'crypto'; <br/>
//CREATING A "HASH" <br/>
const myDataHash = 'Hello, This is LegendaryCode Password';
const hash = crypto.createHash('sha256');
const myHash = hash.update(myDataHash);
const myDigest = myHash.digest('hex');
console.log(`Cryptographic Result: ${myDigest}`); <br/>

// RESULT:  Cryptographic Result: e7c15c5c9e515a63a005f4d83cf7071e74606aff6435175f5759fdf5f6f8eec1 <br/>


Eg 2:  using crypto module: <br/>
//randomBytes <br/>
crypto.randomBytes(256 , (err, buf) => { <br/>
    if(err) throw err; <br/>
    console.log(`${buf.length} Bytes of random data: ${buf.toString('hex')}`); <br/>
}); <br/>
// RESULT:  256 Bytes of random data:  <br/>9a528e209d8ecc1bc8093c3a9047b695c0a5c99ee847bdceb109c629f84cbdc512927159708625e16ecc7cebe0afe200e471d1022b11596f338d71f72eb16fade9226505de08797ae185d932c20f163324b94db769e032bd5c015377363227da106550b16fd93bf844afec88da31215b661e52442ffd582ef214f7ac8d59e86970153f24cf1d386d2d8e805a614c7128b5c50a2c6aa1411122973bd595586de2b573fa36eb8de544cfb4a4af25654beba8ea4c70f23f99e1aac97d7c0979238207723c05263d5ad46ab4f218a24a198572b1dd4e5f2b2fd61b6327838defa745629a56db93ece543d2ec4ba2bfe8db7b30f3a18f6b2e9859192f1ef16559aeb5

Eg 3:  using crypto module: <br/>
/** <br/>
 *  HOW TO "encrypt" AND "decrypt" DATA .. <br/>
 * createCipheriv(encrypt) & createDecipheiv (decrypt) <br/>
 */ <br/>
import crypto from 'crypto'; <br/>


//createCipheriv(encrypt) & createDecipheiv (decrypt) <br/>
//Algorithm  <br/>
const algorithm = 'aes-256-cbc'; <br/>
//The key <br/>
const key = crypto.randomBytes(32); <br/>
//The iv <br/>
const iv  =  crypto.randomBytes(16); <br/>

//TO ENCRYPT(OR GET OUR "cipher" text) <br/>
const cipher = crypto.createCipheriv(algorithm, key, iv); <br/>
let encrypted = cipher.update('Hi, legendaryCode, THis is a secret message', 'utf8', 'hex'); <br/>
encrypted += cipher.final('hex'); <br/>
console.log(`ENCRYPTED VALUE: ${encrypted}`); <br/>
// RESULT: ENCRYPTED VALUE: 8adfb2777543d796282dc66687c75eab426b568670d182338a759eb4d547b7467da5f09385f6583dff7c69d9ece07718 <br/>

Eg 4:  using crypto module: <br/>
import crypto from 'crypto'; <br/>
//TO DECRYPT() <br/>
const decipher = crypto.createDecipheriv(algorithm, key, iv);
let decrypted = decipher.update(encrypted,  'hex' , 'utf8');
decrypted += decipher.final('utf8'); <br/>
console.log(`DECRYPTED VALUE: ${decrypted}`); <br/>
// RESULT: ENCRYPTED VALUE:  DECRYPTED VALUE: Hi, legendaryCode, THis is a secret message <br/>




✔️ **Events  Module :** The “Event” module is a great for building real-time application (E.g becusyou can create custom events, & you can listen to the events).

Eg :  using Event module:
import EventEmitter from 'events';

//CREATING AN INSTANCE OF EventEmitter
const emitter = new EventEmitter();

//CREATING SOME HANDLERS (2 functions)
function welcomeHandler(success) {
    console.log(`Hi, legendarycode, good to have you... ${success}`);
}
function relentlessHandler(){
    console.log('I will win, because am relentless');
}



/**
 * REGISTRING AN Event Listener
 */
// emitter.on('Rich Till I Die', () => {
//     console.log('Definitely');
// });
emitter.on('WhatsUp', welcomeHandler);
emitter.on('Victory', relentlessHandler);


/** EMIT  AN EVENT */
emitter.emit('WhatsUp', 'Just BELIEVE');  <br/>
emitter.emit('Victory');  <br/>






✔️  **Process Module:** The “process” module  provides information about and control over the current  Node.js process, is a built module and can be imported and used directly with an ES module environment.  <br/>
		
Eg :  using Process module:  <br/>
import process from 'process';  <br/>

console.log(`Platform:  ${process.platform}`);  <br/>
// RESULT:  Platform:  win32  <br/> <br/>

const archValue = process.arch; <br/>
if(archValue.length < 3 ){  <br/>
    console.log(`The Argv Value Is: ${archValue}`); <br/>
} <br/>
else { <br/>
    console.log(`Not passed, No argument`); <br/>
}
// RESULT: Not passed, No argument <br/>
// RESULT:  The Argv Value Is: C:\Program Files\nodejs\node.exe,C:\Users\hp\Desktop\nodejs-crash-course\processDemo.js <br/>



//process.env <br/>
console.log(process.env);  <br/>

