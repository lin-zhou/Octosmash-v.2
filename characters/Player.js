class Player {

    constructor(number) {

        var name = null;
        var number = number;
        var character;
        var startX;
        var startY = 205;

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
                    break;
                case 2:
                    character.setXMod(-(character.getXMod()));
                    startX = 655 + character.getXMod();
                    character.getSprite().x = startX;
                    character.getSprite().y = startY;
                    break;
                }
        }

        this.getStartX = function() {
            return startX;
        }

        this.getStartY = function() {
            return startY;
        }

    }

    // Default start location based on number and character modifiers
}