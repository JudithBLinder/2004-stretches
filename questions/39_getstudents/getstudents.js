const axios = require('./axios');
//using the *fake* API-endpoint ... https://fullstack.com/api/cohort2004
//create a function that takes a student name and uses axios to hit the endpoint with a get request
//returning that specific student as specified in the test
//* you don't need to NPM i axios for this test... Only work within this file and use promises

const getStudent = (name) => {
  let students = [];
  let student = {};
  if (typeof name != 'string') {
    throw new Error('invalid input!');
  }

  const studentsUrl = 'https://fullstack.com/api/cohort2004';
  axios
    .get(studentsUrl)
    .then((data) => {
      data.json();
      console.log(data);
    })
    .then((data) => (students = data));
};

module.exports = { getStudent };
