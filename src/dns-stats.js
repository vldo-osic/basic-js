const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
    return domains.reduce(
        (statsTree, domain) => {
            let domainArr = domain.split('.').reverse()
            for(let i = 0; i < domainArr.length; i++) {
                let prop = '.'.concat(domainArr.slice(0, i + 1).join('.'))
                statsTree[prop] = statsTree.hasOwnProperty(prop) 
                      ? statsTree[prop] + 1
                      : 1
            }
            return statsTree
        }
    , {})
}

domains = [
    'code.yandex.ru',
    'music.yandex.ru',
    'yandex.ru'
]

console.log(getDNSStats(domains))
module.exports = {
  getDNSStats
};
