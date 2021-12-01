const cardsContent = document.getElementById('card-container');

const API = 'https://rickandmortyapi.com/api/character/';
const maxPageForAPI = 25;
const apiPage = '?page=:page';
const characters = [];

const characteresFunction = async (page) => {
    try {
        const { results } = await fetchData(`${API}${apiPage.replace(':page', `${page}`)}`);
        console.log(results);
        results.map(character => {
            const card = cardGenerator(character);
            cardsContent.appendChild(card);
        });
        
    } catch (error) {
        console.error(new Error(error));
    }
}

(function() {
    for (let i = 1; i <= maxPageForAPI; i++) {
        characteresFunction(i);
    }
  })();
