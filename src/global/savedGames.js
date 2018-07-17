const savedGames = [
  {
    name: 'Javascript',
    categories: [
      {
        name: 'Functions',
        questions:[
          'Write a function that adds two numbers together.',
          'Write a function using ES6 arrow syntax.',
          'What will this function return: const adder = (x,y) => {console.log(x+y)}',
          'Write a function that takes an unknown number of arguments and finds the sum of all the arguments',
          'Write a function that lists the first n prime numbers.'
        ]
      },
      {
        name: 'Arrays',
        questions: [
          'What number will be logged to the console? const arr = [3,2,1]  console.log(arr[1])',
          'How would you console log the 5th element in an array?',
          'Which array method removes the last element from an array?',
          'Use Array.reduce() to find the sum of the squares of the numbers 93, 123, and 823.1.',
          'What is the difference between Array.find() and Array.findIndex()?'
        ]
      },
      {
        name: 'Loops',
        questions: [
          'What is wrong with this for loop? for(let i = 0, i<5, i++) {console.log(i)}',
          'Write a for loop that console logs the numbers 1 through 100.',
          'Write a while loop that console logs the numbers 1 through 100.',
          'Give two examples of a case where it would be better to use a for loop than a forEach loop.',
          'Using a nested for loop, write a function that compares the numbers in two arrays and returns an array with the numbers that are in both arrays, do not repeat any numbers.'
        ]
      },
      {
        name: 'Objects',
        questions: [
          `What will be logged to the console? const obj = {food: 'pizza'}  console.log(obj.food)`,
          `What will be logged to the console? const obj = {food: 'pizza', drink:'soda'} const drink = 'food' console.log(obj[drink])`,
          `How would you access the name property in the following object: {person: {name: 'Keith'}}`,
          "How would you add 10 points to Joe's score? const scores = [{name: 'Bob', score: 50}{name: 'Joe', score: 45}]",
          'Write a function that loops through all the keys in an object and returns an array of all the keys which have falsy values.'
        ]

      },
      {
        name: 'Algorithms',
        questions: [
          'Write a function that lists the first 10 odd numbers',
          'Write a function that takes a string and removes all of the vowels from the string',
          'Write a function that returns the first n fibbonacci numbers',
          'Write a Javascript function for the bubble sort algorithm.',
          'Write a function that reduces a fraction to its simplest form.'
        ]
      }
    ]
  },
  {
    name: 'Lorem Ipsum',
    categories: [
      {
        name: 'Dolor sit',
        questions: [
          'Vitae tempus quam pellentesque nec nam aliquam sem et tortor?',
          'Sed sed risus pretium quam vulputate dignissim suspendisse in est?',
          'Est velit egestas dui id ornare?',
          'Eget est lorem ipsum dolor sit amet consectetur?',
          ' Nisi est sit amet facilisis?'
      ]
      },
      {
        name: 'Amet consectetur',
        questions: [
          'Mauris cursus mattis molestie a iaculis at erat?',
          'Eget magna fermentum iaculis eu non?',
          'Nibh praesent tristique magna sit amet?',
          'Sollicitudin aliquam ultrices sagittis orci?',
          'Sed arcu non odio euismod?'
        ]
      },
      {
        name: 'Adipiscing elit ',
        questions: [
          'Sit amet mattis vulputate enim nulla aliquet?',
          'Egestas quis ipsum suspendisse ultrices gravida?',
          'Porta non pulvinar neque laoreet suspendisse interdum consectetur libero?',
          'Id cursus metus aliquam eleifend mi in nulla posuere?',
          'Urna et pharetra pharetra massa massa ultricies mi quis hendrerit?'
        ]
      },
      {
        name: 'Duis tristique',
        questions: [
          'Blandit volutpat maecenas volutpat blandit aliquam etiam',
          'Enim eu turpis egestas pretium aenean pharetra.',
          'Id venenatis a condimentum vitae sapien pellentesque habitant morbi?',
          'Risus commodo viverra maecenas accumsan lacus vel facilisis?',
          'Sapien nec sagittis aliquam malesuada?'
        ]
      },
      {
        name: 'Sollicitudin nibh',
        questions: [
          'Elementum eu facilisis sed odio morbi quis commodo?',
          'Nunc mi ipsum faucibus vitae?',
          'At tellus at urna condimentum mattis pellentesque id nibh?',
          'Elit pellentesque habitant morbi tristique senectus et netus et?',
          'Tellus orci ac auctor augue mauris augue neque gravida in?'
        ]
      }
    ]

  }
]

export default savedGames;
