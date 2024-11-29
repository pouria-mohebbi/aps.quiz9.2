const pairsByIndexRaw = [[0, 3], [1, 2], [2, 1], null, [1], false, 'whoops'];

let pairsByIndex = pairsByIndexRaw.filter(item => Array.isArray(item) && item.length === 2 && item.every(Number.isInteger));

console.log(pairsByIndex);

const students = ['Javad', 'Anahid', 'Mina', 'Atena'];
const mentors = ['Shirin', 'Bahar', 'Maryam', 'Ayda'];

const pairs = pairsByIndex.map(function (indexes) {
  const student = students[indexes[0]];
  const mentor = mentors[indexes[1]];
  return [student, mentor];
});

console.log(pairs);
