const reverseString = function(str) {
    const strArr = [];
    for (let i = str.length-1; i >= 0; i--){
        strArr.push(str.charAt(i));
    }
    return(strArr.join(""));

};

// Do not edit below this line
module.exports = reverseString;
