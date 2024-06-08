const removeFromArray = function(arr, ...moreArgs) {
    const returnArr = [];
    for(const i of arr) {
        let remove = false;
        for(const arg of moreArgs){
            if(i === arg) remove=true;
        }
        if (remove==false) returnArr.push(i);
    }
    return returnArr;
};

// Do not edit below this line
module.exports = removeFromArray;
 