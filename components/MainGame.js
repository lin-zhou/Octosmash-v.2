class MainGame {

    constructor(game, app, players) {

        // Theoreticlaly, this scene variable could be used to choose different backgrounds
        // var scene = scene;

        var playing = true;
        var players = players;
        var gameOver = false;

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

            // Left movement
            if (e.keyCode == LEFT) {
                players[0].setLeftMult(-1);
                if (players[0].getCharacter().getSprite().scale.x < 0) {
                    players[0].turnLeft();
                }
                players[0].setLastKey(LEFT);

            // Jump
            } else if (e.keyCode == UP) {
                players[0].setLastKey(UP);
                players[0].jump();

            // Right movement
            } else if (e.keyCode == RIGHT) {
                players[0].setRightMult(1);
                if (players[0].getCharacter().getSprite().scale.x >= 0) {
                    players[0].turnRight();
                }
                players[0].setLastKey(RIGHT);
            
            // Fast fall - currently not supported
            } else if (e.keyCode == DOWN) {
                players[0].setLastKey(DOWN);

            // Attack
            } else if (e.keyCode == ATTACK) {
                players[0].setLastKey(ATTACK);
                players[0].shoot(app);
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
    
            // Left movement
            if (e.keyCode == LEFT) {
                players[1].setLeftMult(-1);
                if (players[1].getCharacter().getSprite().scale.x < 0) {
                    players[1].turnLeft();
                }
                players[1].setLastKey(LEFT);

            // Jump
            } else if (e.keyCode == UP) {
                players[1].setLastKey(UP);
                players[1].jump();

            // Right movement
            } else if (e.keyCode == RIGHT) {
                players[1].setRightMult(1);
                if (players[1].getCharacter().getSprite().scale.x >= 0) {
                    players[1].turnRight();
                }
                players[1].setLastKey(RIGHT);

            // Fast fall - currently not supported
            } else if (e.keyCode == DOWN) {
                players[1].setLastKey(DOWN);

            // Attack
            } else if (e.keyCode == ATTACK) {
                players[1].setLastKey(ATTACK);
                players[1].shoot(app);
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
                
                // Test if game has ended
                for (var j = 0; j < players.length; j++) {
                    if (isOutOfBounds(players[j].getCharacter().getSprite())) {
                        if (!gameOver) {
                            gameOver = true;
                            alert("Game Over");
                        }
                    }
                }

                // CHARACTERS MOVING
                for (var j = 0; j < players.length; j++) {
                    players[j].getCharacter().getSprite().x += (players[j].getLeftMult() + players[j].getRightMult()) * speed;
                    players[j].getCharacter().getSprite().y += players[j].getVel();
                    if (players[j].getCharacter().isGrounded()) {
                        players[j].setVel(0);
                        players[j].setJumpCount(0);
                    }
                    if (players[j].getVel() < 1.5) {
                        players[j].setVel(players[j].getVel() + acc);
                    }
                    if (players[j].getCharacter().isGrounded()) {
                        players[j].setVel(0);
                        players[j].resetY();
                    }
                    if (players[j].getCharacter().isUnderStage()) {
                        players[j].resetLowY();
                    }
                    for (var k = 0; k < players[j].getMagicArr().length; k++) {
                        var magic = players[j].getMagicArr()[k];
                        magic.getSprite().x += (2 * magic.getDirection());
                        if (isOffScreen(magic.getSprite())) {
                            magic.remove(app);
                            players[j].getMagicArr().splice(k, 1);
                        }
                    }
                }
            }

        }, false);

    }

}