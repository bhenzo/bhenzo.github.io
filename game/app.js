var config = {
    type: Phaser.AUTO,
    width: 1000,
    height: 1000/* 1024 * 0.92,*/,
    scale: {
       // mode: Phaser.Scale.WIDTH_CONTROLS_HEIGHT,
        mode: Phaser.Scale.ENVELOP,
        autoCenter: Phaser.Scale.CENTER_BOTH,
        parent: 'gbscreen'
    },
    backgroundColor: '#73d216',
    parent: 'gbscreen',
    dom: {
        createContainer: true
    },
    scene: {
        preload: preload,
        create: create
    }
};

var game = new Phaser.Game(config);

function preload ()
{
    this.load.plugin('rexpixelationpipelineplugin', './game/rexpixelationpipelineplugin.min.js', true);

}

function create ()
{
  
    


    var container = this.add.container(500, 500);
    var rect = this.add.rectangle(0, 0, 316, 316, 0x57931c);
    //#41681a
    let text = this.add.text(0, -320, 'GLASYS',
     { fontFamily: 'Georgia, "Goudy Bookletter 1911", Times, serif' });
    text.setFontSize(230);
    text.setColor("#41681a");
    text.setOrigin(0.5);

    container.add([ rect, text ]);
 
    this.tweens.add({
        targets: rect,
        angle: 360,
        duration: 6000,
        loop: -1
    });
    
    this.tweens.add({
        targets: rect,
        scale: 5,
        duration: 500,
        loop: -1
    });
  
    this.tweens.add({
        targets: text,
        scale: 1.2,
        duration: 300,
        ease: "Sine.easeInOut",
        yoyo: true,
        loop: -1
    });
 
    let self = this;


    this.cameraFilter = this.plugins.get('rexpixelationpipelineplugin').add(this.cameras.main);
    this.cameraFilter.pixelWidth = 10;
    this.cameraFilter.pixelHeight = 10;
}