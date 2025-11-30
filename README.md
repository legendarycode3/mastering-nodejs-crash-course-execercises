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
