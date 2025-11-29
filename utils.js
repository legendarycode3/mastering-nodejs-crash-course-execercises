function randomNumberGenerator() {
    return Math.floor(Math.random() * 200) + 5;
}

function celsiusToFahrenheit(celsius) {
    let f = celsius * 1.8;
    let total = f + 32;

    return total;
    // return (celsius * 1.8) + 32;
}




/**
 * "DEFAULT EXPORT" (MEANING YOU JUST EXPORTING ONE 1 FUNCTION OR SET OF ELEMENT)
 */
// module.exports = randomNumberGenerator;



 
/**
 * "EXPORTING"  MULTIPLY STUFFS
 */
// module.exports =
// {
//     randomNumberGenerator,
//     celsiusToFahrenheit
// };
