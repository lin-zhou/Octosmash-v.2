class Character {

    constructor (charName) {

        switch (charName) {
            case "alfyn":
                var sprite = new PIXI.Sprite.from("images/character-sprites/Alfyn_Sprite.png");
                sprite.scale.x = .55;
                sprite.scale.y = .55;
                break;
            case "cyrus":
                var sprite = new PIXI.Sprite.from("images/character-sprites/Cyrus_Sprite.png");
                sprite.scale.x = .55;
                sprite.scale.y = .55;
                break;
            case "hannit":
                var sprite = new PIXI.Sprite.from("images/character-sprites/Hannit_Sprite.png");
                sprite.scale.x = .5;
                sprite.scale.y = .5;
                break;
            case "olberic":
                var sprite = new PIXI.Sprite.from("images/character-sprites/Olberic_Sprite.png");
                sprite.scale.x = .54;
                sprite.scale.y = .54;
                break;
            case "ophelia":
                var sprite = new PIXI.Sprite.from("images/character-sprites/Ophelia_Sprite.png");
                sprite.scale.x = .53;
                sprite.scale.y = .53;
                break;
            case "primrose":
                var sprite = new PIXI.Sprite.from("images/character-sprites/Primrose_Sprite.png");
                sprite.scale.x = .54;
                sprite.scale.y = .54;
                break;
            case "therion":
                var sprite = new PIXI.Sprite.from("images/character-sprites/Therion_Sprite.png");
                sprite.scale.x = .58;
                sprite.scale.y = .58;
                break;
            case "tressa":
                var sprite = new PIXI.Sprite.from("images/character-sprites/Tressa_Sprite.png");
                sprite.scale.x = .54;
                sprite.scale.y = .54;
                break;
    
        }

        this.getName = function() {
            console.log(charName);
            return charName;
        }
        this.getSprite = function() {
            return sprite;
        }

    }

}