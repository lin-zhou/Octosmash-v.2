class Background {

    constructor(sprite) {
        this.sprite = sprite;

        this.getSprite = function() {
            return sprite;
        }

    }
    
}

const SceneEnum = Object.freeze({
    START: "start",
    CHARASELECT: "character select",
    BATTLEFIELD: "battlefield",
    RECAP: "recap"
})