let Access_key = "_r_xam0UkD7T_148G9uD4oUZOGzXD_LgsI1IGCx63pk";
let secret_key = "7aFx00Qn5rxNs6t0UosGdyYxP3fY5rC2H0rGhZ4jSc8";

(function execute() {

    const apiVal = fetch(`https://api.unsplash.com/photos/?client_id=${Access_key}`);
    apiVal.then(Response => Response.json())
    .then(data => { console.log(data);
        data.forEach((element) => {

            const container = document.getElementById('img-container');
            const img_loc = element.links.download;
            const div = document.createElement('div');
            const img = document.createElement('img');
            img.src = img_loc;
            div.appendChild(img);
            container.appendChild(div);
            
        });
        
        
        
    })
    .catch(elem => {
             alert("Something went wrong!");
    }
     
    );
    
})();