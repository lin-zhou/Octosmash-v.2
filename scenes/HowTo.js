class HowTo {

    constructor(game, app) {

        console.log("How to Play Screen");

        function handleStart(e) {
            startFromHT(game, app, e.keyCode);
        }

        window.addEventListener("keydown", handleStart);

        this.deleteScene = function() {
            window.removeEventListener("keydown", handleStart);
        }

    }

}