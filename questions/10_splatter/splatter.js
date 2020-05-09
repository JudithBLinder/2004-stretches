//write the splatter function

const splatter = (...arg) => {
  console.log(arg);
  const argList = Array.from(arg);
  let val = 0;

  console.log(argList)
  argList.forEach(element => {
    for (let key in element){
      val += element[key];
    }
  });

  return val;
};

module.exports = { splatter };
