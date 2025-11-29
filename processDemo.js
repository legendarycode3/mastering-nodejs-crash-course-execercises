import process from 'process';


console.log(`Platform:  ${process.platform}`);
// RESULT:  Platform:  win32


const archValue = process.arch;
if(archValue.length < 3 ){
    console.log(`The Argv Value Is: ${archValue}`);
}
else {
    console.log(`Not passed, No argument`);
}
// RESULT: Not passed, No argument
// RESULT:  The Argv Value Is: C:\Program Files\nodejs\node.exe,C:\Users\hp\Desktop\nodejs-crash-course\processDemo.js



//process.env
console.log(process.env);



