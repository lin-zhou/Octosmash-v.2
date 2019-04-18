const SceneEnum = Object.freeze({
    START: "start",
    HOWTO: "how to",
    CHARASELECT: "character select",
    BATTLEFIELD: "battlefield",
    RECAP: "recap"
})

class Background {

    constructor(scene) {

        switch(scene) {
            case SceneEnum.START:
                var sprite = new PIXI.Sprite.from("images/backgrounds/Start_Screen.png");
                break;
            case SceneEnum.HOWTO:
                var sprite = new PIXI.Sprite.from("images/backgrounds/How_To_Background.png");
                sprite.scale.x = 0.655;
                sprite.scale.y = 0.655;
                break;
            case SceneEnum.CHARASELECT:
                var sprite = new PIXI.Sprite.from("images/backgrounds/Character_Select.png");
                break;
            case SceneEnum.BATTLEFIELD:
                var sprite = new PIXI.Sprite.from("images/backgrounds/Final_Destination.png");
                break;
            case SceneEnum.RECAP:
                throw "Currently not supported";
        }

        this.getSprite = function() {
            return sprite;
        }

        this.setSprite = function(sprite) {
            this.sprite = sprite;
        }

    }

    update = function(app) {
        app.stage.removeChild(sprite);
    }
    
}