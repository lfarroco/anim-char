import AnimChar from "./plugin"


const config = {
    type: Phaser.AUTO,
    parent: 'game',
    width: 800,
    height: 600,
    plugins: {
        global: [
            { key: 'AnimChar', plugin: AnimChar }
        ]
    },
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

let game = new Phaser.Game(config);

function preload() {
    this.load.image('head', './assets/head.png');
}

function create() {


    let character: AnimChar = this.plugins.start('AnimChar', 'xxx');

    character.config({ head: 'head' })

    character.draw(this)

    character.move();
}

function update() {

}


