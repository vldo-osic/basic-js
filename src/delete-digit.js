const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
    let nArray = String(n).split('')
    let answer = nArray.slice(1).join('')

    for(let i = 1; i < nArray.length; i++) {
        let number = nArray.slice(0, i)
                           .concat(nArray.slice(i + 1, nArray.length))
                           .join('')

        if(+number > +answer) answer = number
    }
    return +answer
}

console.log(deleteDigit(10))
module.exports = {
  deleteDigit
};
