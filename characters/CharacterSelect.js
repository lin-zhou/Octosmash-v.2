// All y's are 105.
const StaticGraphics = Object.freeze({
    ALFYN: {"text":"ALFYN", "x":555},
    CYRUS: {"text":"CYRUS", "x":168},
    HANNIT: {"text":"H'ANNIT", "x":743},
    OLBERIC: {"text":"OLBERIC", "x":354},
    OPHELIA: {"text":"OPHELIA", "x":65},
    PRIMROSE: {"text":"PRIMROSE", "x":446},
    THERION: {"text":"THERION", "x":646},
    TRESSA: {"text":"TRESSA", "x":263}
})

// TO DO: Put changing graphics together.

let nextBox = new PIXI.Graphics();
nextBox.beginFill(0x6f6f6f, 0.6);
nextBox.drawRect(0, 0, 120, 45);
nextBox.x = 701;
nextBox.y = 420;

let reselectBox = new PIXI.Graphics();
reselectBox.beginFill(0x6f6f6f, 0.6);
reselectBox.drawRect(0, 0, 170, 45);
reselectBox.x = 50;
reselectBox.y = 420;

let next = new PIXI.Text("NEXT", nextStyle);
next.x = 712;
next.y = 421;

let activeNext = new PIXI.Text("NEXT", activeNextStyle);
activeNext.x = 712;
activeNext.y = 421;

let reselect = new PIXI.Text("RESELECT", reselectStyle);
reselect.x = 59;
reselect.y = 424;

let activeReselect = new PIXI.Text("RESELECT", activeReselectStyle);
activeReselect.x = 59;
activeReselect.y = 424;

let choose1 = new PIXI.Text("Player One: Choose Your Character", selectStyle);
choose1.x = 270;
choose1.y = 430;

let testOphelia = new PIXI.Text("OPHELIA", selectStyle);
let testCyrus = new PIXI.Text("CYRUS", selectStyle);
let testTressa = new PIXI.Text("TRESSA", selectStyle);
let testOlberic = new PIXI.Text("OLBERIC", selectStyle);
let testPrimrose = new PIXI.Text("PRIMROSE", selectStyle);
let testAlfyn = new PIXI.Text("ALFYN", selectStyle);
let testTherion = new PIXI.Text("THERION", selectStyle);
let testHannit = new PIXI.Text("HANNIT", selectStyle);

let canChoose = true;
let hasChosen = false;

let blockBox = new PIXI.Graphics();

class CharacterSelect{

    constructor(staticGraphics) {
        
        var staticGraphics = staticGraphics;

    }

    changeScene = function() {
        // Removes all graphics
    }

}