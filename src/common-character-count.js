const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
    let secondString = s2
    let commonCharacterCount = 0
    for(let symbol of s1.split('')) {
        if(secondString.includes(symbol)) {
            secondString = secondString.replace(symbol, '')
            commonCharacterCount++
        }    
    }
    return commonCharacterCount
}
console.log(getCommonCharacterCount('aabcc', 'adcaa'))
module.exports = {
  getCommonCharacterCount
};
