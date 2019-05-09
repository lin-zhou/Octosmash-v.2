class MainGame {

    constructor(game, app, players) {

        // Theoreticlaly, this scene variable could be used to choose different backgrounds
        // var scene = scene;

        var playing = true;
        var players = players;

        // NUMBERS FOR MOTION
        const speed = 1.5;
        const acc = 0.08;

        for (var i = 0; i < players.length; i++) {
            app.stage.addChild(players[i].getCharacter().getSprite());
        }

        // Note: Maybe use a loop for all players

        // PLAYER ONE MOVEMENT
        window.addEventListener("keydown", (e) => {
            var LEFT = players[0].getLeftKey();
            var UP = players[0].getUpKey();
            var RIGHT = players[0].getRightKey();
            var DOWN = players[0].getDownKey();
            var ATTACK = players[0].getAttackKey();

            if (e.keyCode == LEFT) {
                players[0].setLeftMult(-1);
                if (players[0].getCharacter().getSprite().scale.x < 0) {
                    players[0].getCharacter().turnLeft();
                }
                players[0].setLastKey(LEFT);
            } else if (e.keyCode == UP) {
                players[0].setLastKey(UP);
            } else if (e.keyCode == RIGHT) {
                players[0].setRightMult(1);
                if (players[0].getCharacter().getSprite().scale.x >= 0) {
                    players[0].getCharacter().turnRight();
                }
                players[0].setLastKey(RIGHT);
            } else if (e.keyCode == DOWN) {
                players[0].setLastKey(DOWN);
            } else if (e.keyCode == ATTACK) {
                players[0].setLastKey(ATTACK);
            }

        }, false);

        window.addEventListener("keyup", (e) => {
            var LEFT = players[0].getLeftKey();
            var UP = players[0].getUpKey();
            var RIGHT = players[0].getRightKey();
            var DOWN = players[0].getDownKey();
            var ATTACK = players[0].getAttackKey();

            if (e.keyCode == LEFT) {
                players[0].setLeftMult(0);
                players[0].setLastKey(0);
            } else if (e.keyCode == UP) {
                players[0].setUpMult(0);
                players[0].setLastKey(0);
            } else if (e.keyCode == RIGHT) {
                players[0].setRightMult(0);
                players[0].setLastKey(0);
            } else if (e.keyCode == DOWN) {
                players[0].setDownMult(0);
                players[0].setLastKey(0);
            } else if (e.keyCode == ATTACK) {
                players[0].setLastKey(0);
            }

        }, false);

        // PLAYER TWO MOVEMENT
        window.addEventListener("keydown", (e) => {
            var LEFT = players[1].getLeftKey();
            var UP = players[1].getUpKey();
            var RIGHT = players[1].getRightKey();
            var DOWN = players[1].getDownKey();
            var ATTACK = players[1].getAttackKey();
    
            if (e.keyCode == LEFT) {
                players[1].setLeftMult(-1);
                if (players[1].getCharacter().getSprite().scale.x < 0) {
                    players[1].getCharacter().turnLeft();
                }
                players[1].setLastKey(LEFT);
            } else if (e.keyCode == UP) {
                players[1].setLastKey(UP);
            } else if (e.keyCode == RIGHT) {
                players[1].setRightMult(1);
                if (players[1].getCharacter().getSprite().scale.x >= 0) {
                    players[1].getCharacter().turnRight();
                }
                players[1].setLastKey(RIGHT);
            } else if (e.keyCode == DOWN) {
                players[1].setLastKey(DOWN);
            } else if (e.keyCode == ATTACK) {
                players[1].setLastKey(ATTACK);
            }
    
        }, false);
    
        window.addEventListener("keyup", (e) => {
            var LEFT = players[1].getLeftKey();
            var UP = players[1].getUpKey();
            var RIGHT = players[1].getRightKey();
            var DOWN = players[1].getDownKey();
            var ATTACK = players[1].getAttackKey();
    
            if (e.keyCode == LEFT) {
                players[1].setLeftMult(0);
                players[1].setLastKey(0);
            } else if (e.keyCode == UP) {
                players[1].setUpMult(0);
                players[1].setLastKey(0);
            } else if (e.keyCode == RIGHT) {
                players[1].setRightMult(0);
                players[1].setLastKey(0);
            } else if (e.keyCode == DOWN) {
                players[1].setDownMult(0);
                players[1].setLastKey(0);
            } else if (e.keyCode == ATTACK) {
                players[1].setLastKey(0);
            }
    
        }, false);

        app.ticker.add((delta) => {
            for (var i = 0; i < 4; i ++) {
                
                // Test if game has ended, etc.

                // CHARACTERS MOVING
                for (var j = 0; j < players.length; j++) {
                    players[j].getCharacter().getSprite().x += (players[j].getLeftMult() + players[j].getRightMult()) * speed;
                }

            }

        }, false);

    }

}