/*
write the zip function
zip([{x: 1}, {x: 2}]) => {x: 3}
zip([
  {x: 1, y: 2}, 
  {x: 2, z: 1},
  {z: 2, y: 1}]) => {x: 3, y: 3, z: 3}
*/

function zip(objs) {
  let objOut = {};
  for (let i = 0; i < objs.length; i++) {
    for (let key in objs[i]) {
      if (objOut.hasOwnProperty(key)) {
        objOut[key] += objs[i][key];
      } else {
        objOut[key] = objs[i][key];
      }
    }
  }
  return objOut;
}

module.exports = { zip };
