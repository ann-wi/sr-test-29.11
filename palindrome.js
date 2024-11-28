function isPalindrome(str) {
    let reg = /[\W_]/g;
    let strToLowerCase = str.toLowerCase().replace(reg, '');
    let reversedStr = strToLowerCase.split('').reverse().join(''); 
    return reversedStr === strToLowerCase;
}

isPalindrome("А роза упала на лапу Азора");
