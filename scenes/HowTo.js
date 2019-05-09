class HowTo {

    constructor(game, app) {

        console.log("How to Play Screen");

        var selecting = false;

        window.addEventListener("keydown", (e) => {
            const START = 32;
            if (!selecting && e.keyCode === START) {
                selecting = true;
                game.handleScene(SceneEnum.HOWTO, SceneEnum.CHARASELECT);
                charaSelect = new CharacterSelect(game, app, 1);
                // Note to self for future: Remove event listener
            }
        }, false);

    }

}