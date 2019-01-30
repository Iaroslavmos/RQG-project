var message = '';
var red;
var green;
var blue;
var seenQuotes = [];

//An array of object literals
var quotes = [
    {
      quote : 'The only source of knowledge is experience.',
      source : 'Albert Einstein',
      citation : 'Ideas And Opinions (p. 271)',
      year : 1995,
      tag : 'Knowledge'
    },
    {
      quote : 'An investment in knowledge pays the best interest.',
      source : 'Benjamin Franklin',
      citation : 'The way to wealth',
      year : 1758,
      tag : 'Life'
    },
    {
      quote : 'Human behavior flows from three main sources: desire, emotion, and knowledge.',
      source : 'Plato',
      tag : 'Positivity'
    },
    {
      quote : 'In order to carry a positive action we must develop here a positive vision.',
      source : 'Dalai Lama',
      tag : 'Inspirational'
    },
    {
      quote : 'The fool doth think he is wise, but the wise man knows himself to be a fool.',
      source : 'William Shakespeare',
      citation : 'As You Like It',
      year : 1600,
      tag : 'Inspirational'
    },
    {
      quote : 'We are all in the gutter, but some of us are looking at the stars.',
      source : 'Oscar Wilde',
      citation : 'Lady Windermere\'s Fan',
      year : 1893,
      tag : 'Positivity'
    },
    {
      quote : 'I may not have gone where I intended to go, but I think I have ended up where I needed to be.',
      source : 'Douglas Adams',
      citation : 'The Long Dark Tea-Time of the Soul',
      year : 1988,
      tag : 'Inspirational'
  }
];

 //This function prints message to the page. It is sort of extra here but I used it to practice functions inside functions.
function print(message) {
  var outputDiv = document.getElementById('quote-box');
  outputDiv.innerHTML = message;
}

//A function generating a random object literal from an array
function getRandomQuote () {
    var randomNumber = Math.floor(Math.random * (quotes.length));
    var spliceQuote = quotes.splice(randomNumber, 1)[0];
    seenQuotes.push(spliceQuote);
    if (quotes.length === 0) {
      quotes = seenQuotes;
      seenQuotes = [];
    }
    return spliceQuote;
}

//A function generating a random colour
function randomColourGenerator() {
  red = Math.floor(Math.random() * 256);
  green = Math.floor(Math.random() * 256);
  blue = Math.floor(Math.random() * 256);
  randomColour = 'rgb(' + red +',' + green + ',' + blue + ')';
  return randomColour;
}

//A function which takes previously generated random object literal (quotes, source, citation, year and tag) and prints it to the page every time the button is clicked.
function printQuote () {
   var result = getRandomQuote();
   var message = "<p class='quote'>" + result.quote + "</p>" + "<p class='source'>" + result.source + '';
   if (result.citation) {
     message += "<span class='citation'>"+ result.citation +"</span>";
   } else {
     message += '';
   }
   if (result.year) {
     message += "<span class='year'>"+ result.year +"</span>";
   } else {
     message += '';
   }
   if (result.tag) {
     message += '<h3>' + result.tag + '</h3>';
   } else {
     message += '';
   }
   message += "</p>";
//calling function to print message
   print(message);
//calling function to generate colour
   randomColourGenerator();
//This method updates background colour
   document.getElementById('backgroundcolor').style.background = randomColourGenerator();
}

//This method changes quotes every 30 seconds
window.setInterval(printQuote, 3000);

//This event listener activates the button "Show another quote" with every click, and hence calls the "printQuote" function
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

//For randomColourGenerator I modified and created an <id> attribute in the HTML file. Don't know if that was the right and only way but it works.
