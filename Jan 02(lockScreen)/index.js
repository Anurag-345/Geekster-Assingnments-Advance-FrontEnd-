const passCreate = document.querySelector('.createpassword');

const valid = document.getElementById("validate");

valid.style.display = "none";

let created = document.getElementById("create");

created.addEventListener("click", fn);

let btns = document.querySelectorAll(".btn");

btns.forEach((singlebutton) => {
  singlebutton.addEventListener("click", pass);
});
let a = [];



    function fn() {
        console.log(a.length);
     
      
     
           let b = document.getElementById("one").value;
           a.push(b);
           let c = document.getElementById("two").value;
           a.push(c);
           let d = document.getElementById("three").value;
           a.push(d);
           let e = document.getElementById("four").value;
           a.push(e);

           if(b == "" || c == "" || d == "" || e == "" ){
               alert("please create your 4 digit password !")
           }
           else{

             valid.style.display = "block";
             passCreate.style.display = "none";

           }
           
      console.log(b);

      console.log(a.length);
    }

 


var g;
var s = document.getElementById("five");
function pass() {
  s.value += this.innerText;
}
let unlocked = document.getElementById("unlock");
unlocked.addEventListener("click", fn2);
function fn2() {
   
    
  let v = s.value;
  let x = v.split("");
  console.log(x);
  console.log(a);
  if (JSON.stringify(a) == JSON.stringify(x)) {
    s.setAttribute('disabled','true')
    let status = document.getElementById('status');
    status.innerHTML = `<span style="color:green; margin:10px;">Unlocked</span>`;
  } else alert("please enter correct password");
}
