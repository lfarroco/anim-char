import AnimChar from "./plugin"

class Boot extends Phaser.Scene {

    derp: boolean;
    create() {

        this.scene.add('xx', AnimChar, true);

        let scene = <AnimChar>this.scene.get('xx')

        scene.render({ x: 50, y:50, head: 'head' })

        scene.move(400, 200)

        this.scene.add('c2', AnimChar, true);

        let chara2 = <AnimChar>this.scene.get('c2')

        chara2.render({ x:40, y: 400, head: 'head' })

        chara2.move(600, 300)

    }

    update() {

        // let scene = <AnimChar>this.scene.get('xx')

        // scene.move(400,200)

    }

    init() {

        console.log('main - init!')
    }


    preload() {

        this.load.image('head', './test/assets/head.png');

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
