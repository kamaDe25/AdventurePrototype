/*
class Demo1 extends AdventureScene {
    constructor() {
        super("demo1", "First Room");
    }

    onEnter() {

        let clip = this.add.text(this.w * 0.3, this.w * 0.3, "📎 paperclip")
            .setFontSize(this.s * 2)
            .setInteractive()
            .on('pointerover', () => this.showMessage("Metal, bent."))
            .on('pointerdown', () => {
                this.showMessage("No touching!");
                this.tweens.add({
                    targets: clip,
                    x: '+=' + this.s,
                    repeat: 2,
                    yoyo: true,
                    ease: 'Sine.inOut',
                    duration: 100
                });
            });

        let key = this.add.text(this.w * 0.5, this.w * 0.1, "🔑 key")
            .setFontSize(this.s * 2)
            .setInteractive()
            .on('pointerover', () => {
                this.showMessage("It's a nice key.")
            })
            .on('pointerdown', () => {
                this.showMessage("You pick up the key.");
                this.gainItem('key');
                this.tweens.add({
                    targets: key,
                    y: `-=${2 * this.s}`,
                    alpha: { from: 1, to: 0 },
                    duration: 500,
                    onComplete: () => key.destroy()
                });
            })

        let door = this.add.text(this.w * 0.1, this.w * 0.15, "🚪 locked door")
            .setFontSize(this.s * 2)
            .setInteractive()
            .on('pointerover', () => {
                if (this.hasItem("key")) {
                    this.showMessage("You've got the key for this door.");
                } else {
                    this.showMessage("It's locked. Can you find a key?");
                }
            })
            .on('pointerdown', () => {
                if (this.hasItem("key")) {
                    this.loseItem("key");
                    this.showMessage("*squeak*");
                    door.setText("🚪 unlocked door");
                    this.gotoScene('demo2');
                }
            })

    }
}
*/

class Forest extends AdventureScene {
     constructor() {
        super("forest", "Forest");
    }

    onEnter() {

        //making a water bottle to throw away
        let bottle = this.add.text(this.w * 0.4, this.w * 0.4, "water bottle")
            .setFontSize(this.s * 2)
            .setInteractive()
            .on('pointerover', () => this.showMessage("Ew, trash"))
            .on('pointerdown', () => {
                this.showMessage("Throw it away!");
                this.gainItem('water bottle');
                this.tweens.add({
                    targets: bottle,
                    y: `-=${2 * this.s}`,
                    alpha: { from: 1, to: 0 },
                    duration: 500,
                    onComplete: () => bottle.destroy()
                });
            })

        //making another water bottle to throw away
         let bottle1 = this.add.text(this.w * 0.1, this.w * 0.3, " larger water bottle")
            .setFontSize(this.s * 2.5)
            .setInteractive()
            .on('pointerover', () => this.showMessage("Ew, trash"))
            .on('pointerdown', () => {
                this.showMessage("Throw it away!");
                this.gainItem('larger water bottle');
                this.tweens.add({
                    targets: bottle1,
                    y: `-=${2 * this.s}`,
                    alpha: { from: 1, to: 0 },
                    duration: 500,
                    onComplete: () => bottle1.destroy()
                });
            })

        //bottle on a dangerous slope
        let bottle3 = this.add.text(this.w * 0.2, this.w * 0.1, "water bottle on steep slope")
        .setFontSize(this.s * 1)
        .setInteractive()
        .on('pointerover', () => this.showMessage("This bottle is on a dangerous slope"))
        .on('pointerdown', () => {
            this.showMessage("You fell into a hole in the ground.");
            this.gotoScene('undergroundlair');
        })


        
        //trash can to throw away water bottles
        let trash = this.add.text(this.w * 0.5, this.w * 0.5, "trash can")
            .setFontSize(this.s * 2)
            .setInteractive()
            .on('pointerover', () => {
                if (this.hasItem("water bottle") || (this.hasItem("larger water bottle"))) {
                    this.showMessage("Throw away your trash!");
                } else {
                    this.showMessage("Found any trash?");
                }
            })
            .on('pointerdown', () => {
                if (this.hasItem("water bottle")) {
                    this.loseItem("water bottle");
                    this.showMessage("*thud*");
                    this.showMessage("You helped clean up the forest!");
                }else if(this.hasItem("larger water bottle")){
                    this.loseItem("larger water bottle");
                    this.showMessage("*thud*");
                    this.showMessage("You helped clean up the forest!");
                }
                
            })
        /*
        let clip = this.add.text(this.w * 0.3, this.w * 0.3, "📎 paperclip")
            .setFontSize(this.s * 2)
            .setInteractive()
            .on('pointerover', () => this.showMessage("Metal, bent."))
            .on('pointerdown', () => {
                this.showMessage("No touching!");
                this.tweens.add({
                    targets: clip,
                    x: '+=' + this.s,
                    repeat: 2,
                    yoyo: true,
                    ease: 'Sine.inOut',
                    duration: 100
                });
            });*/

        /*
        let key = this.add.text(this.w * 0.5, this.w * 0.1, "🔑 key")
            .setFontSize(this.s * 2)
            .setInteractive()
            .on('pointerover', () => {
                this.showMessage("It's a nice key.")
            })
            .on('pointerdown', () => {
                this.showMessage("You pick up the key.");
                this.gainItem('key');
                this.tweens.add({
                    targets: key,
                    y: `-=${2 * this.s}`,
                    alpha: { from: 1, to: 0 },
                    duration: 500,
                    onComplete: () => key.destroy()
                });
            })*/
        /*
        let door = this.add.text(this.w * 0.1, this.w * 0.15, "🚪 locked door")
            .setFontSize(this.s * 2)
            .setInteractive()
            .on('pointerover', () => {
                if (this.hasItem("key")) {
                    this.showMessage("You've got the key for this door.");
                } else {
                    this.showMessage("It's locked. Can you find a key?");
                }
            })
            .on('pointerdown', () => {
                if (this.hasItem("key")) {
                    this.loseItem("key");
                    this.showMessage("*squeak*");
                    door.setText("🚪 unlocked door");
                    this.gotoScene('demo2');
                }
            })*/

    }
}

