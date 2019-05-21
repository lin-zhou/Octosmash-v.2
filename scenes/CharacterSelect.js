// const choose1 = new PIXI.Text("Player One: Choose Your Character", selectStyle);
// choose1.x = 270;
// choose1.y = 430;

class CharacterSelect {

    constructor(game, app, playerNum) {

        console.log("Player " + playerNum + " Character Select Screen");

        var nextButton = new PIXI.Sprite(nextTexture);
        var selected = false;
        var playerNum = playerNum;
        var playerSelecting = players[playerNum - 1];

        var chooseText = new PIXI.Text("Player " + playerNum + ": Choose Your Character", selectStyle);
        chooseText.x = 270;
        chooseText.y = 430;
        app.stage.addChild(chooseText);

        var blockBoxOphelia = new PIXI.Sprite.from("images/buttons/Block_Box.png");
        blockBoxOphelia.scale.x = 0.405;
        blockBoxOphelia.scale.y = 1.231;
        blockBoxOphelia.x = 48;
        blockBoxOphelia.y = 125;
        blockBoxOphelia.alpha = 0;
        blockBoxOphelia.interactive = true;
        blockBoxOphelia.buttonMode = true;
        app.stage.addChild(blockBoxOphelia);

        blockBoxOphelia
            .on('pointerdown', buttonDown)
            .on('pointerup', buttonUp)
            .on('pointerupoutside', buttonUp)
            .on('pointerover', buttonHover)
            .on('pointerout', buttonOut);

        var blockBoxCyrus = new PIXI.Sprite.from("images/buttons/Block_Box.png");
        blockBoxCyrus.scale.x = 0.405;
        blockBoxCyrus.scale.y = 1.231;
        blockBoxCyrus.x = 147;
        blockBoxCyrus.y = 125;
        blockBoxCyrus.alpha = 0;
        blockBoxCyrus.interactive = true;
        blockBoxCyrus.buttonMode = true;
        app.stage.addChild(blockBoxCyrus);

        blockBoxCyrus
            .on('pointerdown', buttonDown)
            .on('pointerup', buttonUp)
            .on('pointerupoutside', buttonUp)
            .on('pointerover', buttonHover)
            .on('pointerout', buttonOut);

        var blockBoxTressa = new PIXI.Sprite.from("images/buttons/Block_Box.png");
        blockBoxTressa.scale.x = 0.405;
        blockBoxTressa.scale.y = 1.231;
        blockBoxTressa.x = 244;
        blockBoxTressa.y = 125;
        blockBoxTressa.alpha = 0;
        blockBoxTressa.interactive = true;
        blockBoxTressa.buttonMode = true;
        app.stage.addChild(blockBoxTressa);

        blockBoxTressa
            .on('pointerdown', buttonDown)
            .on('pointerup', buttonUp)
            .on('pointerupoutside', buttonUp)
            .on('pointerover', buttonHover)
            .on('pointerout', buttonOut);

        var blockBoxOlberic = new PIXI.Sprite.from("images/buttons/Block_Box.png");
        blockBoxOlberic.scale.x = 0.405;
        blockBoxOlberic.scale.y = 1.231;
        blockBoxOlberic.x = 340;
        blockBoxOlberic.y = 125;
        blockBoxOlberic.alpha = 0;
        blockBoxOlberic.interactive = true;
        blockBoxOlberic.buttonMode = true;
        app.stage.addChild(blockBoxOlberic);

        blockBoxOlberic
            .on('pointerdown', buttonDown)
            .on('pointerup', buttonUp)
            .on('pointerupoutside', buttonUp)
            .on('pointerover', buttonHover)
            .on('pointerout', buttonOut);

        var blockBoxPrimrose = new PIXI.Sprite.from("images/buttons/Block_Box.png");
        blockBoxPrimrose.scale.x = 0.405;
        blockBoxPrimrose.scale.y = 1.231;
        blockBoxPrimrose.x = 438;
        blockBoxPrimrose.y = 125;
        blockBoxPrimrose.alpha = 0;
        blockBoxPrimrose.interactive = true;
        blockBoxPrimrose.buttonMode = true;
        app.stage.addChild(blockBoxPrimrose);

        blockBoxPrimrose
            .on('pointerdown', buttonDown)
            .on('pointerup', buttonUp)
            .on('pointerupoutside', buttonUp)
            .on('pointerover', buttonHover)
            .on('pointerout', buttonOut);

        var blockBoxAlfyn = new PIXI.Sprite.from("images/buttons/Block_Box.png");
        blockBoxAlfyn.scale.x = 0.405;
        blockBoxAlfyn.scale.y = 1.231;
        blockBoxAlfyn.x = 535;
        blockBoxAlfyn.y = 125;
        blockBoxAlfyn.alpha = 0;
        blockBoxAlfyn.interactive = true;
        blockBoxAlfyn.buttonMode = true;
        app.stage.addChild(blockBoxAlfyn);

        blockBoxAlfyn
            .on('pointerdown', buttonDown)
            .on('pointerup', buttonUp)
            .on('pointerupoutside', buttonUp)
            .on('pointerover', buttonHover)
            .on('pointerout', buttonOut);

        var blockBoxTherion = new PIXI.Sprite.from("images/buttons/Block_Box.png");
        blockBoxTherion.scale.x = 0.405;
        blockBoxTherion.scale.y = 1.231;
        blockBoxTherion.x = 632;
        blockBoxTherion.y = 125;
        blockBoxTherion.alpha = 0;
        blockBoxTherion.interactive = true;
        blockBoxTherion.buttonMode = true;
        app.stage.addChild(blockBoxTherion);

        blockBoxTherion
            .on('pointerdown', buttonDown)
            .on('pointerup', buttonUp)
            .on('pointerupoutside', buttonUp)
            .on('pointerover', buttonHover)
            .on('pointerout', buttonOut);

        var blockBoxHannit = new PIXI.Sprite.from("images/buttons/Block_Box.png");
        blockBoxHannit.scale.x = 0.405;
        blockBoxHannit.scale.y = 1.231;
        blockBoxHannit.x = 728;
        blockBoxHannit.y = 125;
        blockBoxHannit.alpha = 0;
        blockBoxHannit.interactive = true;
        blockBoxHannit.buttonMode = true;
        app.stage.addChild(blockBoxHannit);

        blockBoxHannit
            .on('pointerdown', buttonDown)
            .on('pointerup', buttonUp)
            .on('pointerupoutside', buttonUp)
            .on('pointerover', buttonHover)
            .on('pointerout', buttonOut);

        var blockBoxArray = [blockBoxOphelia, blockBoxCyrus, blockBoxTressa, blockBoxOlberic,
            blockBoxPrimrose, blockBoxAlfyn, blockBoxTherion, blockBoxHannit];

        nextButton.scale.x = 0.3;
        nextButton.scale.y = 0.3;
        nextButton.x = 688;
        nextButton.y = 420;

        nextButton.interactive = false;
        nextButton.buttonMode = false

        nextButton
            .on('pointerdown', onButtonDown)
            .on('pointerup', onButtonUp)
            .on('pointerupoutside', onButtonUp)
            .on('pointerover', onButtonHover)
            .on('pointerout', onButtonOut);

        app.stage.addChild(nextButton);

        // Note to self: add unselected button & random button?

        function buttonDown() {
            this.isdown = true;
            this.alpha = 0.6;
            
            // Sets character for player selecting
            switch (this) {
            case blockBoxAlfyn:
                playerSelecting.setCharacter(new Character(CharaEnum.ALFYN));
                break;
            case blockBoxCyrus:
                playerSelecting.setCharacter(new Character(CharaEnum.CYRUS));
                break;
            case blockBoxHannit:
                playerSelecting.setCharacter(new Character(CharaEnum.HANNIT));
                break;
            case blockBoxOlberic:
                playerSelecting.setCharacter(new Character(CharaEnum.OLBERIC));
                break;
            case blockBoxOphelia:
                playerSelecting.setCharacter(new Character(CharaEnum.OPHELIA));
                break;
            case blockBoxPrimrose:
                playerSelecting.setCharacter(new Character(CharaEnum.PRIMROSE));
                break;
            case blockBoxTherion:
                playerSelecting.setCharacter(new Character(CharaEnum.THERION));
                break;
            case blockBoxTressa:
                playerSelecting.setCharacter(new Character(CharaEnum.TRESSA));
                break;
            }
            console.log("Player " + playerNum + " selected " + playerSelecting.getCharacter().getName());

            selected = true;
            for (var i = 0; i < blockBoxArray.length; i++) {
                if (blockBoxArray[i] != this) {
                    blockBoxArray[i].alpha = 0;
                }
            }

            if (nextButton.texture != activeNextTexture) {
                nextButton.texture = activeNextTexture;

                nextButton.scale.x = 0.185;
                nextButton.scale.y = 0.185;
                nextButton.x = 688;
                nextButton.y = 420;

                nextButton.interactive = true;
                nextButton.buttonMode = true;
            }

        }
        
        function buttonUp() {
            this.isdown = false;
            if (!selected) {
                this.alpha = 0;
            }
        }
        
        function buttonHover() {
            this.isOver = true;
            if (this.isdown) {
                return;
            }
            if (this.alpha != 0.6) {
                this.alpha = 0.2;
            }
        }
        
        function buttonOut() {
            this.isOver = false;
            if (this.isdown) {
                return;
            }
            if (this.alpha != 0.6) {
                this.alpha = 0;
            }
        } 

        function onButtonDown() {
            this.isdown = true;
            if (this.texture == activeNextHoverTexture) {
                if (playerNum < players.length) {
                    playerNum++;
                    playerSelecting = players[playerNum - 1];

                    app.stage.removeChild(chooseText);
                    chooseText = new PIXI.Text("Player " + playerNum + ": Choose Your Character", selectStyle);
                    chooseText.x = 270;
                    chooseText.y = 430;
                    app.stage.addChild(chooseText);

                    console.log("Player " + playerNum + " Character Select Screen");
                    for (var i = 0; i < blockBoxArray.length; i++) {
                        blockBoxArray[i].alpha = 0;
                    }
                    this.texture = nextTexture;
                    nextButton.scale.x = 0.3;
                    nextButton.scale.y = 0.3;
                    nextButton.x = 688;
                    nextButton.y = 420;
            
                    nextButton.interactive = false;
                    nextButton.buttonMode = false
                } else {
                    game.handleScene(SceneEnum.CHARASELECT, SceneEnum.BATTLEFIELD);
                    mainGame = new MainGame(game, app);
                }
            }
        }
        
        function onButtonUp() {
            this.isdown = false;
            if (this.isOver) {
                this.texture = activeNextHoverTexture;
                nextButton.scale.x = 0.185;
                nextButton.scale.y = 0.185;
                nextButton.x = 688;
                nextButton.y = 420;
            } else {
                this.texture = activeNextTexture;
                nextButton.scale.x = 0.185;
                nextButton.scale.y = 0.185;
                nextButton.x = 688;
                nextButton.y = 420;
            }
        }
        
        function onButtonHover() {
            this.isOver = true;
            if (this.isdown) {
                return;
            }
            this.texture = activeNextHoverTexture;
            nextButton.scale.x = 0.185;
            nextButton.scale.y = 0.185;
            nextButton.x = 688;
            nextButton.y = 420;
        }
        
        function onButtonOut() {
            this.isOver = false;
            if (this.isdown) {
                return;
            }
            this.texture = activeNextTexture;
            nextButton.scale.x = 0.185;
            nextButton.scale.y = 0.185;
            nextButton.x = 688;
            nextButton.y = 420;
        } 
        
        for (var i = 0; i < charNamesArr.length; i++) {
            app.stage.addChild(charNamesArr[i]);
        }

        this.createPlayer = function() {
            // Currently unsupported
        }
    
        this.deleteScene = function() {
            
            for (var i = 0; i < charNamesArr.length; i++) {
                app.stage.removeChild(charNamesArr[i]);
            }

            for (var i = 0; i < blockBoxArray.length; i++) {
                app.stage.removeChild(blockBoxArray[i]);
            }

            app.stage.removeChild(nextButton);

            app.stage.removeChild(chooseText);

        }
        
    }

}

const nextTexture = new PIXI.Texture.from("images/buttons/Next_Button.png");
const activeNextTexture = new PIXI.Texture.from("images/buttons/Next_Button_Active.png");
const activeNextHoverTexture = new PIXI.Texture.from("images/buttons/Next_Button_Active_Hover.png");
const activeNextDownTexture = new PIXI.Texture.from("images/buttons/Next_Button_Active_Down.png");