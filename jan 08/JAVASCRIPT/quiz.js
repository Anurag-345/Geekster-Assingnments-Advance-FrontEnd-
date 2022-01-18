// Timer section

let timer = document.getElementById("timer");

let counter = 121;

function seconds(s) {
  var min = Math.floor(s / 60);
  var sec = s % 60;
  return (
    (min > 9 ? "" + min : "0" + min) + " : " + (sec > 9 ? "" + sec : "0" + sec)
  );
}

function time() {
  if (counter > 0) {
    counter--;
    timer.innerHTML = seconds(counter);
  } else {
    timer.innerHTML = `<span style="color:#ff0000">TIME OVER</span>`;
    submit.setAttribute('disabled', "true");

  }
}

let setIntervalId = setInterval(time, 1000);
time();



// skip question
let next = document.getElementById("next");

let correctAnswer = "Rhopalocera";

function increment() {
  i++;

  console.log(i);

  let data = fetch("quiz.json");
  data
    .then((Response) => Response.json())
    .then((data) => {
      question.innerHTML = data[i].question;
      correctAnswer = data[i].correctAnswer;
      A.innerHTML = data[i].answers[0];
      B.innerHTML = data[i].answers[1];
      C.innerHTML = data[i].answers[2];
      D.innerHTML = data[i].answers[3];
      counter = 121;
      submit.disabled = false;
      win.style.display = "none";

      setInterval(time, 1000);
      A.style.background = "white";
      B.style.background = "white";
      C.style.background = "white";
      D.style.background = "white";
    });
}

next.addEventListener("click", increment);





let question = document.getElementById("question");
let A = document.getElementById("A");
let B = document.getElementById("B");
let C = document.getElementById("C");
let D = document.getElementById("D");

// console.log(A);



let submit = document.getElementById("submit");

let win = document.querySelector(".win");
let lose = document.querySelector(".lose");

let i = 0;

let data = fetch("quiz.json");
data
  .then((Response) => Response.json())
  .then((data) => {
    question.innerHTML = data[i].question;
   
    A.innerHTML = data[i].answers[0];
    B.innerHTML = data[i].answers[1];
    C.innerHTML = data[i].answers[2];
    D.innerHTML = data[i].answers[3];

    let userAnswer = '';
   

    A.addEventListener("click", function () {
      A.style.background = "yellow";
      B.style.background = "white";
      C.style.background = "white";
      D.style.background = "white";
      userAnswer = A.innerHTML;
     
    });

    B.addEventListener("click", function () {
      B.style.background = "yellow";
      A.style.background = "white";
      C.style.background = "white";
      D.style.background = "white";
       userAnswer = B.innerHTML;
      
    });

    C.addEventListener("click", function () {
      C.style.background = "yellow";
      B.style.background = "white";
      D.style.background = "white";
      A.style.background = "white";
       userAnswer = C.innerHTML;
      
    });
    D.addEventListener("click", function () {
      D.style.background = "yellow";
      B.style.background = "white";
      C.style.background = "white";
      A.style.background = "white";
       userAnswer = D.innerHTML;
      
    });
    let score = 0;
    let winMessage = document.getElementById('winMessage');
    let loseMessage = document.getElementById("loseMessage");
   
    
    submit.addEventListener('click', function(){

      console.log(userAnswer);
      console.log(correctAnswer);

      if(userAnswer == correctAnswer){
        win.style.display = "flex";
        score += 1000;
        winMessage.innerHTML = `you won ${score} points`;
        console.log('correct')
        submit.disabled =true;
        clearInterval(setIntervalId);
      }
      else{
        lose.style.display = "flex";
        loseMessage.innerHTML = `Your answer is wrong`;
        console.log('wrong');
        submit.disabled = true;
         clearInterval(setIntervalId);
      }
    });

  
  });






        

         










