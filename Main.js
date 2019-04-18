const app = new PIXI.Application(1024 * .85, 576 * .85);
document.body.appendChild(app.view);

// Testing how to work with Google Chrome. Will be deleted.
const howToBackground = new Background(SceneEnum.HOWTO);
app.stage.addChild(howToBackground.getSprite());

// Testing characters sprites.
var chara = new Character("hannit");
app.stage.addChild(chara.getSprite());