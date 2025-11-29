//console.log("I will a super based programmer");




//THE FOLLOWING "OBJECTS" BELOW - ARE NOT AVAILABLE
// console.log(document);
// console.log(window);




//THE FOLLOWING "OBJECTS" BELOW - ARE AVAILABLE
//console.log(global);
// console.log(process);




/**
 *  DEFAULT - IMPORTING "randomNumberGenerator" INTO index.js FILE
 */
// const randomNumberGenerator = require('./utils.js');
// console.log(`RandomNumberGenerator: ${randomNumberGenerator()}`);




/**
 * WHEN USING (commonJs module) "IMPORTING MULTIPLY STUFFS"  INTO index.js FILE
 */
// const {randomNumberGenerator, celsiusToFahrenheit} = require('./utils.js');




/**
 * WHEN USING (ES module) "IMPORTING"  INTO index.js FILE - getewsPosts (function)
 */
import { getNewsPosts, getPostsLength } from './postController.js';




/**
 * CONSOLE.LOGS 
 */

// console.log(`RandomNumberGenerator: ${randomNumberGenerator()}`);

// console.log(`Celsius To Fahrenheit: ${celsiusToFahrenheit(20)}⁰F`);



console.log(getNewsPosts());
console.log(`Post Length: ${getPostsLength()}`);