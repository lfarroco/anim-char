import { Scene } from "phaser";

class AnimChar extends Phaser.Scene {

    config: any;
    head: null | Phaser.GameObjects.Sprite;

    create() {

    }

    render(config) {

        let graphics = this.add.graphics();

        graphics.clear();

        graphics.fillStyle(0x9966ff, 1)
        graphics.fillCircle(10, 10, 20)

        this.head = this.add.sprite(config.x, config.y, config.head)

    }

    move(x: number, y: number) {

        let tween = this.tweens.add({
            targets: this.head,
            props: {
                x: { value: 400, duration: 5000, ease: 'Linear' },
                y: { value: 300, duration: 1000, ease: 'Bounce.easeInOut', yoyo: true, delay: 1000 }
            }, delay: 100
        });

    }

}

export default AnimChar