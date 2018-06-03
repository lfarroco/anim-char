import AnimChar from "../src/main"

class Boot extends Phaser.Scene {

    create() {

        this.scene.add('xx', AnimChar, true);

        let scene = <AnimChar>this.scene.get('xx')

        scene.render({ x: 10, y: 40, head: 'head', arm: 'arm', body: 'body', leg: 'leg' })

        scene.move(400, 200)

        this.scene.add('c2', AnimChar, true);

        let chara2 = <AnimChar>this.scene.get('c2')

        chara2.render({ x: 40, y: 140, head: 'head', arm: 'arm', body: 'body', leg: 'leg' })

        chara2.move(600, 300)

        this.time.addEvent({
            callback: () => {

                scene.blink();
                chara2.blink();

            },
            loop: true,
            delay: 2000
        })

    }

    preload() {

        this.load.image('head', './assets/head.png');
        this.load.image('body', './assets/body.png');
        this.load.image('arm', './assets/arm.png');
        this.load.image('leg', './assets/leg.png');

    }

}

const config = {
    type: Phaser.AUTO,
    parent: 'game',
    width: 800,
    height: 600,
    scene: [Boot]
};

let game = new Phaser.Game(config);
