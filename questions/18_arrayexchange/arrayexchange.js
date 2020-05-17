//arrayexchange should exchange the elements of two arrays in-place in a way that their new content is also reversed.
//restricted use: reverse()

const arrayexchange = (arr1, arr2) => {

    if (!Array.isArray(arr1) || !Array.isArray(arr2)) {
        throw new Error('Invalid input!')
    }
    
    let arrTemp = [];

    arr1.forEach((el, idx) => {
        arrTemp[arr1.length - 1 - idx] = el;
    });
    for (let i=0; i<arr1.length; i++) {
        arr1.pop();
    };
    arr2.forEach((el, idx) => {
        arr1[arr2.length - 1 - idx] = el;
    });
    for (let i=0; i<arr2.length; i++) {
        arr2.pop();
    };
    arrTemp.forEach((el, idx) => {
        arr2[idx] = el;
    });

    return [arr1, arr2];
};

module.exports = { arrayexchange };