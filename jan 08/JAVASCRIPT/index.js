let startBtn = document.getElementById('start');
let rulesBtn = document.getElementById('rules');
let rulesDiv = document.querySelector('.rules');


// adding event to rules button to diplay rules div 
rulesBtn.addEventListener('click', function(){

    rulesDiv.style.display = "flex";

});

// document.addEventListener('click',function(){
//      rulesDiv.style.display = "";
// })