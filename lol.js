console.log('Hello World!')

const gameList = [
    {
        title: 'Christmas Countdown'
    },
    {
        title: 'Ho-Ho Maze!',
    },
    {
        title: `Santa's Busy Day`
    },
    {
        title: `Save Santa`
    },
    {
        title: 'The Worries of Santa Clauses - Demo'
    }
]


const gamesListDiv = document.getElementById('gamesList')

gameList.forEach(game => {
    console.log(game.title)
    const gameP = document.createElement('p')
    gameP.innerText = game.title
    gamesListDiv.appendChild(gameP)

})

