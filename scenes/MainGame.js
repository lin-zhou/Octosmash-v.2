class MainGame {

    constructor(game, app, players) {

        // Theoreticlaly, this scene variable could be used to choose different backgrounds
        // var scene = scene;

        var players = players;
        var gameOver = false;
        var winner;
        var gameOverMessage;
        var damageDisplays = new DamageDisplays(app, players);

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
            var SIDESTEP = players[0].getSidestepKey();

            switch (e.keyCode) {
            
            // Left Movement
            case LEFT:
                players[0].setLeftMult(-1);
                if (players[0].getCharacter().getSprite().scale.x < 0) {
                    players[0].turnLeft();
                }
                players[0].setMovingLeft(true);
                players[0].setLastKey(LEFT);
                break;

            // Jump
            case UP:
                players[0].setLastKey(UP);
                players[0].jump();
                break;

            // Right Movement
            case RIGHT:
                players[0].setRightMult(1);
                if (players[0].getCharacter().getSprite().scale.x >= 0) {
                    players[0].turnRight();
                }
                players[0].setMovingRight(true);
                players[0].setLastKey(RIGHT);
                break;

            // Fast Fall (unsupported)
            case DOWN:
                players[0].setLastKey(DOWN);
                break;

            // Attack
            case ATTACK:
                players[0].setLastKey(ATTACK);
                players[0].shoot(app);
                break;

            // Sidestep/Shield
            case SIDESTEP:
                players[0].setLastKey(SIDESTEP);
                if (players[0].isMoving()) {
                    players[0].sidestep();
                } else if (players[0].getCharacter().isGrounded()) {
                    players[0].useShield();
                    app.stage.addChild(players[0].getShield());
                }
                break;
            }

        }, false);

        window.addEventListener("keyup", (e) => {
            var LEFT = players[0].getLeftKey();
            var UP = players[0].getUpKey();
            var RIGHT = players[0].getRightKey();
            var DOWN = players[0].getDownKey();
            var ATTACK = players[0].getAttackKey();
            var SIDESTEP = players[0].getSidestepKey();

            switch (e.keyCode) {
            
            // Left Movement
            case LEFT:
                players[0].setLeftMult(0);
                players[0].setMovingLeft(false);
                players[0].setLastKey(0);
                break;
    
            // Jump
            case UP:
                players[0].setLastKey(0);
                break;
    
            // Right Movement
            case RIGHT:
                players[0].setRightMult(0);
                players[0].setMovingRight(false);
                players[0].setLastKey(0);
                break;
    
            // Fast Fall (unsupported)
            case DOWN:
                players[0].setDownMult(0);
                players[0].setLastKey(0);
                break;
    
            // Attack
            case ATTACK:
                players[0].setLastKey(0);
                break;
    
            // Sidestep/Shield
            case SIDESTEP:
                if (players[0].isShieldUp()) {
                    players[0].dropShield();
                    app.stage.removeChild(players[0].getShield());
                }
                players[0].setLastKey(0);
                break;
            }

        }, false);

        // PLAYER TWO MOVEMENT
        window.addEventListener("keydown", (e) => {
            var LEFT = players[1].getLeftKey();
            var UP = players[1].getUpKey();
            var RIGHT = players[1].getRightKey();
            var DOWN = players[1].getDownKey();
            var ATTACK = players[1].getAttackKey();
            var SIDESTEP = players[1].getSidestepKey();

            switch (e.keyCode) {
            
            // Left Movement
            case LEFT:
                players[1].setLeftMult(-1);
                if (players[1].getCharacter().getSprite().scale.x < 0) {
                    players[1].turnLeft();
                }
                players[1].setMovingLeft(true);
                players[1].setLastKey(LEFT);
                break;
    
            // Jump
            case UP:
                players[1].setLastKey(UP);
                players[1].jump();
                break;
    
            // Right Movement
            case RIGHT:
                players[1].setRightMult(1);
                if (players[1].getCharacter().getSprite().scale.x >= 0) {
                    players[1].turnRight();
                }
                players[1].setMovingRight(true);
                players[1].setLastKey(RIGHT);
                break;
    
            // Fast Fall (unsupported)
            case DOWN:
                players[1].setLastKey(DOWN);
                break;
    
            // Attack
            case ATTACK:
                players[1].setLastKey(ATTACK);
                players[1].shoot(app);
                break;
    
            // Sidestep/Shield
            case SIDESTEP:
                break;
            }    
    
        }, false);
    
        window.addEventListener("keyup", (e) => {
            var LEFT = players[1].getLeftKey();
            var UP = players[1].getUpKey();
            var RIGHT = players[1].getRightKey();
            var DOWN = players[1].getDownKey();
            var ATTACK = players[1].getAttackKey();
            var SIDESTEP = players[1].getSidestepKey();

            switch (e.keyCode) {
            
                // Left Movement
                case LEFT:
                    players[1].setLeftMult(0);
                    players[1].setMovingLeft(false);
                    players[1].setLastKey(0);
                    break;
    
                // Jump
                case UP:
                    players[1].setLastKey(0);
                    break;
    
                // Right Movement
                case RIGHT:
                    players[1].setRightMult(0);
                    players[1].setMovingRight(false);
                    players[1].setLastKey(0);
                    break;
    
                // Fast Fall (unsupported)
                case DOWN:
                    players[1].setDownMult(0);
                    players[1].setLastKey(0);
                    break;
    
                // Attack
                case ATTACK:
                    players[1].setLastKey(0);
                    break;
    
                // Sidestep/Shield
                case SIDESTEP:
                    players[1].setLastKey(0);
                    break;
                }
    
        }, false);

        app.ticker.add((delta) => {
            for (var i = 0; i < 4; i ++) {
                
                // TEST GAME OVER
                for (var j = 0; j < players.length; j++) {
                    if (isOutOfBounds(players[j].getCharacter().getSprite())) {
                        if (!gameOver) {
                            gameOver = true;
                            if (!isOutOfBounds(players[0].getCharacter().getSprite())) {
                                winner = players[0];
                            } else if (!isOutOfBounds(players[1].getCharacter().getSprite())) {
                                winner = players[1];
                            }
                            gameOverMessage = new PIXI.Text("Player " + winner.getNumber() + " Wins", winnerStyle);
                            gameOverMessage.x = 298;
                            gameOverMessage.y = 280;
                            app.stage.addChild(gameMessage);
                            app.stage.addChild(gameOverMessage);
                        }
                    }
                }

                // UPDATE DAMAGE DISPLAY
                damageDisplays.updateDamageAmt(app, players);

                // CHARACTERS MOVING
                for (var j = 0; j < players.length; j++) {
                    players[j].getCharacter().getSprite().x += (players[j].getLeftMult() + players[j].getRightMult()) * speed;
                    players[j].getCharacter().getSprite().y += players[j].getVel();
                    if (players[j].isMoving() || ! players[j].getCharacter().isGrounded()) {
                        if (players[j].isShieldUp()) {
                            app.stage.removeChild(players[j].getShield());
                        }
                    }
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
                        var kRemoved = false;
                        var magic = players[j].getMagicArr()[k];
                        magic.getSprite().x += (2 * magic.getDirection());
                        for (var l = 0; l < players.length; l++) {
                            if (players[l] != players[j]) {
                                if (isColliding(players[l].getCharacter().getSprite(), magic.getSprite())) {
                                    if (magic.getDirection() >= 0) {
                                        players[l].hitRight();
                                    } else {
                                        players[l].hitLeft();
                                    }
                                    kRemoved = true;
                                    magic.remove(app);
                                    players[j].getMagicArr().splice(k, 1);
                                } else {
                                    for (var m = 0; m < players[l].getMagicArr().length; m++) {
                                        var mag2 = players[l].getMagicArr()[m];
                                        if (isColliding(magic.getSprite(), mag2.getSprite())) {
                                            magic.remove(app);
                                            mag2.remove(app);
                                            players[j].getMagicArr().splice(k, 1);
                                            players[l].getMagicArr().splice(m, 1);
                                        }
                                    }
                                }
                            }
                        }
                        if (!kRemoved) {
                            if (isOffScreen(magic.getSprite())) {
                                magic.remove(app);
                                players[j].getMagicArr().splice(k, 1);
                            }
                        }
                    }
                }
            }

        }, false);

    }

}

const gameMessage = new PIXI.Text("GAME!", gameTextStyle);
gameMessage.x = 278;
gameMessage.y = 180;