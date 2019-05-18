class Player {

    constructor(number) {

        var name = null;
        var number = number;
        var character;
        var startX;
        var startY = 205;

        var left;
        var up;
        var right;
        var down;
        var attack;
        var sidestep;

        var leftMult = 0;
        var rightMult = 0;
        var downMult = 0;
        var lastKey = 0;

        var jumpCount = 0;
        var vel = 0;

        var canShoot = true;
        var magicArr = [];

        var damage = 0;

        var shieldUp = false;
        var shield;

        var movingLeft = false;
        var movingRight = false;

        switch (number) {
        case 1:
            shield = new PIXI.Sprite.from("images/combat/Red_Shield.png");
            break;
        case 2:
            shield = new PIXI.Sprite.from("images/combat/Blue_Shield.png");
            break;
        case 3:
            break;
        case 4:
            break;
        }

        shield.scale.x = 0.2;
        shield.scale.y = 0.2;
        shield.alpha = 0.6;

        this.getName = function() {
            return name;
        }

        this.setName = function(newName) {
            name = newName;
        }

        this.getNumber = function() {
            return number;
        }

        this.getCharacter = function() {
            return character;
        }

        this.setCharacter = function(newChara) {
            character = newChara;
            this.updateCharacterDetails();
        }

        this.updateCharacterDetails = function() {
            switch (number) {
                case 1:

                    startX = 206 + character.getXMod();
                    if (character.getSprite().scale.x >= 0) {
                        character.getSprite().scale.x *= -1;
                    }
                    character.getSprite().x = startX;
                    character.getSprite().y = startY;

                    left = 65;
                    up = 87;
                    right = 68;
                    down = 83;
                    attack = 51;
                    sidestep = 82;

                    break;

                case 2:

                    character.setXMod(-(character.getXMod()));
                    startX = 655 + character.getXMod();
                    character.getSprite().x = startX;
                    character.getSprite().y = startY;

                    left = 37;
                    up = 38;
                    right = 39;
                    down = 40;
                    attack = 191;
                    sidestep = 188;

                    break;

                }
        }

        this.getStartX = function() {
            return startX;
        }

        this.getStartY = function() {
            return startY;
        }

        this.getLeftKey = function() {
            return left;
        }

        this.getUpKey = function() {
            return up;
        }

        this.getRightKey = function() {
            return right;
        }

        this.getDownKey = function() {
            return down;
        }

        this.getAttackKey = function() {
            return attack;
        }

        this.getSidestepKey = function() {
            return sidestep;
        }

        this.getLeftMult = function() {
            return leftMult;
        }

        this.setLeftMult = function(mult) {
            leftMult = mult;
        }

        this.getRightMult = function() {
            return rightMult;
        }

        this.setRightMult = function(mult) {
            rightMult = mult;
        }

        this.getDownMult = function() {
            return downMult;
        }

        this.setDownMult = function(mult) {
            downMult = mult;
        }

        this.getLastKey = function() {
            return lastKey;
        }

        this.setLastKey = function(last) {
            lastKey = last;
        }

        this.turnLeft = function() {
            character.getSprite().scale.x *= -1;
            character.getSprite().x -= 65;
        }

        this.turnRight = function() {
            character.getSprite().scale.x *= -1;
            character.getSprite().x += 65;
        }

        this.jump = function() {
            if (jumpCount < 2) {
                vel = -4;
                jumpCount++;
            }
        }

        this.setJumpCount = function(newCt) {
            jumpCount = newCt;
        }

        this.getVel = function() {
            return vel;
        }

        this.setVel = function(newVel) {
            vel = newVel;
        }

        this.resetY = function() {
            character.getSprite().y = startY;
        }

        this.resetLowY = function() {
            character.getSprite().y = 295;
        }

        this.shoot = function(app) {
            if (canShoot) {
                canShoot = false;
                var magic = new Magic(character.getSprite().x - 15, character.getSprite().y + 15);
                if (character.facingLeft()) {
                    magic.flipDirection();
                } else {
                    magic.getSprite().scale.x = -1;
                }
                magicArr.push(magic);
                app.stage.addChild(magic.getSprite());
                setTimeout(function () {
                    canShoot = true;
                }, 250)
            }
        }

        this.getMagicArr = function() {
            return magicArr;
        }

        this.getDamage = function() {
            return damage;
        }

        this.setMovingLeft = function(boolean) {
            movingLeft = boolean;
        }

        this.setMovingRight = function(boolean) {
            movingRight = boolean;
        }

        this.isMoving = function() {
            return (movingLeft || movingRight);
        }

        this.hitRight = function() {
            character.getSprite().x += 30 + (damage * 5);
            damage += 2;
        }

        this.hitLeft = function() {
            character.getSprite().x -= 30 + (damage * 5);
            damage += 2;
        }

        this.isShieldUp = function() {
            return shieldUp;
        }

        this.getShield = function() {
            return shield;
        }

        this.sidestep = function() {
            if (character.facingLeft()) {
                character.getSprite().x -= 30;
            } else {
                character.getSprite().x += 30;
            }
        }

        this.useShield = function() {
            if (!shieldUp) {
                shieldUp = true;

                shield.y = character.getSprite().y;
                var leftMod;

                if (character.facingLeft()) {
                    leftMod = -1;
                    if (shield.scale.x < 0) {
                        shield.scale.x *= -1;
                    }
                } else {
                    leftMod = 1;
                    if (shield.scale.x >= 0) {
                        shield.scale.x *= -1;
                    }
                }

                switch (character.getName()) {
                case "Alfyn":
                    shield.x = character.getSprite().x + (leftMod * 15);
                    shield.y += 2;
                    break;
                case "Cyrus":
                    shield.x = character.getSprite().x + (leftMod * 2);
                    break;
                case "H'annit":
                    break;
                case "Olberic":
                    shield.x = character.getSprite().x + (leftMod * 3);
                    shield.y -= 1;
                    break;
                case "Therion":
                    shield.x = character.getSprite().x + (leftMod * 8);
                    break;
                default:
                    shield.x = character.getSprite().x + (leftMod * 12);
                    break;
                }
            }
        }

        this.dropShield = function() {
            shieldUp = false;
        }

    }

}