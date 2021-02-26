function saveGame()
{
    window.localStorage.setItem("currency", Game.currency);
    window.localStorage.setItem("lastSaved", new Date().toUTCString());
}

function loadGame() 
{
    Game.setCurrency(Number(window.localStorage.getItem("currency")));
}

function eraseGame()
{
    window.localStorage.setItem("currency", 0);
    Game.setCurrency(0);
}

setInterval(saveGame, 60000);