class Character {

    constructor (charaName) {

        var sprite;
        var xMod;
        var charaName = charaName;

        switch (charaName) {
            case CharaEnum.ALFYN:
                sprite = new PIXI.Sprite.from("images/character-sprites/Alfyn_Sprite.png");
                sprite.scale.x = .55;
                sprite.scale.y = .55;
                xMod = 2;
                break;
            case CharaEnum.CYRUS:
                sprite = new PIXI.Sprite.from("images/character-sprites/Cyrus_Sprite.png");
                sprite.scale.x = .55;
                sprite.scale.y = .55;
                xMod = 10;
                break;
            case CharaEnum.HANNIT:
                sprite = new PIXI.Sprite.from("images/character-sprites/Hannit_Sprite.png");
                sprite.scale.x = .5;
                sprite.scale.y = .5;
                xMod = 5;
                break;
            case CharaEnum.OLBERIC:
                sprite = new PIXI.Sprite.from("images/character-sprites/Olberic_Sprite.png");
                sprite.scale.x = .54;
                sprite.scale.y = .54;
                xMod = 10;
                break;
            case CharaEnum.OPHELIA:
                sprite = new PIXI.Sprite.from("images/character-sprites/Ophelia_Sprite.png");
                sprite.scale.x = .53;
                sprite.scale.y = .53;
                xMod = 0;
                break;
            case CharaEnum.PRIMROSE:
                sprite = new PIXI.Sprite.from("images/character-sprites/Primrose_Sprite.png");
                sprite.scale.x = .54;
                sprite.scale.y = .54;
                xMod = 0;
                break;
            case CharaEnum.THERION:
                sprite = new PIXI.Sprite.from("images/character-sprites/Therion_Sprite.png");
                sprite.scale.x = .58;
                sprite.scale.y = .58;
                xMod = 7;
                break;
            case CharaEnum.TRESSA:
                sprite = new PIXI.Sprite.from("images/character-sprites/Tressa_Sprite.png");
                sprite.scale.x = .54;
                sprite.scale.y = .54;
                xMod = 0;
                break;
    
        }

        this.getName = function() {
            return charaName;
        }

        this.getSprite = function() {
            return sprite;
        }

        this.getXMod = function() {
            return xMod;
        }
        
        this.setXMod = function(newXMod) {
            xMod = newXMod;
        }

        this.facingLeft = function() {
            return sprite.scale.x >= 0;
        }

        this.isGrounded = function() {
            return ((this.facingLeft() && sprite.y >= 205 && sprite.y < 207 && sprite.x > 62 && sprite.x < 718) ||
                !this.facingLeft() && sprite.y >= 205 && sprite.y < 207 && sprite.x > 135 && sprite.x < 788);
        }

    }

}