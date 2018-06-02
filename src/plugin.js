var Demo = new Phaser.Class({

    Extends: Phaser.Scene,

    initialize:

        function Demo() {
            Phaser.Scene.call(this);
        },

    create: function () {
        this.eye = this.add.image(Phaser.Math.Between(0, 800), Phaser.Math.Between(0, 600), 'eye');
    },

    update: function () {
        this.eye.rotation += 0.02;
    }

});

export default Demo