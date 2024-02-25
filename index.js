const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

//write a function to capitalize the first letter in a string
//return a new array with title case tutorial names 
//figure out how to iterate over each word in a string inside of an array
 

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}


const titleCased = () => {
  const capitalWords = tutorials.map((titles) => {
    const eachWord = titles.split(' ')
    const eachWordCapital = eachWord.map(capitalizeFirstLetter)
    let capitalTitles = eachWordCapital.join(' ');
    return capitalTitles
  });
 return capitalWords;
}
  

