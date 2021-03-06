class Game {
    /**
     * Instances a new game.
     * Ignore all parameters to create a new game.
     *
     * @param currency
     * @param cps
     * @param clickPower
     * @param fps
     */
    constructor(currency = 0, cps = 0, clickPower = 0, fps = 60) {
        this.fps = 60;
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
    click() {
        this.currency += this.clickPower;
    }
    /**
     * Function called to update fields that update over time.
     * It's always set after the fps.
     */
    tick() {
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
    changeFps(newFps) {
        if (newFps <= 0)
            throw new Error("FPS can only be positive.");
        this.fps = newFps;
        clearInterval(this.intervalId);
        this.intervalId = setInterval(this.tick, 1000 / this.fps);
    }
}
