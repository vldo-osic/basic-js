const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
    return str.split('')
       .reduce( (accum, current, i, arr) => {
            let newAccum = accum;
            if(arr[i - 1] === current) {
                let last = newAccum.pop()
                newAccum.push([last[0] + 1, last[1]])
                return newAccum
            } else {
                newAccum.push([1, current])
                return newAccum
            }
       }
       , [])
       .join('')
       .split(',')
       .join('')
       .split('')
       .filter(symbol => symbol !== '1')
       .join('')
       
}
console.log(encodeLine('abbcca'))
module.exports = {
  encodeLine
};
