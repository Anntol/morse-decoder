const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let result = '';
    
    expr.match(/.{1,10}/g).forEach(element => {
        let encodedElement = '';
        for (let i = 0; i < 11; i+=2) {
            const numPart = element.slice(i, i + 2);
            switch (numPart) {
                case '10':
                    encodedElement += '.';
                    break;
                case '11':
                    encodedElement += '-';
                    break;
                default:
                    break;
            }
        }
        result += (encodedElement === '') ? ' ' : MORSE_TABLE[encodedElement];
    });    
    return result;
}

module.exports = {
    decode
}