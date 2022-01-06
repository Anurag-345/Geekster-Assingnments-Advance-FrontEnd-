const heading = document.getElementById('heading');
const rstBtn = document.getElementById('rstBtn');

const gameCells = document.querySelectorAll('.cells');

var isXturn = true;
var count = 0;

rstBtn.addEventListener('click',function(){

    window.location.reload();

});


const checkGameStatus = () => {

    const index0ClassList=gameCells[0].classList;
    const index1ClassList=gameCells[1].classList;
    const index2ClassList=gameCells[2].classList;
    const index3ClassList=gameCells[3].classList;
    const index4ClassList=gameCells[4].classList;
    const index5ClassList=gameCells[5].classList;
    const index6ClassList=gameCells[6].classList;
    const index7ClassList=gameCells[7].classList;
    const index8ClassList=gameCells[8].classList;

    if(index0ClassList.contains('o')){
        if(index1ClassList.contains('o') && index2ClassList.contains('o')){
            alert("O won");
        }
    }
    if(index0ClassList.contains('x')){
        if(index1ClassList.contains('x') && index2ClassList.contains('x')){
            alert("X won");
        }
    }

    if(index3ClassList.contains('o')){
        if(index4ClassList.contains('o') && index5ClassList.contains('o')){
            alert("O won");
        }
    }

    if(index3ClassList.contains('x')){
        if(index4ClassList.contains('x') && index5ClassList.contains('x')){
            alert("X won");
        }
    }



    if(index6ClassList.contains('o')){
        if(index7ClassList.contains('o') && index8ClassList.contains('o')){
            alert("O won");
        }
    }

    if(index6ClassList.contains('x')){
        if(index7ClassList.contains('x') && index8ClassList.contains('x')){
            alert("X won");
        }
    }



    if(index0ClassList.contains('o')){
        if(index3ClassList.contains('o') && index6ClassList.contains('o')){
            alert("O won");
        }
    }

    if(index0ClassList.contains('x')){
        if(index3ClassList.contains('x') && index6ClassList.contains('x')){
            alert("X won");
        }
    }


    if(index1ClassList.contains('o')){
        if(index4ClassList.contains('o') && index7ClassList.contains('o')){
            alert("O won");
        }
    }

    if(index1ClassList.contains('x')){
        if(index4ClassList.contains('x') && index7ClassList.contains('x')){
            alert("X won");
        }
    }


    if(index2ClassList.contains('o')){
        if(index5ClassList.contains('o') && index8ClassList.contains('o')){
            alert("O won");
        }
    }

    if(index2ClassList.contains('x')){
        if(index5ClassList.contains('x') && index8ClassList.contains('x')){
            alert("X won");
        }
    }

    
    if(index0ClassList.contains('o')){
        if(index4ClassList.contains('o') && index8ClassList.contains('o')){
            alert("O won");
        }
    }


    if(index0ClassList.contains('x')){
        if(index4ClassList.contains('x') && index8ClassList.contains('x')){
            alert("X won");
        }
    }
    

    if(index2ClassList.contains('o')){
        if(index4ClassList.contains('o') && index6ClassList.contains('o')){
            alert("O won");
        }
    }

    if(index2ClassList.contains('x')){
        if(index4ClassList.contains('x') && index6ClassList.contains('x')){
            alert("X won");
        }
    }



}


function cellHandler(event){
   const classList= event.target.classList;
   if(classList.length > 1){
       return;
   }
   if(isXturn){
       classList.add("x");
       isXturn = false;
       heading.textContent = "O's turn";
   }
   else{
    classList.add("o");
    isXturn=true;
    heading.textContent = "X's turn";

   }

   count = count+1;
   if(count >= 5){
       checkGameStatus()
   }
  
}

for(cells of gameCells){
    cells.addEventListener('click', cellHandler);
}