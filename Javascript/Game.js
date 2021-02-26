var Game = {};

//
// Game variables
//

Game.currency = 0;
Game.clickPower = 1;
Game.cps = 0;

Game.fps = 60;

Game.click = function() { Game.addCurrency(Game.clickPower); }

Game.currencyTick = function() { Game.addCurrency(Game.cps / 60); }

//
// Game setters
//

Game.setCurrency = function(newCurrency)
{
    Game.currency = newCurrency;
    Game.events.fire("currencyChanged", Game.currency);
}

Game.setCps = function(newCps)
{
    Game.cps = newCps;
    Game.events.fire("cpsChanged", Game.cps);
}

//
// Game adders
//

Game.addCurrency = function(quantity) { Game.setCurrency(Game.currency + quantity); }

//
// Events
//
Game.events = {};

Game.events.subscribe = function(eventName, functionReference)
{
    if(!(eventName in Game.events))
        Game.events[eventName] = [];

    Game.events[eventName].push(functionReference);
}

Game.events.unsubscribe = function(eventName, functionReference)
{
    if(eventName in Game.events)
    {
        Game.events = Game.events.filter(
            function (event) 
            {
                if(event !== functionReference)
                    return event;   
            }
        )
    }
}

Game.events.fire = function(eventName, values)
{
    if(eventName in Game.events)
    {
        Game.events[eventName].forEach(
            function (item)
            {
                item.call(item, values);
            }
        );
    }
}