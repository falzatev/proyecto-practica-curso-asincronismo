const fetchData = require('../utils/fetchData');

const API = 'https://rickandmortyapi.com/api/character/';

const anotherFunction = async (api_url) => {
    try {
        const data = await fetchData(api_url);
        const character = await fetchData(`${api_url}${data.results[0].id}`);
        const origin = await fetchData(character.origin.url);
                
        console.log(data.info.count);
        console.log(character.name);
        console.log(origin.dimension);
    } catch (error) {
        console.error(error);
    }
}

console.error('Before');
anotherFunction(API);
console.error('After');
