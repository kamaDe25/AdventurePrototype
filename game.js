class Forest extends AdventureScene {
     constructor() {
        super("forest", "You are in the Forest.");
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
                    this.gainItemTrash("water bottle");
                }else if(this.hasItem("larger water bottle")){
                    this.gainItemTrash("larger water bottle");
                }
                
            })
    }
}

class UndergroundLair extends AdventureScene{
    constructor(){
        super("undergroundlair", "You fell into an underground cave.");
    }

    onEnter(){

        this.add.text(this.w * 0.05, this.h * 0.1, "You hear an ethreal voice tell you, \"Swim to the bottom of the lake to get the Medallion.\"")
            .setFontSize(this.s *2)
            .setWordWrapWidth(this.w * 0.5)
        this.showMessage("There's a beautiful lake here.");

        this.add.text(this.w * 0.3, this.h * 0.4, "Lake")
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
            this.gotoScene('fairyshrine');
        });
    }
}

class LakeBottom extends AdventureScene{
    constructor() {
        super("lakebottom", "You are at the bottom of the lake.");
    }

    onEnter(){
        
        if(this.hasItem("Medallion") == false){
            this.showMessage("You see the medallion on the bottom of the lake");

            let medallion = this.add.text(this.w * 0.3, this.h * 0.7, "Medallion")
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
        }
        
        this.add.text(this.w * 0.5, this.w * 0.1, "Swim up")
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

class FairyShrine extends AdventureScene{
    constructor() {
        super("fairyshrine", "You are standing in front of a Fairy Shrine.");
    }

    onEnter(){
        if(this.hasItem("Medallion")){
            this.add.text(this.w * 0.2, this.h * 0.2, "\"Place the Medallion on the Fairy Shrine.\"")
            .setFontSize(this.s *2)
            .setWordWrapWidth(this.w * 0.5)
        }

        this.add.text(this.w * 0.1, this.w * 0.4, "Shrine")
        .setFontSize(this.s * 2)
        .setInteractive()
        .on('pointerover', () => {
            if(this.hasItem("Medallion")){
                this.showMessage("Listen to the voice.");
            }else{
                this.showMessage("What is this for?");
            }
        })

        .on('pointerdown', () => {
            console.log("trash inventory:", this.trashInventory);
            console.log("trash count:", this.trashInventory.length);
            
            if(this.hasItem("Medallion")){
                this.showMessage("You listened to the voice.");
                if(this.hasAllItemTrash(2)){
                    this.gotoScene("goodending");
                }else{
                    this.gotoScene("badending2");
                }
            }else{
                this.showMessage("You have nothing of value to give.");
                this.gotoScene("badending2"); 
            }
        });

        this.add.text(this.w * 0.4, this.w * 0.4, "Go home")
        .setFontSize(this.s * 2)
        .setInteractive()
        .on('pointerover', () => {
            if(this.hasItem("Medallion")){
                this.showMessage("You are tired and this medallion is worth a lot of money.");
            }else{
                this.showMessage("You are tired");
            }
        })
        .on('pointerdown', () => {
            this.add.text(this.w * 0.2, this.h * 0.3,"\"You have disapointed me.\"")
            .setFontSize(this.s *2)
            .setWordWrapWidth(this.w * 0.5)
            this.gotoScene("badending");
        });

    }

}

class MyIntro extends Phaser.Scene{
    constructor(){
        super('myintro')
    }
    create(){
        this.add.text(50, 50, "Voice of the Forest").setFontSize(50);
        this.add.text(50, 100, "Click anywhere to begin.").setFontSize(20);
        this.input.on('pointerdown', () => {
            this.cameras.main.fade(1000, 0,0,0);
            this.time.delayedCall(1000, () => this.scene.start('forest'));
        });
    }
}

class GoodEnding extends Phaser.Scene{
    constructor(){
        super('goodending');
    }
    preload(){
        this.load.path = 'assets/';
        this.load.image('forest', 'forest.jpg');
    }
    create(){
        const centerX = this.cameras.main.width / 2
        const centerY = this.cameras.main.height / 2
        const forest = this.add.image(centerX, centerY, 'forest');
        const scaleX = this.cameras.main.width / forest.width
        const scaleY = this.cameras.main.height / forest.height
        forest.setScale(Math.max(scaleX, scaleY));

        this.add.text(50, 50, "\"Thank you for your act of kindess,\" you hear the voice say.\n You decide to pick up more trash before heading home.").setFontSize(50);
        
    }
    update(){}
}

class BadEnding extends Phaser.Scene{
    constructor(){
        super('badending');
    }
    preload(){
        this.load.path = 'assets/';
        this.load.image('badEnding', 'badEnding.jpg');
    }
    create(){
        const centerX = this.cameras.main.width / 2
        const centerY = this.cameras.main.height / 2
        const ending = this.add.image(centerX, centerY + 1, 'badEnding');
        const scaleX = this.cameras.main.width / ending.width
        const scaleY = this.cameras.main.height / ending.height
        ending.setScale(Math.min(scaleX, scaleY));
        ending.setAngle(90)

        this.add.text(50, 50, "\"A human's inability to listen shouldn't surprised me anymore,\" you hear the voice say.\n You have turned into a flower.")
        .setFontSize(40)
        //.setWordWrapWidth(700);
    }
    update(){}
}

class BadEnding2 extends Phaser.Scene{
      constructor(){
        super('badending2');
    }
    preload(){
        this.load.path = 'assets/';
        this.load.image('badEnding', 'badEnding.jpg');
    }
    create(){
        const centerX = this.cameras.main.width / 2
        const centerY = this.cameras.main.height / 2
        const ending = this.add.image(centerX, centerY + 1, 'badEnding');
        const scaleX = this.cameras.main.width / ending.width
        const scaleY = this.cameras.main.height / ending.height
        ending.setScale(Math.min(scaleX, scaleY));
        ending.setAngle(90)

        this.add.text(50, 50, "\"You were nice, but humans can't be trusted with secrets,\" you hear the voice say.\n You have turned into a flower.")
        .setFontSize(40)
        //.setWordWrapWidth(700);
 
    }
    update(){}
}

const game = new Phaser.Game({
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
        width: 1920,
        height: 1080
    },
    scene: [MyIntro, Forest, UndergroundLair, LakeBottom, FairyShrine, GoodEnding, BadEnding, BadEnding2],
    title: "Adventure Game",
});

