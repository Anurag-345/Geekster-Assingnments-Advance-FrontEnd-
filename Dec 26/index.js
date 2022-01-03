const box = document.querySelector('.box-format');
const list = document.querySelector('.list-format');
const listbtn = document.getElementById('listBtn');
const boxbtn = document.getElementById('boxBtn');
const details = document.querySelector('.file_details');

listbtn.addEventListener('click', () => {
   
   box.style.display="none";
   list.style.display = "initial";
   listbtn.style.display = "none";
   boxbtn.style.display = "initial";
    
});

boxbtn.addEventListener('click', () => {
   
   box.style.display="flex";
   list.style.display ="none";
   listbtn.style.display = "initial";
   boxbtn.style.display = "none";
    
});





