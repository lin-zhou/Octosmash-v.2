class HowTo {

    constructor(app, game) {


        window.addEventListener("keydown", (e) => {
            console.log("To character selection screen.");
            const START = 32;
            if (e.keyCode === START) {
                game.handleScene(SceneEnum.HOWTO, SceneEnum.CHARASELECT);
            }
        }, false);

    }

}