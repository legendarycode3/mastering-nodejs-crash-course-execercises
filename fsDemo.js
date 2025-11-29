// import fs from 'fs';

import fs from 'fs/promises';


// readFile() -  CALLBACK (Callback Version)
// fs.readFile('./textFsDemo.txt', 'utf8', (err, data) => {
//     // if(err) throw err;
//     // console.log(data);
//     if(err) {
//         console.error(err);
//         return;
//     }else{
//         console.log(data);
//     }
    
// });







/**
 * READINg FILES  "SYNCHRONOUSLY" 
 * FOR simple scripts, you can use  synchronous methods , but  avoid them in  "production servers" as they can block the event loop.
 */
// // const data = fs.readFileSync('./textFsDemo.txt', 'utf8');
// // console.log(data);
// try {
//     const data = fs.readFileSync('./textFsDemo.txt', 'utf8');
//     console.log(data);
// } catch (err) {
//     console.error(err);
// }







/**
 * READINg FILES  WITH "PROMISES" (MODERN APPROACH)
 */

//ASYCHRONOUS NAMED FUNCTION
// async function readFile() {
//     try {
//         const data =  await fs.readFile('./textFsDemo.txt', 'utf8');
//          console.log(`File Content ${data}`);
//         // console.log('File content:', data);
//     } 
//     catch (err) {
//          console.log(`Error Reading File: ${err}`);
//         // console.log('Error reading file:', err);
//     }
// }
// readFile();

// ASYNCHRONOUS ARROW FUNCTION 
const readFile = async () => {
    try {
        const data =  await fs.readFile('./textFsDemo.txt', 'utf8');
         console.log(`File Content ${data}`);
        // console.log('File content:', data);
    } 
    catch (err) {
         console.log(`Error Reading File: ${err}`);
        // console.log('Error reading file:', err);
    }
};

readFile();





// // writeFile() -  CALLBACK (Callback Version)
// const myContent = 'Iam writing my name Williams, to this file location';
// fs.writeFile('./textFsDemo.txt', myContent, (err, data) => {
//     if(err){
//         console.error(`Error Writing The File: ${err}`);
//         return;
//     }
//     else{
//         console.log(`File successfully written: ${myContent}`);
//     }
// })







// // writeFile() -  SYNCHROUNOUS (synchronous Version)
// // const myContent = 'Iam writing my name Williams, to this file location';
// const myContent = 'This is a file am writing to with my name LegendaryCode, written';

// try {
//     const data = fs.writeFileSync('./text-fsDemo.txt', myContent);
//     console.log(`File Written succesful ${data}`);
// } catch (err) {
//     console.error(`Error Writing This Syncronous File: ${err}`);
    
// }








// ASYNCHRONOUS ARROW FUNCTION 
const writeFiles = async () => {
    try {
        // const myContent = 'This is just my content for wrting into the text file';

        await fs.writeFile('./text-fsDemo.txt', 'Hi, iam writing to this file');
        //  console.log(`File Content ${data}`);
        // console.log('File content:', data);
        console.log('file wrtitten to: ');
    } 
    catch (err) {
         console.log(`Error Reading File: ${err}`);
        // console.log('Error reading file:', err);
    }
};

writeFiles();

// // ASYNCHRONOUS ARROW FUNCTION 
// const readFile = async () => {
//     try {
//         const data =  await fs.readFile('./textFsDemo.txt', 'utf8');
//          console.log(`File Content ${data}`);
//         // console.log('File content:', data);
//     } 
//     catch (err) {
//          console.log(`Error Reading File: ${err}`);
//         // console.log('Error reading file:', err);
//     }
// };




//APPEND FILE()
const appenFile = async () => {
    try {
        await fs.appendFile('./textFsDemo.txt', '\nThis is appended text');
        console.log('File appended to::');
    } catch (error) {
        console.log(error);
    }
};

appenFile();




