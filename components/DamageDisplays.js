class DamageDisplays {

    constructor(app, players) {

        var damageDisplayNames = [];
        var damageDisplays = [];
        var damageStored = [];
        var displayXStored = [];

        for (var i = 0; i < players.length; i++) {
            damageDisplayNames[i] = new PIXI.Text("Player " + players[i].getNumber(), playerDamageStyle);
            damageDisplayNames[i].y = 447;
            damageDisplays[i] = new PIXI.Text(players[i].getDamage(), damageStyle);
            damageDisplays[i].y = 440;
            damageStored[i] = players[i].getDamage();

            switch (players.length) {
            case 2: 
                damageDisplayNames[i].x = 195 + (i * 350);
                displayXStored[i] = 290 + (i * 350);
                damageDisplays[i].x = displayXStored[i];
                break;
            case 3:
                // Spacing for three players
                break;
            case 4:
                // Spacing for four players
                break;
            }

            app.stage.addChild(damageDisplayNames[i]);
            app.stage.addChild(damageDisplays[i]);

        }

        this.updateDamageAmt = function(app, players) {
            for (var i = 0; i < players.length; i++) {
                if (players[i].getDamage() != damageStored[i]) {
                    app.stage.removeChild(damageDisplays[i]);
                    damageDisplays.splice(i, 1);
                    damageDisplays.splice(i, 0, new PIXI.Text(players[i].getDamage(), damageStyle));
                    damageDisplays[i].x = displayXStored[i];
                    damageDisplays[i].y = 440;
                    app.stage.addChild(damageDisplays[i]);
                }
            }
        }

        this.delete = function() {
        
        }

    }

}