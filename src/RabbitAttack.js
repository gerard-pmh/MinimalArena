import StateManager from './StateManager';

export default class RabbitAttack extends Phaser.Game {

  constructor () {
    super();
    this.state.add('StateManager', StateManager, false);
    this.state.start('StateManager');
  }
}
