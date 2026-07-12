const reverseString = function( string) {
    let n = string.length
    let rstring = '';

    for(let i = n-1; i>= 0; i--){
        rstring += string[i];
    }
    return rstring;
};

// Do not edit below this line
module.exports = reverseString;
