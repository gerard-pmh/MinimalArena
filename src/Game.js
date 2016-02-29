import State from './State';

export default class Game extends Phaser.Game {

  constructor () {
    super();
    this.state.add('State', State, false);
    this.state.start('State');
  }
}
