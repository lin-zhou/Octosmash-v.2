// All character name y's are 105.
// All box y's are 125.
const GraphicTexts = Object.freeze({
    ALFYN_TEXT: {"text":"ALFYN", "x":555, "boxX":536},
    CYRUS_TEXT: {"text":"CYRUS", "x":168, "boxX":148},
    HANNIT_TEXT: {"text":"H'ANNIT", "x":743, "boxX":731},
    OLBERIC_TEXT: {"text":"OLBERIC", "x":354, "boxX":342},
    OPHELIA_TEXT: {"text":"OPHELIA", "x":65, "boxX":50},
    PRIMROSE_TEXT: {"text":"PRIMROSE", "x":446, "boxX":439},
    THERION_TEXT: {"text":"THERION", "x":646, "boxX": 633},
    TRESSA_TEXT: {"text":"TRESSA", "x":263, "boxX":245},
    NEXT: {"text":"NEXT", "x":712, "y":421},
    RESELECT: {"text":"RESELECT", "x":59, "y":424}
})

// TO DO: Make graphics for buttons.

// const nextBox = new PIXI.Graphics();
// nextBox.beginFill(0x6f6f6f, 0.6);
// nextBox.drawRect(0, 0, 120, 45);
// nextBox.x = 701;
// nextBox.y = 420;

// const reselectBox = new PIXI.Graphics();
// reselectBox.beginFill(0x6f6f6f, 0.6);
// reselectBox.drawRect(0, 0, 170, 45);
// reselectBox.x = 50;
// reselectBox.y = 420;

// const next = new PIXI.Text("NEXT", nextStyle);
// next.x = 712;
// next.y = 421;

// const activeNext = new PIXI.Text("NEXT", activeNextStyle);
// activeNext.x = 712;
// activeNext.y = 421;

// const reselect = new PIXI.Text("RESELECT", reselectStyle);
// reselect.x = 59;
// reselect.y = 424;

// const activeReselect = new PIXI.Text("RESELECT", activeReselectStyle);
// activeReselect.x = 59;
// activeReselect.y = 424;

// const choose1 = new PIXI.Text("Player One: Choose Your Character", selectStyle);
// choose1.x = 270;
// choose1.y = 430;

let blockBox = new PIXI.Graphics();

class CharacterSelect{

    constructor(game, app) {

        console.log("Character Select Screen");

        this.select = function() {

        }
    
        this.unselect = function() {
    
        }
    
        this.deleteScene = function() {
            
        }

    }

}