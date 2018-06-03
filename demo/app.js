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
define("src/main", ["require", "exports"], function (require, exports) {
    "use strict";
    exports.__esModule = true;
    var AnimChar = /** @class */ (function (_super) {
        __extends(AnimChar, _super);
        function AnimChar() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        AnimChar.prototype.render = function (config) {
            var graphics = this.add.graphics();
            graphics.clear();
            graphics.fillStyle(0x9966ff, 1);
            graphics.fillCircle(10, 10, 20);
            this.container = this.add.container(config.x, config.y);
            var x = config.x;
            var y = config.y;
            this.head = this.add.sprite(0, 0, config.head);
            this.body = this.add.sprite(x + 50, y + 50, config.body);
            this.arm = this.add.sprite(x - 10, y + 100, config.arm);
            this.leg = this.add.sprite(x - 10, y + 150, config.leg);
            var headContainer = this.add.container(config.x, config.y, this.head);
            var leftEye = this.add.graphics();
            leftEye.fillStyle(0x000000, 1);
            leftEye.fillCircle(10, 0, 6);
            leftEye.scaleX = 0.5;
            this.leftEye = leftEye;
            headContainer.add(leftEye);
            var rightEye = this.add.graphics();
            leftEye.fillStyle(0x000000, 1);
            leftEye.fillCircle(40, -1, 6);
            leftEye.scaleX = 0.5;
            this.rightEye = rightEye;
            headContainer.add(rightEye);
            this.container.add([headContainer, this.body, this.arm, this.leg]);
        };
        AnimChar.prototype.move = function (x, y) {
            var tween = this.tweens.add({
                targets: this.container,
                props: {
                    x: { value: 400, duration: 5000, ease: 'Linear' },
                    y: { value: 300, duration: 1000, ease: 'Bounce.easeInOut', yoyo: true, delay: 1000 }
                }, delay: 100
            });
        };
        AnimChar.prototype.blink = function () {
            this.tweens.add({
                targets: [this.leftEye, this.rightEye],
                props: {
                    scaleY: { value: 0, duration: 300, ease: 'Bounce.easeInOut', yoyo: true }
                }
            });
        };
        return AnimChar;
    }(Phaser.Scene));
    exports["default"] = AnimChar;
});
define("demo/index", ["require", "exports", "src/main"], function (require, exports, main_1) {
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
        Boot.prototype.preload = function () {
            this.load.image('head', './assets/head.png');
            this.load.image('body', './assets/body.png');
            this.load.image('arm', './assets/arm.png');
            this.load.image('leg', './assets/leg.png');
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
