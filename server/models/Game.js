class Game {
  constructor() {
    this.players = [];
  }
  addPlayer({ player }) {
    this.players.push(player);
  }
  getPlayer(id) {
    for (const player of this.players) {
      if (player.id == id) {
        return player;
      }
    }
  }
}

export default Game;
