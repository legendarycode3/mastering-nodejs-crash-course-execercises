import url from 'url';
import path from 'path';



const notesPath = './user/legendarycode/pathDemo.txt';

const dir = path.dirname(notesPath);
//RESULT - dirname: ./user/legendarycode
console.log(`dirname: ${dir}`);

const base = path.basename(notesPath);
//RESULT - basename: pathDemo.txt
console.log(`basename: ${base}`);

const ext = path.extname(notesPath);
//RESULT - extname:  .txt
console.log(`extname: ${ext}`);





/**
 * WORKING WITH "path" MODULE
 * You can join 2 or more part together using "path.join()"
 */
const myName = 'Nathaniel';
const joinResult = path.join('/',  'user', myName, 'welcome.txt');
console.log(`Join : ${joinResult}`);






/**
 * HOW TO GET THE "filename", "dirname" OF THE CURRENT FILE, Using the "url" & "path" import module 
 */
const  __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log(`The Filename & Dirname :  ${__filename} & ${__dirname}`);
// RESULT; The Filename & Dirname :  C:\Users\hp\Desktop\nodejs-crash-course\pathDemo.js & C:\Users\hp\Desktop\nodejs-crash-course