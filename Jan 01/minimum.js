

        const minimum = (...a) =>{
            let min = a[0];
            for(let i = 0; i < a.length; i++){
                if(a[i] < min){
                    min = a[i];
                }
            }
            return min;
        }

        
        let s = minimum(4, 5, 6, 4, 5, 6, 6, 4, 4);
        console.log(s);


       

       


