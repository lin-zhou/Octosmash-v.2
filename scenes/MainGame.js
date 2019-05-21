class MainGame {

    constructor(game, app) {

        // Theoreticlaly, this scene variable could be used to choose different backgrounds
        // var scene = scene;

        for (var i = 0; i < players.length; i++) {
            players[i].reset();
        }
        var refreshed = false;
        var gameOver = false;
        var winner = null;
        var gameOverMessage;
        var damageDisplays = new DamageDisplays(app, players);
        var numOutOfBounds = 0;

        // NUMBERS FOR MOTION
        const speed = 1.5;
        const acc = 0.08;

        for (var i = 0; i < players.length; i++) {
            app.stage.addChild(players[i].getCharacter().getSprite());
        }

        // Note: Maybe use a loop for all players

        // PLAYER ONE MOVEMENT
        function p1Movement(e) {
            if (e.type == "keydown") {
                movement(app, players[0], e.keyCode);
            } else if (e.type == "keyup") {
                stopMove(app, players[0], e.keyCode);
            }
        }
        
        window.addEventListener("keydown", p1Movement);

        window.addEventListener("keyup", p1Movement);

        // PLAYER TWO MOVEMENT
        function p2Movement(e) {
            if (e.type == "keydown") {
                movement(app, players[1], e.keyCode);
            } else if (e.type == "keyup") {
                stopMove(app, players[1], e.keyCode);
            }
        }
       
        window.addEventListener("keydown", p2Movement);
    
        window.addEventListener("keyup", p2Movement);

        // ADDITIONAL PLAYER MOVEMENTS (if applicable)
        switch (players.length) {

        // PLAYER FOUR MOVEMENT
        case 4:
            function p4Movement(e) {
                if (e.type == "keydown") {
                    movement(app, players[3], e.keyCode);
                } else if (e.type == "keyup") {
                    stopMove(app, players[3], e.keyCode);
                }
            }
            
            window.addEventListener("keydown", p4Movement);
        
            window.addEventListener("keyup", p4Movement);

        // PLAYER THREE MOVEMENT
        case 3:
            function p3Movement(e) {
                if (e.type == "keydown") {
                    movement(app, players[2], e.keyCode);
                } else if (e.type == "keyup") {
                    stopMove(app, players[2], e.keyCode);
                }
            }
            
            window.addEventListener("keydown", p3Movement);
        
            window.addEventListener("keyup", p3Movement);

            break;
        }

        // TICKER FUNCTION
        function update(delta) {
            for (var i = 0; i < 4; i ++) {
                
                // GAME OVER CONDITIONS
                for (var j = 0; j < players.length; j++) {
                    if (isOutOfBounds(players[j].getCharacter().getSprite()) && !players[j].isOut()) {
                        players[j].knockedOut();
                        numOutOfBounds++;
                    }
                }

                if ((players.length == 2 && numOutOfBounds == 1) ||
                    (players.length == 3 && numOutOfBounds == 2) ||
                    (players.length == 4 && numOutOfBounds == 3)) {
                    for (var j = 0; j < players.length; j++) {
                        if (!gameOver) {
                            if (!isOutOfBounds(players[j].getCharacter().getSprite())) {
                                var testChars = notThisPlayer(players[j], players);
                                if (allOut(testChars)) {
                                    gameOver = true;
                                    winner = players[j];
                                    gameOverMessage = new PIXI.Text("Player " + winner.getNumber() + " Wins", winnerStyle);
                                    gameOverMessage.x = 298;
                                    gameOverMessage.y = 280;
                                    app.stage.addChild(gameMessage);
                                    app.stage.addChild(gameOverMessage);
                                }
                            }
                        }
                    }
                }

                    // if (isOutOfBounds(players[j].getCharacter().getSprite())) {
                    //     if (!gameOver) {
                    //         gameOver = true;
                    //         if (!isOutOfBounds(players[0].getCharacter().getSprite())) {
                    //             winner = players[0];
                    //         } else if (!isOutOfBounds(players[1].getCharacter().getSprite())) {
                    //             winner = players[1];
                    //         }
                    //         gameOverMessage = new PIXI.Text("Player " + winner.getNumber() + " Wins", winnerStyle);
                    //         gameOverMessage.x = 298;
                    //         gameOverMessage.y = 280;
                    //         app.stage.addChild(gameMessage);
                    //         app.stage.addChild(gameOverMessage);
                    //     }
                    // }

                // HANDLE GAME OVER
                if (gameOver) {
                    if (!refreshed) {
                        app.stage.addChild(playAgain);
                        app.stage.addChild(orRefresh);
                    }

                    window.addEventListener("keydown", (e) => {
                        const REPLAY = 13;
                        if (!refreshed && e.keyCode == REPLAY) {
                            refreshed = true;
                            game.handleScene(SceneEnum.BATTLEFIELD, SceneEnum.BATTLEFIELD);
                            mainGame = new MainGame(game, app);
                        }
                    })

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

                    // Magic Collisions
                    for (var k = 0; k < players[j].getMagicArr().length; k++) {
                        var kRemoved = false;
                        var magic = players[j].getMagicArr()[k];
                        magic.getSprite().x += (2 * magic.getDirection());
                        for (var l = 0; l < players.length; l++) {
                            if (players[l] != players[j]) {
                                if (isColliding(players[l].getCharacter().getSprite(), magic.getSprite())) {
                                    if (!players[l].isShieldUp()) {
                                        if (magic.getDirection() >= 0) {
                                            players[l].hitRight();
                                        } else {
                                            players[l].hitLeft();
                                        }
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
        }

        app.ticker.add(update, this);

        this.deleteScene = function() {
            // Note: Remove event listeners
            for (var i = 0; i < players.length; i++) {
                app.stage.removeChild(players[i].getCharacter().getSprite());
            }
            damageDisplays.remove(app);
            app.stage.removeChild(gameMessage);
            app.stage.removeChild(gameOverMessage);
            app.stage.removeChild(playAgain);
            app.stage.removeChild(orRefresh);
            app.ticker.remove(update, this);
            window.removeEventListener("keydown", p1Movement);
            window.removeEventListener("keyup", p1Movement);
            window.removeEventListener("keydown", p2Movement);
            window.removeEventListener("keyup", p2Movement);
        }

    }

}

const gameMessage = new PIXI.Text("GAME!", gameTextStyle);
gameMessage.x = 278;
gameMessage.y = 180;

const playAgain = new PIXI.Text("Press ENTER to play again", playAgainStyle);
playAgain.x = 327;
playAgain.y = 330;

const orRefresh = new PIXI.Text("or refresh to choose new characters", playAgainStyle);
orRefresh.x = 293;
orRefresh.y = 350;