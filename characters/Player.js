class Player {

    constructor(name, number) {

        if (name == null) {
            name = "P" + number;
        } else {
            var name;
        }
        var number = number;
        var character;
        var startX;
        var startY = 205;

        switch (number) {
        case 1:
            startX = 210 + character.getXMod();
            if(character.getSprite().x >= 0) {
                character.getSprite().x *= -1;
            }
            break;
        case 2:
            character.setXMod(character.getXMod() *= -1);
            startX = 655 + character.getXMod();
            break;
        }

        this.getNumber = function() {
            return number;
        }

        this.getCharacter = function() {
            return character;
        }

        this.setCharacter = function(character) {
            this.character = character;
        }

        this.getStartX = function() {
            return startX;
        }

        this.getStartY = function() {
            return startY;
        }

        this.setName = function(newName) {
            name = newName;
        }

    }

    // Default start location based on number and character modifiers
}