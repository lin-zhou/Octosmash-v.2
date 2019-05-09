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

        var leftMult = 0;
        var upMult = 0;
        var rightMult = 0;
        var downMult = 0;
        var lastKey = 0;

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

        this.getLeftMult = function() {
            return leftMult;
        }

        this.setLeftMult = function(mult) {
            leftMult = mult;
        }

        this.getUpMult = function() {
            return upMult;
        }

        this.setUptMult = function(mult) {
            upMult = mult;
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

        this.setDowntMult = function(mult) {
            downMult = mult;
        }

        this.getLastKey = function() {
            return lastKey;
        }

        this.setLastKey = function(last) {
            lastKey = last;
        }

    }

}