export default class StateManager extends Phaser.State {

  init () {
    // Sizing here
    this.game.scale.startFullScreen();
  }

  preload () {
    this.game.load.image('rabbit', 'rabbit.jpg')
  }

  create () {
    this.rabbit = this.game.add.sprite (
      this.game.world.centerX,
      this.game.world.centerY,
      'rabbit'
    );
    this.game.physics.enable(this.rabbit, Phaser.Physics.ARCADE);
  }

  update () {
    this.game.physics.arcade.moveToPointer(this.rabbit, 400);
  }
}
