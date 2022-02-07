//processes the load events on the event handler on the window function
window.onload = function () {
// declare variables here
  var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
        'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
        't', 'u', 'v', 'w', 'x', 'y', 'z'];
  var categories;         // Array of topics
  var chosenCategory;     // Selected category
  var getHint ;          // Word getHint
  var word ;              // Selected word
  var guess ;             // the amount of guesses
  var guesses = [ ];      // Stored guesses
  var lives ;             // Lives
  var counter ;           // Count correct guesses
  var spaces;              // Number of spaces in word '-'
  //declare elements here
  var showLives = document.getElementById("mylives");
  var showCategory = document.getElementById("category");
  var showHint = document.getElementById("hint");
  var showClue = document.getElementById("clue");
  
    // create alphabet ul
  var buttonsFunc = function () 
  {
    myButtons = document.getElementById('buttons');
    letters = document.createElement('ul');

    for (var i = 0; i < alphabet.length; i++) 
	{
      letters.id = 'alphabet';
      list = document.createElement('li');
      list.id = 'letter';
      list.innerHTML = alphabet[i];
      check();
      myButtons.appendChild(letters);
      letters.appendChild(list);
    }
  }
  
    // Select Category
  var selectCat = function () 
  {
    if (chosenCategory === categories[0]) 
	{
      categoryName.innerHTML = " The Chosen Category Is: Functional Job Words ";
    } 
	else if (chosenCategory === categories[1]) 
	{
      categoryName.innerHTML = " The Chosen Category Is: Functional Math Words ";
    } 
	else if (chosenCategory === categories[2]) 
	{
      categoryName.innerHTML = " The Chosen Category Is: Weather Types ";
    }
  }

  // Create guesses ul
   result = function () {
    wordHolder = document.getElementById('hold');
    correct = document.createElement('ul');

    for (var i = 0; i < word.length; i++) {
      correct.setAttribute('id', 'my-word');
      guess = document.createElement('li');
      guess.setAttribute('class', 'guess');
      if (word[i] === "-") {
        guess.innerHTML = "-";
        space = 1;
      } else {
        guess.innerHTML = "_";
      }

      guesses.push(guess);
      wordHolder.appendChild(correct);
      correct.appendChild(guess);
    }
  }
  
  // Show lives
   comments = function () {
    showLives.innerHTML = "You have " + lives + " lives";
    if (lives < 1) {
	  alert("GAME OVER");
    }
	
    for (var i = 0; i < guesses.length; i++) {
      if (counter + space === guesses.length) {
        showLives.innerHTML = "You Win!";
      }
    }
  }

      // Animate man
  var animate = function () {
    var drawMe = lives ;
    drawArray[drawMe]();
  }

  
   // Hangman
  canvas =  function(){

    myStickman = document.getElementById("stickman");
    context = myStickman.getContext('2d');
    context.beginPath();
    //context.strokeStyle = "#fff";
    context.lineWidth = 2;
  };
  
    head = function(){
      myStickman = document.getElementById("stickman");
      context = myStickman.getContext('2d');
      context.beginPath();
      context.arc(60, 25, 10, 0, Math.PI*2, true);
      context.stroke();
    }
    
  draw = function($pathFromx, $pathFromy, $pathTox, $pathToy) {
    
    context.moveTo($pathFromx, $pathFromy);
    context.lineTo($pathTox, $pathToy);
    context.stroke(); 
}

   frame1 = function() {
     draw (0, 150, 150, 150);
   };
   
   frame2 = function() {
     draw (10, 0, 10, 600);
   };
  
   frame3 = function() {
     draw (0, 5, 70, 5);
   };
  
   frame4 = function() {
     draw (60, 5, 60, 15);
   };
  
   torso = function() {
     draw (60, 36, 60, 70);
   };
  
   rightArm = function() {
     draw (60, 46, 100, 50);
   };
  
   leftArm = function() {
     draw (60, 46, 20, 50);
   };
  
   rightLeg = function() {
     draw (60, 70, 100, 100);
   };
  
   leftLeg = function() {
     draw (60, 70, 20, 100);
   };
  
  drawArray = [rightLeg, leftLeg, rightArm, leftArm,  torso,  head, frame4, frame3, frame2, frame1]; 


  // OnClick Function
   check = function () 
   {	   
    list.onclick = function () 
	{
      var guess = (this.innerHTML);
      this.setAttribute("class", "active");
      this.onclick = null;
      for (var i = 0; i < word.length; i++) 
	  {
        if (word[i] === guess) 
		{
          guesses[i].innerHTML = guess;
          counter += 1;
        } 
      }
      var j = (word.indexOf(guess));
      if (j === -1) 
	  {
        lives -= 1;
        comments();
        animate();
      } else 
	  {
        comments();
      }
    }
  }


  // Play
  play = function () {
    categories = [
        ["clerk", "boss", "apply", "resign", "terminate", "payroll", "interview", "resume", "practice", "shift"],
        ["add", "subtract", "multiply", "divide", "measure", "shape", "inches", "solve", "isolate", "graph", "line", "equals", "equation"],
        ["cloudy", "sunny", "rain", "snow", "wind", "precipitation"]
    ];
chosenCategory = categories[Math.floor(Math.random() * categories.length)];
    word = chosenCategory[Math.floor(Math.random() * chosenCategory.length)];
    word = word.replace(/\s/g, "-");
    console.log(word);
    buttonsFunc();

    guesses = [ ];
    lives = 10;
    counter = 0;
    space = 0;
    result();
    comments();
    selectCat();
    canvas();
  }
  play();



// Hint
    hint.onclick = function() {

 hints = [
        ["A person who sells goods at a retail store", "A person who is in charge of you at work", "To make a request", "to quit", "to fire someone, or to get fired", "The total amount of money being paid to an employee", "A discussion a manager has to a person before he or she starts a job", "A document listing all of the jobs and skills that a person has had before", "to get better at something", "a period of time a person works"],
        [ "sum of two numbers", "difference of two numbers", "product of two numbers", "quotient of two numbers", "what someone does with a ruler", "circle, square, rectangle, triangle, etc", "16 of these make a foot", "to figure out the answer to something", "to set apart something", "a chart that plots data", "a long mark", "having the same value as something else", "showing the equality of two expressions"],
        ["grey skies", "yellow and shiny", "drops in the sky", "frozen rain", "strong air in the sky", "rain, snow, hail, etc"]
    ];


    var categoryIndex = categories.indexOf(chosenCategory);
    var hintIndex = chosenCategory.indexOf(word);
    showClue.innerHTML = "Clue: - " +  hints [categoryIndex][hintIndex];
  };

   // Reset
  document.getElementById('reset').onclick = function() {
    correct.parentNode.removeChild(correct);
    letters.parentNode.removeChild(letters);
    showClue.innerHTML = "";
    context.clearRect(0, 0, 400, 400);
    play();
  }
}









