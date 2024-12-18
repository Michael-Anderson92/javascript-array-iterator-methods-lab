/*
Exercise 1: Array.prototype.filter()

Filter the array of inventors into a new array containing only the inventors 
born in the 1500's.

- You have an array of inventors, each with a birth year listed by the property 
  'year'.
- Use the Array.prototype.filter() method to create a new array.
- The new array, 'veryOldInventors', should only include inventors born between 
  the years 1500 and 1599.
*/



// Complete the exercise in the space below:

const veryOldInventors = inventors.filter((inventor) => {
  return inventor.year >= 1500 && inventor.year < 1600
})

console.log(veryOldInventors)


// Check your work:
console.log('Exercise 1 my result: ', veryOldInventors);
console.log('Exercise 1 correct result: ', [
  { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
  { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
]);



/*
Exercise 2: Array.prototype.map()

Map the array of inventors into a new array. This new array should only contain
objects with the inventors' first and last names.

- For each inventor, return an object in this format: 
  { first: "First Name", last: "Last Name" }.
- The new array should be a collection of these objects, each representing an 
  inventor with only their first and last names.

Hint: Return a new object literal from the callback that looks like:
      { first: "First Name", last: "Last Name" }
*/

// Complete the exercise in the space below:

inventorNames = inventors.map((inventor) => {
  return {first:inventor.first, last:inventor.last}
})


// Check your work:
console.log('Exercise 2 my result: ', inventorNames);
console.log('Exercise 2 correct result: ', [
  { first: 'Albert', last: 'Einstein' },
  { first: 'Isaac', last: 'Newton' },
  { first: 'Galileo', last: 'Galilei' },
  { first: 'Marie', last: 'Curie' },
  { first: 'Johannes', last: 'Kepler' },
  { first: 'Nicolaus', last: 'Copernicus' },
  { first: 'Max', last: 'Planck' },
  { first: 'Katherine', last: 'Blodgett' },
  { first: 'Ada', last: 'Lovelace' },
  { first: 'Sarah E.', last: 'Goode' },
  { first: 'Lise', last: 'Meitner' },
  { first: 'Hanna', last: 'Hammarström' },
]);


/*
Exercise 3: Array.prototype.sort()

Sort the inventors by birth date in ascending order (from those born furthest in
the past to those born most recently).
*/

// Complete the exercise in the space below:

const sortedByBirthYear = inventors.sort((a, b) => a.year + b.year)

// Check your work:
console.log('Exercise 3 my result: ', sortedByBirthYear);
console.log('Exercise 3 correct result: ', [
  { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
  { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
  { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
  { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
  { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
  { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 },
  { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
  { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
  { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
  { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
  { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
  { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
]);


/* 
Exercise 4: Array.prototype.find()

Use Array.prototype.find() to identify the inventor with the first name 'Ada' 
from an array of inventor objects

- You have an array of objects, each representing an inventor with various 
  properties including their first name.
- Utilize the Array.prototype.find() method to locate the object for the 
  inventor with the first name 'Ada'.
- Assign the found inventor object to the variable inventorNamedAda
*/



// Complete the exercise in the space below:

const inventorNamedAda = inventors.find((inventor) => {
  return inventor.first === 'Ada'
})
// Check your work:
console.log('Exercise 4 my result: ', inventorNamedAda);
console.log('Exercise 4 correct result: ', {
  first: 'Ada',
  last: 'Lovelace',
  year: 1815,
  passed: 1852,
});

/*
Exercise 5: Array.prototype.map()

Use the Array.prototype.map() method to reformat each name in the 'people' 
array. The goal is to convert names from "Last, First" format to "First Last" 
format.

Hint: Use the String.prototype.split() method to separate the first and last 
      names. You can split the string using ', ' as the separator.
      After splitting the names, rearrange them to the "First Last" format.
*/

// Complete the exercise in the space below:

const firstLast = people.map((person) => {
  const newInput = person.split(', ');
  return `${newInput[1]} ${newInput[0]}`
});


// Check your work:
console.log('Exercise 5 my result: ', firstLast);
console.log('Exercise 5 correct result: ', [
  'Carl Becker',
  'Samuel Beckett',
  'Mick Beddoes',
  'Henry Beecher',
  'Ludwig Beethoven',
  'Menachem Begin',
  'Hilaire Belloc',
  'Saul Bellow',
  'Robert Benchley',
  'Peter Benenson',
  'David Ben-Gurion',
  'Walter Benjamin',
  'Tony Benn',
  'Chester Bennington',
  'Leana Benson',
  'Silas Bent',
  'Lloyd Bentsen',
  'Ric Berger',
  'Ingmar Bergman',
  'Luciano Berio',
  'Milton Berle',
  'Irving Berlin',
  'Eric Berne',
  'Sandra Bernhard',
  'Yogi Berra',
  'Halle Berry',
  'Wendell Berry',
  'Erin Bethea',
  'Aneurin Bevan',
  'Ken Bevel',
  'Joseph Biden',
  'Ambrose Bierce',
  'Steve Biko',
  'Josh Billings',
  'Frank Biondo',
  'Augustine Birrell',
  'Elk Black',
  'Robert Blair',
  'Tony Blair',
  'William Blake',
]);


/*
Exercise 6: Array.prototype.some()

Determine if there is at least one person in the devs array who is 18 years 
old or older.

- You have an array of people with their respective ages.
- Use the Array.prototype.some() method to check if any person in the array is 
  18 years old or older.
- Store the result (true or false) in the variable 'isAdultPresent'. 
*/



// Complete the exercise in the space below:

const presentYear = 2024;

const isAdultPrsent = null;

const isAdultPresent = devs.some((dev) => {
  let age = presentYear - dev.year;
  console.log(age); 
  return age >= 18;
});

console.log(isAdultPresent);

// Check your work:
console.log('Exercise 6 my result: ', isAdultPresent);
console.log('Exercise 6 correct result: ', true);



/*
Exercise 7: Array.prototype.every()

Use Array.prototype.every() to determine if every person in the devs array is 
19 years old or older.

- You have an array of individuals, each with their year of birth represented
  by the 'year' property.
- Use the Array.prototype.every() method to verify if every individual in the
  array is at least 19 years old.
- Store the result (true or false) in the variable 'isEveryone19OrOlder'.
*/



// Complete the exercise in the space below:
const isEveryone19OrOlder = devs.every((dev) => {
  let age = presentYear - dev.year;
  console.log(age);
  return age >= 19;
})
// Check your work:
console.log('Exercise 7 my result: ', isEveryone19OrOlder);
console.log('Exercise 7 correct result: ', false);



/*
Exercise 8: Array.prototype.find()

Use Array.prototype.find() to identify and retrieve the comment object with 
a specific ID 823423 from an array of comment objects.

- Assign the found comment object to the variable 'commentById'.
*/

const commentById = comments.find((comment) => {
  return comment.id == '823423';
})

// Complete the exercise in the space below:

// Check your work:
console.log('Exercise 8 my result: ', commentById);
console.log('Exercise 8 correct result: ', { text: 'Super good', id: 823423 });


/*
Exercise 9: Array.prototype.findIndex()

Determine the index of the comment that has a specific ID 123523 in an array 
of comment objects.

- Store the index in the variable 'idx'.
*/

const idx = comments.findIndex((comment) => {
  return comment.id == '123523';
})

// Complete the exercise in the space below:

// Check your work:
console.log('Exercise 9 my result: ', idx);
console.log('Exercise 9 correct result: ', 3);