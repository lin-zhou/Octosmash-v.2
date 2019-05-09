const SceneEnum = Object.freeze({
    START: "Start",
    HOWTO: "How To",
    CHARASELECT: "Character Select",
    BATTLEFIELD: "Battlefield",
    RECAP: "Recap"
})

class Background {

    constructor() {

        var sprite;

        this.getSprite = function() {
            return sprite;
        }

        this.setSprite = function(scene) {
            switch(scene) {
                case SceneEnum.START:
                    sprite = new PIXI.Sprite.from("images/backgrounds/Start_Screen.png");
                    sprite.scale.x = 0.453;
                    sprite.scale.y = 0.453;
                    break;
                case SceneEnum.HOWTO:
                    sprite = new PIXI.Sprite.from("images/backgrounds/How_To_Background.png");
                    sprite.scale.x = 0.655;
                    sprite.scale.y = 0.655;
                    break;
                case SceneEnum.CHARASELECT:
                    sprite = new PIXI.Sprite.from("images/backgrounds/Character_Select.png");
                    sprite.scale.x = 0.452;
                    sprite.scale.y = 0.452;
                    break;
                case SceneEnum.BATTLEFIELD:
                    sprite = new PIXI.Sprite.from("images/backgrounds/Final_Destination_Stage.png");
                    sprite.scale.x = 0.85;
                    sprite.scale.y = 0.85;
                    break;
                case SceneEnum.RECAP:
                    throw "Currently not supported";
            }
    
        }

        this.update = function(app) {
            app.stage.removeChild(sprite);
            setSprite(newSprite);
        }

    }
    
}