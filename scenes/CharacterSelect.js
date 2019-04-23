// const choose1 = new PIXI.Text("Player One: Choose Your Character", selectStyle);
// choose1.x = 270;
// choose1.y = 430;

// NOTE: May have to use a texture instead
let blockBox = new PIXI.Graphics();
blockBox.beginFill(0xffffff, 0);
blockBox.drawRect(0, 0, 90, 277);
blockBox.x = 50,
blockBox.y = 125;

blockBox.interactive = true;
blockBox.buttonMode = true;

blockBox
.on('pointerdown', boxOnButtonDown)

function boxOnButtonDown() {
    // Makes block box visible
}


class CharacterSelect{
    

    constructor(game, app) {

        console.log("Character Select Screen");

        app.stage.addChild(blockBox);

        var nextButton = new PIXI.Sprite(nextTexture);

        nextButton.scale.x = 0.3;
        nextButton.scale.y = 0.3;
        nextButton.x = 688;
        nextButton.y = 420;

        nextButton.interactive = false;
        // becomes true after character has been selected
        nextButton.buttonMode = false;

        nextButton
            .on('pointerdown', onButtonDown)
            .on('pointerup', onButtonUp)
            .on('pointerupoutside', onButtonUp)
            .on('pointerover', onButtonHover)
            .on('pointerout', onButtonOut);

        app.stage.addChild(nextButton);

        function onButtonDown() {
            this.isdown = true;
            // Code here that leads to the main game
        }
        
        function onButtonUp() {
            this.isdown = false;
            if (this.isOver) {
                // Makes the button look different
            }
            else {
                this.texture = nextTexture;
                nextButton.scale.x = 0.3;
                nextButton.scale.y = 0.3;
                nextButton.x = 688;
                nextButton.y = 420;
            }
        }
        
        function onButtonHover() {
            this.isOver = true;
            if (this.isdown) {
                return;
            }
            // Makes the button look different
        }
        
        function onButtonOut() {
            this.isOver = false;
            if (this.isdown) {
                return;
            }
            this.texture = nextTexture;
            nextButton.scale.x = 0.3;
            nextButton.scale.y = 0.3;
            nextButton.x = 688;
            nextButton.y = 420;
        } 
        
        for (var i = 0; i < charNamesArr.length; i++) {
            app.stage.addChild(charNamesArr[i]);
        }

        this.select = function() {

        }
    
        this.unselect = function() {
    
        }
    
        this.deleteScene = function() {
            
            for (var i = 0; i < charNamesArr.length; i++) {
                app.stage.removeChild(charNamesArr[i]);
            }

        }
        
    }

}

const nextTexture = new PIXI.Texture.from("images/buttons/Next_Button.png");
const activeNextTexture = new PIXI.Texture.from("images/buttons/Next_Button_Active.png");
const activeNextHoverTexture = new PIXI.Texture.from("images/buttons/Next_Button_Active_Hover.png");
const activeNextDownTexture = new PIXI.Texture.from("images/buttons/Next_Button_Active_Down.png");