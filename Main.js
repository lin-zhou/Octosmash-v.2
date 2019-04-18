const app = new PIXI.Application(1024 * .85, 576 * .85);
document.body.appendChild(app.view);

// Testing how to work with Google Chrome. Will be deleted.
const background = new Background();
background.setSprite(SceneEnum.HOWTO);
app.stage.addChild(background.getSprite());

// Testing characters sprites.
var chara = new Character("hannit");
app.stage.addChild(chara.getSprite());