// By converting to string
function countDigitesInNumber(num) {
    return Math.abs(num).toString().length;
}

console.log(countDigitesInNumber(12345));

// Without converting to string
function countDigitesInNumber1(num) {
    num = abs(num);

    if(num === 0) {
        return 1;
    }

    let count = 0;
    
    while(num > 0) {
        num = Math.floor(num / 10);
        count ++;
    }
    return count;
}

console.log(countDigitesInNumber1(12345));