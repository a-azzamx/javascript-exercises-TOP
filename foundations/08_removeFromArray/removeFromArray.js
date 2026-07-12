const removeFromArray = function(arr, ...numbers) {
    for (let num of numbers){
        let index = arr.indexOf(num);
        if (index != -1){
            const count = arr.filter(item => item === num).length;
            for (let i = 0; i < count ; i++){
                index = arr.indexOf(num);
                arr.splice(index, 1);
            }
            
        }
    }
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
