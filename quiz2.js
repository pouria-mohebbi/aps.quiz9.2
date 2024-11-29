const students = ['Hossein', 'Jamal', 'Mehdi', 'Shaden', 'Zaynab', 'Niloofar'];
const group = ['Niloofar', 'Mehdi', 'Benyamin', 'Zaynab'];

let groupIsOnlyStudents = group.every(member => students.includes(member));

if (groupIsOnlyStudents) {
  console.log('The group contains only students');
} else {
  console.log('The group does not contain only students');
}


