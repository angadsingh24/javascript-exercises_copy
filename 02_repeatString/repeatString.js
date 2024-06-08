const repeatString = function(str, num) {
    let strRep = "";
    if (num<0) return 'ERROR';
    for (let i=0; i<num;i++){
        strRep+=str;
    }

    return strRep;
};

// Do not edit below this line
module.exports = repeatString;
 