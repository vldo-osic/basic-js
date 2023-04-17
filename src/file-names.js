const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function getNumberRepeatedNames(name, array) {
    return array.reduce(
        (number, element) =>
            (element.name === name.name) ? number + 1
                               : number
    , 1)
}
function renameFiles(names) {
    names = names.map(
        name => nameObj = {
            name: name,
            count: 1
        }
    )

    names.forEach(
        (name, index) =>  { 
            let count = getNumberRepeatedNames(name, names.slice(0, index))
            let newName = nameObj = {
                name: name.name.concat( (count == 1) 
                            ? '' 
                            : `(${count - 1})` ),
                count: count
            }
            
            names[index] = newName
        }
    )
    console.log(names)
}


console.log(renameFiles(["file", "file", "image", "file(1)", "file", 'file']))

module.exports = {
  renameFiles
};
