class Game
{
    private currency: number;
    private cps: number;
    private clickPower: number;

    private fps: number = 60;
    private intervalId: number;
    
    /**
     * Instances a new game.
     * Ignore all parameters to create a new game.
     * 
     * @param currency The amount of currency the player will have.
     * @param cps The CpS the player will have.
     * @param clickPower The power of the click from the player.
     * @param fps The game FPS. Sets how fluid the game will look.
     */
    constructor(currency: number = 0, cps: number = 0, clickPower: number = 0, fps: number = 60)
    {
        this.currency = currency;
        this.cps = cps;
        this.clickPower = clickPower;

        this.fps = fps;

        this.intervalId = setInterval(this.tick, 1000 / this.fps);
    }

    /**
     * Function called when the player clicks.
     * Increments the currency by the click power the player has.
     */
    public click(): void
    {
        this.currency += this.clickPower;
    }

    /**
     * Function called to update fields that update over time.
     * It's always set after the fps.
     */
    private tick(): void
    {
        this.currency += this.cps / this.fps;
    }

    /**
     * Change the fps of the game.
     * Use higher values for more game updates, increasing animation fluidity.
     * Use lower values (even decimal numbers) to increase browser performance, at the cost of animation fluidity.
     * 
     * @param newFps New FPS that the game should be set to.
     * Only accepts positive numbers (even decimals).
     */
    public changeFps(newFps: number): void
    {
        if(newFps <= 0)
            throw new Error("FPS can only be positive.");

        this.fps = newFps;
        clearInterval(this.intervalId);
        this.intervalId = setInterval(this.tick, 1000 / this.fps);
    }
}