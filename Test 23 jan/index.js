const api = fetch("http://universities.hipolabs.com/search");

api.then(response => {
    return response.json();
})
.then(data => {
    console.log(data[0]);
});


