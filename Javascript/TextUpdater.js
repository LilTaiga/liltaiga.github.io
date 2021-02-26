function updateCurrency(newValue)
{
    document.getElementById("currencyText").innerText = Math.floor(newValue);
}

function updateCPS(newValue)
{
    document.getElementById("cpsText").innerText = newValue;
}

Game.events.subscribe("currencyChanged", updateCurrency);
Game.events.subscribe("cpsChanged", updateCPS);