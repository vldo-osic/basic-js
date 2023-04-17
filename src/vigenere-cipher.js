const { NotImplementedError } = require('../extensions/index.js');






class VigenereCipheringMachine {
    
    constructor (mode) {
        this.mode = mode
    }

    alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

    filterNotLetter = (string) => 
        string.toUpperCase()
              .split('')
              .filter(symbol => /[A-Z]/.test(symbol))

    merge(array, filteredArray) {
        let resultArray = filteredArray
        for(let i = 0; i < array.length; i++) {
            if(! /[A-Z]/.test(array[i]))
                resultArray.splice(i, 0, array[i])
        }
        return resultArray
    }

    encrypt(message, key) {
        if(message == undefined || key == undefined) 
            throw new Error('Incorrect arguments!')

        let clearMsg = this.filterNotLetter(message)
        let clearKey = this.filterNotLetter(key)
        
        let encryptedMessage = clearMsg.reduce(
            (encryptedMessage, letter, index) => {
                const messageLetterIndex = this.alphabet.indexOf(letter)
                const keyLetterIndex = this.alphabet.indexOf(clearKey[index % clearKey.length])
                let resultLetter = this.alphabet[(messageLetterIndex + keyLetterIndex) % this.alphabet.length]
                return [...encryptedMessage, resultLetter]
            }
        , [])
        
        encryptedMessage = this.merge(message.toUpperCase().split(''), encryptedMessage).join('')

        return this.mode === false ? encryptedMessage.split('').reverse().join('') : encryptedMessage 
    }

    decrypt(encryptedMessage, key) {
        if(encryptedMessage == undefined || key == undefined) 
            throw new Error('Incorrect arguments!')

        let clearMsg = this.filterNotLetter(encryptedMessage)
        let clearKey = this.filterNotLetter(key)
        
        
        let message = clearMsg.reduce(
            (message, letter, index) => {
                const messageLetterIndex = this.alphabet.indexOf(letter)
                const keyLetterIndex = this.alphabet.indexOf(clearKey[index % clearKey.length])
                let resultLetter = this.alphabet[
                    (messageLetterIndex - keyLetterIndex >= 0) ? 
                        messageLetterIndex - keyLetterIndex
                      : this.alphabet.length - (keyLetterIndex - messageLetterIndex)
                ]
                return [...message, resultLetter]
            }
        , [])
        
        message = this.merge(encryptedMessage.toUpperCase().split(''), message).join('')

        return this.mode === false ? message.split('').reverse().join('') : message 
    }
}

const directMachine = new VigenereCipheringMachine();

const reverseMachine = new VigenereCipheringMachine(false);
console.log(directMachine.encrypt('cryptography', 'verylongkeyword'))
console.log(directMachine.alphabet.indexOf('T'))
console.log(directMachine.alphabet.indexOf('L'))
console.log(directMachine.alphabet[1])
console.log(directMachine.encrypt('attack at dawn!', 'alpeonse'))
                                // attackatdawn
                                // alphonsealphonse
                                // AEIHQX SX DLLU!
                                // AEIHQX ET SHKA!
console.log(directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse'))
console.log(reverseMachine.encrypt('attack at dawn!', 'alphonse'))
console.log(reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse'))


module.exports = {
  VigenereCipheringMachine
};
