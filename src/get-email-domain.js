const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
    return email.match(/@[\d\w-]{1,}.[\d\w-]{1,}/g).pop().slice(1)
}

module.exports = {
  getEmailDomain
};
