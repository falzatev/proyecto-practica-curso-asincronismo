const fetchData = require('../utils/fetchData');

const API = 'https://rickandmortyapi.com/api/character/';

// *************************Mi solución ***********************
fetchData(API)
.then(response => {
    console.log('total: ' + response.info.count);
    fetchData(API + response.results[0].id)
    .then(response2 => {
        console.log('name: ' + response2.name);
        fetchData(response2.origin.url)
        .then(response3 => {
            console.log('dimension: ' + response3.dimension);
        })
        .catch(error3 => console.log(error3));
    })
    .catch(error2 => console.error(error2));
})
.catch(error1 => console.error(error1));



// ******************solución del profesor **************************

fetchData(API)
.then(data => {
    console.log(data.info.count);
    return fetchData(`${API}${data.results[0].id}`)
})
.then(data => {
    console.log(data.name);
    return fetchData(data.origin.url)
})
.then(data => {
    console.log(data.dimension);
})
.catch(error => console.log(error));
