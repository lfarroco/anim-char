var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
define(["require", "exports", "../src/main"], function (require, exports, main_1) {
    "use strict";
    exports.__esModule = true;
    var Boot = /** @class */ (function (_super) {
        __extends(Boot, _super);
        function Boot() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Boot.prototype.create = function () {
            this.scene.add('xx', main_1["default"], true);
            var scene = this.scene.get('xx');
            scene.render({ x: 10, y: 40, head: 'head', arm: 'arm', body: 'body', leg: 'leg' });
            scene.move(400, 200);
            this.scene.add('c2', main_1["default"], true);
            var chara2 = this.scene.get('c2');
            chara2.render({ x: 40, y: 140, head: 'head', arm: 'arm', body: 'body', leg: 'leg' });
            chara2.move(600, 300);
            this.time.addEvent({
                callback: function () {
                    scene.blink();
                    chara2.blink();
                },
                loop: true,
                delay: 2000
            });
        };
        Boot.prototype.update = function () {
            // let scene = <AnimChar>this.scene.get('xx')
            // scene.move(400,200)
        };
        Boot.prototype.init = function () {
            console.log('main - init!');
        };
        Boot.prototype.preload = function () {
            this.load.image('head', '../test/assets/head.png');
            this.load.image('body', '../test/assets/body.png');
            this.load.image('arm', '../test/assets/arm.png');
            this.load.image('leg', '../test/assets/leg.png');
        };
        return Boot;
    }(Phaser.Scene));
    var config = {
        type: Phaser.AUTO,
        parent: 'game',
        width: 800,
        height: 600,
        scene: [Boot]
    };
    var game = new Phaser.Game(config);
});
