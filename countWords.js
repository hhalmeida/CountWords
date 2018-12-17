// var countChars = function (word) {
//   console.log(word);
// };
// countChars('Programming');

function stringCounter (str) {
  var lettersText = str.split("")
  var nLetters = lettersText.length
	
  var words = {};
  for (var i = 0; i < nLetters; i++) {
    if (!(words.hasOwnProperty(lettersText[i]))) {
      words[lettersText[i]] = 0;
    }
    ++words[lettersText[i]];
  }
  
  let arrayLetter = []

  Object.keys(words).forEach(i => {
    let int = {}
    int[i] = words[i]
    console.log(int)
    if(int[i] > 1){
      arrayLetter.push(int)
    }
    
  })
  
  return arrayLetter;
}

var text = "Programming";

// stringCounter(text)

var res = stringCounter(text)
console.log(res)
var html = JSON.stringify(res);

var div = document.createElement("div");      
var t = document.createTextNode(html);       
div.appendChild(t);                          
document.body.appendChild(div);   
