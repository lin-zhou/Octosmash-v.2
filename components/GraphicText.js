class GraphicText {

    constructor(text, x, y, style) {

        var text = text;
        var x = x;
        var y = y;
        var style = style;
        var newText;
        
        this.pixiText = function () {
            newText = new PIXI.Text(text, style);
            newText.x = x;
            newText.y = y;
            return newText;
        }

    }

}

const opheliaName = new GraphicText("OPHELIA", 65, 105, nameStyle);
const cyrusName = new GraphicText("CYRUS", 168, 105, nameStyle);
const tressaName = new GraphicText("TRESSA", 263, 105, nameStyle);
const olbericName = new GraphicText("OLBERIC", 354, 105, nameStyle);
const primroseName = new GraphicText("PRIMROSE", 446, 105, nameStyle);
const alfynName = new GraphicText("ALFYN", 553, 105, nameStyle);
const therionName = new GraphicText("THERION", 646, 105, nameStyle);
const hannitName = new GraphicText("H'ANNIT", 743, 105, nameStyle);

const charNamesArr = [opheliaName, cyrusName, tressaName, olbericName, primroseName, alfynName, therionName, hannitName];