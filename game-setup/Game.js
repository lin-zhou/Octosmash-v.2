class Game {

    constructor(scene, numPlayers) {

        this.scene = scene;

    }

}

const SceneEnum = Object.freeze({
    START: "start",
    CHARASELECT: "character select",
    BATTLEFIELD: "battlefield",
    RECAP: "recap"
})