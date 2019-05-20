class NumPlayers {

    constructor(game, app) {

        // Note to self: Change font when you get the chance.
        var howManyText = new PIXI.Text("How many players?", activeNextStyle);
        var num;

        howManyText.x = 290;
        howManyText.y = 50;
        app.stage.addChild(howManyText);

        var twoPButton = new PIXI.Sprite.from(twoPTexture);
        twoPButton.scale.x = 1.4;
        twoPButton.scale.y = 1.4;
        twoPButton.x = 170;
        twoPButton.y = 120;
        twoPButton.interactive = true;
        twoPButton.buttonMode = true;

        twoPButton
            .on('pointerdown', onButtonDown)
            .on('pointerup', onButtonUp)
            .on('pointerupoutside', onButtonUp)
            .on('pointerover', onButtonHover)
            .on('pointerout', onButtonOut);
        app.stage.addChild(twoPButton);

        var threePButton = new PIXI.Sprite.from(threePTexture);
        threePButton.scale.x = 1.4;
        threePButton.scale.y = 1.4;
        threePButton.x = 370;
        threePButton.y = 120;
        threePButton.interactive = true;
        threePButton.buttonMode = true;
        app.stage.addChild(threePButton);


        var fourPButton = new PIXI.Sprite.from(fourPTexture);
        fourPButton.scale.x = 1.4;
        fourPButton.scale.y = 1.4;
        fourPButton.x = 570;
        fourPButton.y = 120;
        fourPButton.interactive = true;
        fourPButton.buttonMode = true;
        app.stage.addChild(fourPButton);

        function onButtonDown() {
            this.isdown = true;
            if (this.texture == activeNextHoverTexture) {
                
            }
        }
        
        function onButtonUp() {
            this.isdown = false;
            if (this.isOver) {
                // Stuff
            } else {
                // Stuff
            }
        }
        
        function onButtonHover() {
            this.isOver = true;
            if (this.isdown) {
                return;
            }
            // Some stuff
        }
        
        function onButtonOut() {
            this.isOver = false;
            if (this.isdown) {
                return;
            }
            // Some stuff
        } 


        this.deleteScene = function() {
        
        }

    }

}

const twoPTexture = new PIXI.Texture.from("images/buttons/Num_Player_Button_2.png");
const threePTexture = new PIXI.Texture.from("images/buttons/Num_Player_Button_3.png");
const fourPTexture = new PIXI.Texture.from("images/buttons/Num_Player_Button_4.png");