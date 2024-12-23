console.log('Hello World!')
const gamesDiv = document.getElementById('gamesDiv')
const recipesDiv = document.getElementById('recipesDiv')

const gamesList = document.createElement('ul')

games.forEach(game => {
    const gameLi = document.createElement('li')
    gameLi.innerText = game.title
    gamesList.appendChild(gameLi)
})

const recipeList = document.createElement('ul')

recipes.forEach(recipe => {
    const recipeLi = document.createElement('li');
    recipeLi.innerText = recipe
    recipeList.appendChild(recipeLi)
})

gamesDiv.append(gamesList)
recipesDiv.append(recipeList)
