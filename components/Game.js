class Game {

    constructor() {

        const app = new PIXI.Application(1024 * .85, 576 * .85);
        document.body.appendChild(app.view);

        var background = new Background();
        var players;

        background.setSprite(SceneEnum.START);
        app.stage.addChild(background.getSprite());

        const start = new Start(app, this);

        this.getApp = function() {
            return app;
        }

        this.setBackground = function(scene) {
            app.stage.removeChild(background.getSprite());
            background.setSprite(scene);
            app.stage.addChild(background.getSprite());
        }

        this.getBackground = function() {
            return background.getSprite();
        }
    
        this.getPlayers = function() {
            return players;
        }

        this.getNumPlayers = function() {
            return players.length;
        }

        this.handleScene = function(curScene, nextScene) {
            app.stage.removeChild(background.getSprite());
            switch(curScene) {
                case SceneEnum.START:
                    start.deleteScene();
                    break;
                case SceneEnum.HOWTO:
                    break;
                case SceneEnum.CHARASELECT:
                    break;
                case SceneEnum.BATTLEFIELD:
                    break;
                case SceneEnum.RECAP:
                    throw "Currently not supported";
            }
            this.setBackground(nextScene);
        }

    }

}