class NumPlayers {

    // Note to self: This whole thing needs aesthetic cleaning.

    constructor(game, app) {

        console.log("Num Players Screen");

        // Note to self: Change font when you get the chance.
        var howManyText = new PIXI.Text("How many players?", howManyStyle);
        var num;

        howManyText.x = 300;
        howManyText.y = 50;
        app.stage.addChild(howManyText);

        var twoPButton = new PIXI.Sprite.from(twoPTexture);
        twoPButton.scale.x = 1.4;
        twoPButton.scale.y = 1.2;
        twoPButton.x = 267;
        twoPButton.y = 115;
        twoPButton.interactive = true;
        twoPButton.buttonMode = true;

        twoPButton
            .on('pointerdown', buttonDown)
            .on('pointerup', buttonUp)
            .on('pointerupoutside', buttonUp)
            .on('pointerover', buttonHover)
            .on('pointerout', buttonOut);
        app.stage.addChild(twoPButton);

        var threePButton = new PIXI.Sprite.from(threePTexture);
        threePButton.scale.x = 1.4;
        threePButton.scale.y = 1.2;
        threePButton.x = 267;
        threePButton.y = 205;
        threePButton.interactive = true;
        threePButton.buttonMode = true;

        threePButton
            .on('pointerdown', buttonDown)
            .on('pointerup', buttonUp)
            .on('pointerupoutside', buttonUp)
            .on('pointerover', buttonHover)
            .on('pointerout', buttonOut);
        app.stage.addChild(threePButton);


        var fourPButton = new PIXI.Sprite.from(fourPTexture);
        fourPButton.scale.x = 1.4;
        fourPButton.scale.y = 1.2;
        fourPButton.x = 267;
        fourPButton.y = 295;
        fourPButton.interactive = true;
        fourPButton.buttonMode = true;

        fourPButton
            .on('pointerdown', buttonDown)
            .on('pointerup', buttonUp)
            .on('pointerupoutside', buttonUp)
            .on('pointerover', buttonHover)
            .on('pointerout', buttonOut);
        app.stage.addChild(fourPButton);

        var numPlayerButtons = [twoPButton, threePButton, fourPButton];

        var startButton = new PIXI.Sprite(startDownTexture);  // Note to self: Create new PNG set for "CONTINUE" instead of "START"
        startButton.scale.x = 0.3;
        startButton.scale.y = 0.3;
        startButton.x = 365;
        startButton.y = 413;

        startButton.interactive = false;
        startButton.buttonMode = false;

        startButton
            .on('pointerdown', onButtonDown)
            .on('pointerup', onButtonUp)
            .on('pointerupoutside', onButtonUp)
            .on('pointerover', onButtonHover)
            .on('pointerout', onButtonOut);

        app.stage.addChild(startButton);

        function buttonDown() {
            this.isdown = true;
            
            switch (this) {
            case twoPButton:
                this.texture = twoPTextureSelected;
                break;
            case threePButton:
                this.texture = threePTextureSelected;
                break;
            case fourPButton:
                this.texture = fourPTextureSelected;
                break;
            }

        }
        
        function buttonUp() {
            this.isdown = false;
            if (this.isOver) {
                switch (this) {
                case twoPButton:
                    num = 2;
                    if (this.texture != twoPTextureSelected) {
                        this.texture = twoPTextureHover;
                    }
                    break;
                case threePButton:
                    num = 3;
                    if (this.texture != threePTextureSelected) {
                        this.texture = threePTextureHover;
                    }
                    break;
                case fourPButton:
                    num = 4;
                    if (this.texture != fourPTextureSelected) {
                        this.texture = fourPTextureHover;
                    }
                    break;
                }

                for (var i = 0; i < numPlayerButtons.length; i++) {
                    if (numPlayerButtons[i] != this) {
                        switch (numPlayerButtons[i]) {
                            case twoPButton:
                                numPlayerButtons[i].texture = twoPTexture;
                                break;
                            case threePButton:
                                numPlayerButtons[i].texture = threePTexture;
                                break;
                            case fourPButton:
                                numPlayerButtons[i].texture = fourPTexture;
                                break;
                        }
                    }
                }

                startButton.texture = startTexture;
                startButton.interactive = true;
                startButton.buttonMode = true;

            } else {
                switch (this) {
                case twoPButton:
                    if (num != 2) {
                        this.texture = twoPTexture;
                    }
                    break;
                case threePButton:
                    if (num != 3) {
                        this.texture = threePTexture;
                    }
                    break;
                case fourPButton:
                    if (num != 4) {
                        this.texture = fourPTexture;
                    }
                    break;
                }
            }
        }
        
        function buttonHover() {
            this.isOver = true;
            if (this.isdown) {
                return;
            }
            switch (this) {
            case twoPButton:
                if (this.texture != twoPTextureSelected) {
                    this.texture = twoPTextureHover;
                }
                break;
            case threePButton:
                if (this.texture != threePTextureSelected) {
                    this.texture = threePTextureHover;
                }
                break;
            case fourPButton:
                if (this.texture != fourPTextureSelected) {
                    this.texture = fourPTextureHover;
                }
                break;
            }
        }
        
        function buttonOut() {
            this.isOver = false;
            if (this.isdown) {
                return;
            }
            switch (this) {
            case twoPButton:
                if (this.texture != twoPTextureSelected) {
                    this.texture = twoPTexture;
                }
                break;
            case threePButton:
                if (this.texture != threePTextureSelected) {
                    this.texture = threePTexture;
                }
                break;
            case fourPButton:
                if (this.texture != fourPTextureSelected) {
                    this.texture = fourPTexture;
                }
                break;
            }
        } 

        function onButtonDown() {
            this.isdown = true;
            this.texture = startDownTexture;
            startButton.scale.x = 0.28;
            startButton.scale.y = 0.28;
            startButton.x = 370;
            startButton.y = 415;

            switch (num) {
            case 2:
                players = [new Player(1), new Player(2)];
                break;
            case 3:
                players = [new Player(1), new Player(2), new Player(3)];
                break;
            case 4:
                players = [new Player(1), new Player(2), new Player(3), new Player(4)];
                break;
            }

            game.handleScene(SceneEnum.NUMPLAYERS, SceneEnum.CHARASELECT);
            
            charaSelect = new CharacterSelect(game, app, 1);

        }
        
        function onButtonUp() {
            this.isdown = false;
            if (this.isOver) {
                this.texture = startHoverTexture;
                startButton.scale.x = 0.33;
                startButton.scale.y = 0.33;
                startButton.x = 357;
                startButton.y = 410;
            }
            else {
                this.texture = startTexture;
                startButton.scale.x = 0.3;
                startButton.scale.y = 0.3;
                startButton.x = 365;
                startButton.y = 413;
            }
        }
        
        function onButtonHover() {
            this.isOver = true;
            if (this.isdown) {
                return;
            }
            this.texture = startHoverTexture;
            startButton.scale.x = 0.33;
            startButton.scale.y = 0.33;
            startButton.x = 357;
            startButton.y = 410;
        }
        
        function onButtonOut() {
            this.isOver = false;
            if (this.isdown) {
                return;
            }
            this.texture = startTexture;
            startButton.scale.x = 0.3;
            startButton.scale.y = 0.3;
            startButton.x = 365;
            startButton.y = 413;
        }        


        this.deleteScene = function() {
            app.stage.removeChild(howManyText);
            app.stage.removeChild(twoPButton);
            app.stage.removeChild(threePButton);
            app.stage.removeChild(fourPButton);
            app.stage.removeChild(startButton);
        }

    }

}

// const numButtonTexture = new PIXI.Texture.from("images/buttons/Num_Player_Button_Blank.png");
// const numButtonTextureHover = new PIXI.Texture.from("images/buttons/Num_Player_Button_Blank.png");
// const numButtonTextureSelected = new PIXI.Texture.from("images/buttons/Num_Player_Button_Blank.png");

const twoPTexture = new PIXI.Texture.from("images/buttons/Num_Button_2.png");
const twoPTextureHover = new PIXI.Texture.from("images/buttons/Num_Button_Hover_2.png");
const twoPTextureSelected = new PIXI.Texture.from("images/buttons/Num_Button_Selected_2.png");

const threePTexture = new PIXI.Texture.from("images/buttons/Num_Button_3.png");
const threePTextureHover = new PIXI.Texture.from("images/buttons/Num_Button_Hover_3.png");
const threePTextureSelected = new PIXI.Texture.from("images/buttons/Num_Button_Selected_3.png");

const fourPTexture = new PIXI.Texture.from("images/buttons/Num_Button_4.png");
const fourPTextureHover = new PIXI.Texture.from("images/buttons/Num_Button_Hover_4.png");
const fourPTextureSelected = new PIXI.Texture.from("images/buttons/Num_Button_Selected_4.png");