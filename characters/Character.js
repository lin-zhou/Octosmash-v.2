class Character {

    constructor (charaName) {

        var sprite;
        var xMod;
        var charaName;

        switch (charaName) {
            case "alfyn":
                sprite = new PIXI.Sprite.from("images/character-sprites/Alfyn_Sprite.png");
                sprite.scale.x = .55;
                sprite.scale.y = .55;
                xMod = 2;
                charaName = "Alfyn";
                break;
            case "cyrus":
                sprite = new PIXI.Sprite.from("images/character-sprites/Cyrus_Sprite.png");
                sprite.scale.x = .55;
                sprite.scale.y = .55;
                xMod = 10;
                charaName = "Cyrus";
                break;
            case "hannit":
                sprite = new PIXI.Sprite.from("images/character-sprites/Hannit_Sprite.png");
                sprite.scale.x = .5;
                sprite.scale.y = .5;
                xMod = 5;
                charaName = "H'annit";
                break;
            case "olberic":
                sprite = new PIXI.Sprite.from("images/character-sprites/Olberic_Sprite.png");
                sprite.scale.x = .54;
                sprite.scale.y = .54;
                xMod = 10;
                charaName = "Olberic";
                break;
            case "ophelia":
                sprite = new PIXI.Sprite.from("images/character-sprites/Ophelia_Sprite.png");
                sprite.scale.x = .53;
                sprite.scale.y = .53;
                xMod = 0;
                charaName = "Ophelia";
                break;
            case "primrose":
                sprite = new PIXI.Sprite.from("images/character-sprites/Primrose_Sprite.png");
                sprite.scale.x = .54;
                sprite.scale.y = .54;
                xMod = 0;
                charaName = "Primrose";
                break;
            case "therion":
                sprite = new PIXI.Sprite.from("images/character-sprites/Therion_Sprite.png");
                sprite.scale.x = .58;
                sprite.scale.y = .58;
                xMod = 7;
                charaName = "Therion";
                break;
            case "tressa":
                sprite = new PIXI.Sprite.from("images/character-sprites/Tressa_Sprite.png");
                sprite.scale.x = .54;
                sprite.scale.y = .54;
                xMod = 0;
                charaName = "Tressa";
                break;
    
        }

        this.getName = function() {
            console.log(charName);
            return charName;
        }
        this.getSprite = function() {
            return sprite;
        }
        this.getXMod = function() {
            return xMod;
        }
        this.setXMod = function(xMod) {
            this.xMod = xMod;
        }

    }

}