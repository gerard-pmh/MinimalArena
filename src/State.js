import Graphics from './Graphics';

export default class State extends Phaser.State {

  static init () {
    // Sizing here
    this.game.scale.startFullScreen();
  }

  static resize() {
    // And here
  }

  static preload () {
    // Load assets
  }

  static create () {
    // Graphics and Engine
    this.graphics = new Graphics(this.game);
    this.graphics.drawLevel();
    this.graphics.drawPlayers();
  }

  static update () {
    // Same
  }
}
