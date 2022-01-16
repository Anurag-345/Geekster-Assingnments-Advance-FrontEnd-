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

setInterval(time, 1000);
time();



// skip question


let question = document.getElementById("question");
let A = document.getElementById("A");
let B = document.getElementById("B");
let C = document.getElementById("C");
let D = document.getElementById("D");

// console.log(A);

let skip = document.getElementById("skip");

let submit = document.getElementById("submit");

let i = 0;

let data = fetch("quiz.json");
data
  .then((Response) => Response.json())
  .then((data) => {
    question.innerHTML = data[i].question;
    let correctAnswer = data[i].correctAnswer;
    A.innerHTML = data[i].answers[0];
    B.innerHTML = data[i].answers[1];
    C.innerHTML = data[i].answers[2];
    D.innerHTML = data[i].answers[3];

    let options = document.getElementsByClassName("option");

    for (let j = 0; j < options.length; j++) {
      {
        options[j].addEventListener("click", function () {
          const userAnswer = options[j].innerHTML;
    
            options[j].style.background = "#E093BB";
            options[j].onclick = 'null';
         
          submit.addEventListener('click',function(){

            if(userAnswer == correctAnswer){
              options[j].style.background = "green";
              submit.disabled = true;
              
            }
            else{
              options[j].style.background = "red";
              submit.disabled = true;
    
            }

          })

          // console.log(userAnswer)
          // console.log(correctAnswer)
         
        });
      }
    }
    
  });


function increment(){

  i++;
  console.log(i);

  let data = fetch("quiz.json");
  data
    .then((Response) => Response.json())
    .then((data) => {
      question.innerHTML = data[i].question;
      A.innerHTML = data[i].answers[0];
      B.innerHTML = data[i].answers[1];
      C.innerHTML = data[i].answers[2];
      D.innerHTML = data[i].answers[3];
      counter = 121;

  
    });

}

skip.addEventListener("click", increment);


// Answer check 



        

         










