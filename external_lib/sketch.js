/*
A class with at least one class function inside.

Incorporate at least one function from an external library
(ex. RiTa, p5.play, ml5.js, etc)
  This function should modify something significant
  to the output. (ex. Generating text, animating a sprite, etc.)
An interactive component (via mouse, keyboard, and/or microphone)
*/





class UseRita {
  constructor(theWords, theAdj, numLines = 8){
    this.theWords = theWords;
    this.theAdj = theAdj;
    this.numLines = numLines;
  }
  generate(){
    var poem = [];
    let manyWords = this.theWords.length;
    let manyAdj = this.theAdj.length;
    print(this.numLines);
    for (let i = 0; i <= this.numLines; i++){
      let num_words = floor(random(1, 8));
      print("words"+num_words);
      for (let j = 0; j<num_words; j++){
        let int = round(random(0,1));
        var aWord;
        if (int == 0){
          aWord = this.theWords[round(random(manyWords))];
        }
        else {
          aWord = this.theAdj[round(random(manyAdj))];
        }
        var aWord = this.theWords[round(random(manyWords))]
        poem.push(aWord);
        if (num_words < 3 && j == num_words-1){
          poem.push('\n\t')
          poem.push(join(RiTa.alliterations(aWord, {limit: 3}), '\n\t' ));
        }

      }
      poem.push('\n')
    }
    return(poem);
  }
}

var words;
var adjs;
var poem;

//for general words:
//https://www.ef.com/wwen/english-resources/english-vocabulary/top-3000-words/
//for adjesctives:
//https://www.randomlists.com/random-adjectives?dup=false&qty=120
function preload(){
  words = loadStrings("common_words.txt");
  adjs = loadStrings("adj.txt");
}

function setup() {
  createCanvas(500,500);
  // sjould I put random in the class??
  //if it is the same for every instance....
  poem = new UseRita(words, adjs, round(random(2,16)));

}

function draw() {
  noLoop();
  rectMode(CENTER);
  background(200,150,250);
  noStroke();
  fill(200,200,250,100);
  rect(250,250,450,450);
  fill(20,0,20);
  text("Random Words Are Still Poetry", 50,25)
  var thePoem = poem.generate();
  text(join(thePoem, ' '), 100,100)
}

//regenerate
function mouseClicked(){
  noLoop();
  rectMode(CENTER);
  background(200,150,250);
  noStroke();
  fill(200,200,250,100);
  rect(250,250,450,450);
  fill(20,0,20);
  var thePoem = poem.generate();
  text(join(thePoem, ' '), 100,100)
}
