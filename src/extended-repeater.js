const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
    return String(str).concat('MARК!')
              .repeat(options.repeatTimes || 1)
              .split('MARК!')
              .slice(0, options.repeatTimes || 1)
              .reduce(
                    (resultString, string) =>
                        [...resultString, string.concat(
                            (String(options.hasOwnProperty('addition') ? options.addition : ''))
                                            .concat('MARК!')
                                            .repeat(options.additionRepeatTimes || 1)
                                            .split('MARК!')
                                            .slice(0, options.additionRepeatTimes || 1)
                                            .join(options.additionSeparator || '|')
                            )
                        ]
              , '')
              .join(options.separator || '+')
}
const objWithSpecificCoercion = {
    [Symbol.toPrimitive]: hint => hint !== 'number' ? 'STRING_OR_DEFAULT' : 'NUMBER'
};
console.log(String(false ))
console.log(repeater(true, { repeatTimes: 3, separator: '??? ', addition: false, additionRepeatTimes: 2, additionSeparator: '!!!' }));

module.exports = {
  repeater
};
