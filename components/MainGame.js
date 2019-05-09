class MainGame {

    constructor(game, app, players) {

        // Theoreticlaly, this scene variable could be used to choose different backgrounds
        // var scene = scene;

        var players = players;

        for (var i = 0; i < players.length; i++) {
            app.stage.addChild(players[i].getCharacter().getSprite());
        }

    }

}