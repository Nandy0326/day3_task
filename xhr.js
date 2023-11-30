
let XMLHttpRequest = require('xhr2');

let xhr = new XMLHttpRequest();

// open the connection
xhr.open('GET', 'https://restcountries.com/v3.1/all');


// function to handle the response from the web server
xhr.onload = function () {
    
    for (let index in JSON.parse(xhr.responseText))
     {
        console.log(JSON.parse(xhr.responseText)[index].name);
        console.log(JSON.parse(xhr.responseText)[index].region);

        console.log(JSON.parse(xhr.responseText)[index].subregion);

        console.log(JSON.parse(xhr.responseText)[index].population);

        

        

    }
}
xhr.send();

