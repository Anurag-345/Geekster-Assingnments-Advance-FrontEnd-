

         Array.prototype.containsPrime = function () {

           let count = 0;

           for (let i = 0; i < this.length; i++) {

             if (this[i] == 2) return true;
             
             else {
               for (let j = 2; j < this[i]; j++) {

                 if (this[i] % j == 0) {
                   var res = "the num is not prime";
                   break;
                 }
                  else {
                   var res = "the num is prime";
                   count += 1;
                   break;
                 }
               }
             }
           }

           if (count > 0) {
             return true;
           }
            else {
             return false;
           }
         };

         let a = [4, 4, 4, 4, 4, 1, 3];

         console.log(a.containsPrime());

