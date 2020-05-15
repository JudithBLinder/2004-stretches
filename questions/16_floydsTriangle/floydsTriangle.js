// Given a number of rows n, print out Floyd's Triangle
// Example:
//  input: n = 3
//  output:
//  1
//  23
//  456

const floydsTriangle = n => {
    let floydsTriangleStr = '';
    let startNum = 1;
    debugger;
    for (let i=0; i<n; i++) {
        for (let j=0; j<i+1; j++) {
            floydsTriangleStr += startNum;
            startNum++
        }
        if (i<n-1) {
            floydsTriangleStr += '\n';
        }
    }
    return floydsTriangleStr;
};

module.exports = { floydsTriangle };