class UndergroundLair extends AdventureScene{
    constructor(){
        super("undergroundlair", "You fell into an underground cave");
    }

    onEnter(){
        this.showMessage("There's a beautiful lake here.");

        this.add.text(this.w * 0.3, this.w * 0.4, "Pool")
        .setFontSize(this.s * 2)
        .setInteractive()
        .on('pointerover', () => {
            this.showMessage("Jump into the lake?");
        })
        .on('pointerdown', () => {
            this.gotoScene('lakebottom');
        });

        this.add.text(this.w * 0.5, this.w * 0.5, "Tunnel")
        .setFontSize(this.s * 2)
        .setInteractive()
        .on('pointerover', () => {
            this.showMessage("Climb back to the surface?");
        })
        .on('pointerdown', () => {
            this.gotoScene('demo1');
        });
    }
}

class LakeBottom extends AdventureScene{
    constructor() {
        super("lakebottom", "You are at the bottom of the lake.");
    }

    onEnter(){
        this.showMessage("You see the medallion on the bottom of the lake");

        let medallion = this.add.text(this.w * 0.3, this.w * 0.4, "Medallion")
        .setFontSize(this.s * 2)
        .setInteractive()
        .on('pointerover', () => {
            this.showMessage("Pick it up?");
        })
        .on('pointerdown', () => {
            this.gainItem('Medallion');
            this.tweens.add({
                targets: medallion,
                y: `-=${2 * this.s}`,
                alpha: { from: 1, to: 0 },
                duration: 500,
                onComplete: () => medallion.destroy()
            });
        });

        this.add.text(this.w * 0.5, this.w * 0.5, "Swim up")
        .setFontSize(this.s * 2)
        .setInteractive()
        .on('pointerover', () => {
            this.showMessage("Swim back to the surface?");
        })
        .on('pointerdown', () => {
            this.gotoScene('undergroundlair');
        });
    }

}

/*
class Demo2 extends AdventureScene {
    constructor() {
        super("demo2", "The second room has a long name (it truly does).");
    }
    onEnter() {
        this.add.text(this.w * 0.3, this.w * 0.4, "just go back")
            .setFontSize(this.s * 2)
            .setInteractive()
            .on('pointerover', () => {
                this.showMessage("You've got no other choice, really.");
            })
            .on('pointerdown', () => {
                this.gotoScene('demo1');
            });

        let finish = this.add.text(this.w * 0.6, this.w * 0.2, '(finish the game)')
            .setInteractive()
            .on('pointerover', () => {
                this.showMessage('*giggles*');
                this.tweens.add({
                    targets: finish,
                    x: this.s + (this.h - 2 * this.s) * Math.random(),
                    y: this.s + (this.h - 2 * this.s) * Math.random(),
                    ease: 'Sine.inOut',
                    duration: 500
                });
            })
            .on('pointerdown', () => this.gotoScene('outro'));
    }
}*/

class MyIntro extends Phaser.Scene{
    constructor(){
        super('myintro')
    }
    create(){
        this.add.text(50, 50, "Forest Friends").setFontSize(50);
        this.add.text(50, 100, "Click anywhere to begin.").setFontSize(20);
        this.input.on('pointerdown', () => {
            this.cameras.main.fade(1000, 0,0,0);
            this.time.delayedCall(1000, () => this.scene.start('forest'));
        });
    }
}

class Outro extends Phaser.Scene {
    constructor() {
        super('outro');
    }
    create() {
        this.add.text(50, 50, "That's all!").setFontSize(50);
        this.add.text(50, 100, "Click anywhere to restart.").setFontSize(20);
        this.input.on('pointerdown', () => this.scene.start('intro'));
    }
}


const game = new Phaser.Game({
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
        width: 1920,
        height: 1080
    },
    scene: [MyIntro, Forest, UndergroundLair, LakeBottom, Outro],
    title: "Adventure Game",
});

