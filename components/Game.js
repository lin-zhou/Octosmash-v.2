class Game {

    constructor() {

        const app = new PIXI.Application(1024 * .85, 576 * .85);
        document.body.appendChild(app.view);

        var background = new Background();
        var players;

        background.setSprite(SceneEnum.START);
        app.stage.addChild(background.getSprite());

        const start = new Start(this, app);

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

        this.setPlayers = function(players) {
            this.players = players;
        }

        this.getNumPlayers = function() {
            return players.length;
        }

        this.handleScene = function(curScene, nextScene) {
            console.log("Changing scenes from " + curScene + " to " + nextScene);
            app.stage.removeChild(background.getSprite());
            switch(curScene) {
                case SceneEnum.START:
                    start.deleteScene();
                    break;
                case SceneEnum.HOWTO:
                    // Nothing additional to get rid of.
                    break;
                case SceneEnum.CHARASELECT:
                    charaSelect.deleteScene();
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