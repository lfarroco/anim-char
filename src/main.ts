import { Scene } from "phaser";

interface AnimCharConfig{
    x:number
    y:number
    head:string
    body:string
    arm:string
    leg:string
}
class AnimChar extends Phaser.Scene {

    rightEye: Phaser.GameObjects.Graphics;
    leftEye: Phaser.GameObjects.Graphics;
    container: Phaser.GameObjects.Container;
    leg: Phaser.GameObjects.Sprite;
    arm: Phaser.GameObjects.Sprite;
    body: Phaser.GameObjects.Sprite;
    head: Phaser.GameObjects.Sprite;

    create() {

    }
    boot(){
        console.log('boot!')
    }

    render(config:AnimCharConfig) {

        let graphics = this.add.graphics();

        graphics.clear();

        graphics.fillStyle(0x9966ff, 1)
        graphics.fillCircle(10, 10, 20)

        this.container = this.add.container(config.x,config.y);

        let x = config.x;
        let y = config.y;

        this.head = this.add.sprite(0, 0, config.head)
        this.body = this.add.sprite(x+50,y+50,config.body)
        this.arm = this.add.sprite(x-10,y+100,config.arm)
        this.leg = this.add.sprite(x-10,y+150,config.leg)

        let headContainer = this.add.container(config.x,config.y,this.head)

        let leftEye = this.add.graphics();

        leftEye.fillStyle(0x000000,1);
        leftEye.fillCircle(10,0,6)
        leftEye.scaleX = 0.5;

        this.leftEye = leftEye;

        headContainer.add(leftEye);

        let rightEye = this.add.graphics();

        leftEye.fillStyle(0x000000,1);
        leftEye.fillCircle(40,-1,6)
        leftEye.scaleX = 0.5;

        this.rightEye = rightEye;

        headContainer.add(rightEye);

        this.container.add([headContainer,this.body,this.arm,this.leg])

    }

    move(x: number, y: number) {

        let tween = this.tweens.add({
            targets: this.container,
            props: {
                x: { value: 400, duration: 5000, ease: 'Linear' },
                y: { value: 300, duration: 1000, ease: 'Bounce.easeInOut', yoyo: true, delay: 1000 }
            }, delay: 100
        });
 
    }
 
    blink(){
        this.tweens.add({
         targets : [this.leftEye,this.rightEye],
         props: {
             scaleY : { value: 0, duration: 300, ease:'Bounce.easeInOut',yoyo:true}
         }
        })
    }

}

export default AnimChar