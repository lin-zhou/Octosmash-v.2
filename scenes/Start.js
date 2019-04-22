class Start {

    constructor(app, game) {

        var startButton = new PIXI.Sprite(startTexture);

        startButton.scale.x = 0.5;
        startButton.scale.y = 0.5;
        startButton.x = 455;
        startButton.y = 385;

        startButton.interactive = true;
        startButton.buttonMode = true;

        startButton
            .on('pointerdown', onButtonDown)
            .on('pointerup', onButtonUp)
            .on('pointerupoutside', onButtonUp)
            .on('pointerover', onButtonHover)
            .on('pointerout', onButtonOut);

        app.stage.addChild(startButton);

        function onButtonDown() {
            this.isdown = true;
            this.texture = startDownTexture;
            startButton.scale.x = 0.48;
            startButton.scale.y = 0.48;
            startButton.x = 460;
            startButton.y = 388;

            game.handleScene(SceneEnum.START, SceneEnum.HOWTO);

            const howTo = new HowTo(app, game);

        }
        
        function onButtonUp() {
            this.isdown = false;
            if (this.isOver) {
                this.texture = startHoverTexture;
                startButton.scale.x = 0.55;
                startButton.scale.y = 0.55;
                startButton.x = 442;
                startButton.y = 382;
            }
            else {
                this.texture = startTexture;
                startButton.scale.x = 0.5;
                startButton.scale.y = 0.5;
                startButton.x = 455;
                startButton.y = 385;
            }
        }
        
        function onButtonHover() {
            this.isOver = true;
            if (this.isdown) {
                return;
            }
            this.texture = startHoverTexture;
            startButton.scale.x = 0.55;
            startButton.scale.y = 0.55;
            startButton.x = 442;
            startButton.y = 382;
        }
        
        function onButtonOut() {
            this.isOver = false;
            if (this.isdown) {
                return;
            }
            this.texture = startTexture;
            startButton.scale.x = 0.5;
            startButton.scale.y = 0.5;
            startButton.x = 455;
            startButton.y = 385;
        }        

        this.deleteScene = function() {
            startButton.interactive = false;
            startButton.buttonMode = false;
            app.stage.removeChild(startButton);
        }

    }

}

const startTexture = PIXI.Texture.fromImage("images/buttons/Start_Button.png");
const startDownTexture = PIXI.Texture.fromImage("images/buttons/Start_Button_Down.png");
const startHoverTexture = PIXI.Texture.fromImage("images/buttons/Start_Button_Hover.png");