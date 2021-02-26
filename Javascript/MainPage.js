window.addEventListener("load", setupGame);

function setupGame()
{
    if(window.localStorage.getItem("exists") == null)
        createGameSession();
    else
        retrieveGameSession();
}

function createGameSession()
{
    window.localStorage.setItem("exists", "true");
    Game.currency = 0;

    saveGame();
}

function retrieveGameSession()
{
    loadGame();
}

function currencyClick() 
{
    updateCurrency(Game.click());
}