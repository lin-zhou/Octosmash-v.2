function movement(app, player, keyCode) {
    var LEFT = player.getLeftKey();
    var UP = player.getUpKey();
    var RIGHT = player.getRightKey();
    var DOWN = player.getDownKey();
    var ATTACK = player.getAttackKey();
    var SIDESTEP = player.getSidestepKey();

    switch (keyCode) {
    
    // Left Movement
    case LEFT:
        player.setLeftMult(-1);
        if (player.getCharacter().getSprite().scale.x < 0) {
            player.turnLeft();
        }
        player.setMovingLeft(true);
        player.setLastKey(LEFT);
        break;

    // Jump
    case UP:
        player.setLastKey(UP);
        player.jump();
        break;

    // Right Movement
    case RIGHT:
        player.setRightMult(1);
        if (player.getCharacter().getSprite().scale.x >= 0) {
            player.turnRight();
        }
        player.setMovingRight(true);
        player.setLastKey(RIGHT);
        break;

    // Fast Fall (unsupported)
    case DOWN:
        player.setLastKey(DOWN);
        break;

    // Attack
    case ATTACK:
        player.setLastKey(ATTACK);
        player.shoot(app);
        break;

    // Sidestep/Shield
    case SIDESTEP:
        player.setLastKey(SIDESTEP);
        if (player.isMoving()) {
            player.sidestep();
        } else if (player.getCharacter().isGrounded()) {
            player.useShield();
            app.stage.addChild(player.getShield());
        }
        break;
    }
}

function stopMove(app, player, keyCode) {
    var LEFT = player.getLeftKey();
    var UP = player.getUpKey();
    var RIGHT = player.getRightKey();
    var DOWN = player.getDownKey();
    var ATTACK = player.getAttackKey();
    var SIDESTEP = player.getSidestepKey();

    switch (keyCode) {
    
    // Left Movement
    case LEFT:
        player.setLeftMult(0);
        player.setMovingLeft(false);
        player.setLastKey(0);
        break;

    // Jump
    case UP:
        player.setLastKey(0);
        break;

    // Right Movement
    case RIGHT:
        player.setRightMult(0);
        player.setMovingRight(false);
        player.setLastKey(0);
        break;

    // Fast Fall (unsupported)
    case DOWN:
        player.setDownMult(0);
        player.setLastKey(0);
        break;

    // Attack
    case ATTACK:
        player.setLastKey(0);
        break;

    // Sidestep/Shield
    case SIDESTEP:
        if (player.isShieldUp()) {
            player.dropShield();
            app.stage.removeChild(player.getShield());
            }
            player.setLastKey(0);
            break;
        }
}

function startFromHT(game, app, keyCode) {
    const START = 32;
    if (keyCode === START) {
        game.handleScene(SceneEnum.HOWTO, SceneEnum.CHARASELECT);
        charaSelect = new CharacterSelect(game, app, 1);
    }
}