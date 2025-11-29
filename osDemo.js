import os from 'os';


const osUsage1 = os.platform();
const osUsage2 = os.version();
console.log(`Platform: ${osUsage1} , Version: ${osUsage2}`);
console.log(os.userInfo());
// RESULT: Platform: win32 , Version: Windows 11 Pro

