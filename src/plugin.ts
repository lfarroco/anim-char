import { Scene } from "phaser";


class AnimChar extends Phaser.Plugins.BasePlugin{

    headImage: Phaser.GameObjects.Sprite;
    head: string;
    graphics: Phaser.GameObjects.Graphics;
    parent:Scene

    constructor(pluginManager:Phaser.Plugins.PluginManager) {

        super(pluginManager);

        // this.scene = pluginManager.game.scene;
        // this.systems = scene.sys;
        // if (!scene.sys.settings.isBooted) {
        //     scene.sys.events.once('boot', this.boot, this);
        // }

    }
    //  Static function called by the PluginFile Loader.
    static register(PluginManager) {
        //  Register this plugin with the PluginManager, so it can be added to Scenes.
        //  The first argument is the name this plugin will be known as in the PluginManager. It should not conflict with already registered plugins.
        //  The second argument is a reference to the plugin object, which will be instantiated by the PluginManager when the Scene boots.
        //  The third argument is the local mapping. This will make the plugin available under `this.sys.base` and also `this.base` from a Scene if
        //  it has an entry in the InjectionMap.
        PluginManager.register('AnimChar', AnimChar, 'animchar');
    }

    boot() {
        var eventEmitter = this.systems.events;

        eventEmitter.on('start', this.start, this);

        eventEmitter.on('update',this.draw,this)

        eventEmitter.on('shutdown', this.shutdown, this);
        eventEmitter.on('destroy', this.destroy, this);
    }

    //  Called when a Scene is started by the SceneManager. The Scene is now active, visible and running.
    start() {

        console.log('plugin start!')

        // this.graphics = this.scene.add.graphics();
        // this.draw();

    }

    //  Called when a Scene shuts down, it may then come back again later (which will invoke the 'start' event) but should be considered dormant.
    shutdown() {
    }

    //  Called when a Scene is destroyed by the Scene Manager. There is no coming back from a destroyed Scene, so clear up all resources here.
    destroy() {
        this.shutdown();

        this.scene = undefined;
    }

    draw(parent:Scene){

        this.parent = parent;

        let graphics = parent.add.graphics();
        
        graphics.clear();

        graphics.fillStyle(0x9966ff, 1)
        graphics.fillCircle(10,10,20)

        this.headImage =  parent.add.sprite(100,100,this.head)

    }

    move(){

        this.parent.tweens.add({
            targets: this.headImage,
            props: {
                x: { value: 800, duration: 5000, ease: 'Linear' },
                y: { value: 100, duration: 1000, ease: 'Bounce.easeInOut', yoyo: true, delay: 1000 }
            }
        }); 

    }

    config(config:Config){

        this.head = config.head;

    }

}

interface Config{
    head: string
}

export default AnimChar