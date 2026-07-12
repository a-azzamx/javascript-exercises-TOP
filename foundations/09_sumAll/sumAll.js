const sumAll = function(start, end) {
    if (Number.isInteger(start) && Number.isInteger(end) && start > -1 && end > -1){
        if (start - end > 0) {
            let temp = start;
            start = end;
            end = temp; 
        }
        let sum = (end * (end + 1))/2 - (start*(start - 1))/2;
        return sum
    }
    else {
        return "ERROR";
    }
};

// Do not edit below this line
module.exports = sumAll;
