const app = new PIXI.Application(1024 * .85, 576 * .85);
document.body.appendChild(app.view);

// Testing how to work with Google Chrome. Will be deleted.
const howToBackground = new PIXI.Sprite.from("images/backgrounds/How_To_Background.png");
howToBackground.scale.x = 0.655;
howToBackground.scale.y = 0.655;
app.stage.addChild(howToBackground);

// Testing characters sprites.
var chara = new Character("hannit");
app.stage.addChild(chara.getSprite());