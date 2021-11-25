const cardGenerator = object => {
    const card = document.createElement('div');
    card.classList.add('card')
  
    card.innerHTML = `        
            <div class="image">
                <img id="card__image" src="${object.image}" alt="image of ${object.name}">
            </div>
            <div class="description">
                <h1 class="description__title">${object.name}</h1>
                <label class="description__status">${object.status}</label>
                <label class="description__species">${object.species}</label>
                <div class="origin">
                    <p class="origin__title">Character origin:</p>
                    <p class="origin__name">${object.origin.name}</p>
                </div>
            </div>        
    `;
  
    return card;
  }