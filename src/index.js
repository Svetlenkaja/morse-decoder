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
    // write your solution here
    const arr = expr.match(/.{1,10}/g).map((item) => item.length !==10 ? item.padStart(10, "0") : item);

    return arr.reduce((acc, element) => {
        if (element === '**********') {
            acc += ' ';
        } else {
            const letter = element.match(/.{1,2}/g).map((char) => {
                if (char === '10') return '.';
                if (char === '11') return '-'
                return '';
            }).join('');
            acc += MORSE_TABLE[letter]; 
        }
        return acc;     
    }, '');
}

module.exports = {
    decode
}