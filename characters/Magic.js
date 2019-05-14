class Magic {

    constructor(x, y) {

        var sprite = new PIXI.Sprite.from(magicTexture);
        var direction = 1;

        sprite.x = x;
        sprite.y = y;

        this.getSprite = function() {
            return sprite;
        }

        this.getDirection = function() {
            return direction;
        }

        this.flipDirection = function() {
            direction = -1;
        }

    }

}

const magicTexture = new PIXI.Texture.from("images/combat/Magic_Blast.png");