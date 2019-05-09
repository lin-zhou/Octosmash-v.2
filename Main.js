const game = new Game();
const app = game.getApp();

// Testing characters sprites.
var chara = new Character(CharaEnum.HANNIT);
app.stage.addChild(chara.getSprite());