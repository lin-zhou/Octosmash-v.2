class Game {

    constructor(background) {

        const app = new PIXI.Application(1024 * .85, 576 * .85);
        document.body.appendChild(app.view);

        var background = background;
        var players;

        app.stage.addChild(background.getSprite());

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

    }

}