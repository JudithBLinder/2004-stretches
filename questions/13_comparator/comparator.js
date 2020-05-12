//write a func that takes two arg... selectKey and obj

const comparator = (keyIn, arrayIn) => {

    if (!arrayIn[0][keyIn]) {
        return 'incorrect key';
    };

    arrayIn.sort((a,b) => {
        if (typeof(a[keyIn]) === 'number'){
            return a[keyIn]-b[keyIn];
        } else {
            let aFirst = a[keyIn].split(' ')[1][0];
            let bFirst = b[keyIn].split(' ')[1][0];
            if (aFirst<bFirst) {
                return -1;
            };
            if (aFirst>bFirst) {
                return 1;
            }
            return 0;
        } 
    });

    return arrayIn;
};

module.exports = { comparator };