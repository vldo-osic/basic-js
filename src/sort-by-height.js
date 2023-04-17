const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
    sortedArr = arr.filter(value => value != -1).sort((a, b) => a - b)
    let iterator = sortedArr[Symbol.iterator]()
    let resultArr = []
    for(let value of arr) {
        (value == -1) ? resultArr.push(-1)
                      : resultArr.push(iterator.next().value)
    }
    return resultArr
}
let arr = [4, 2, 9, 11, 2, 16]
console.log(sortByHeight(arr))
module.exports = {
  sortByHeight
};
