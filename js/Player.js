class Player {
  constructor() {
    this.name = null;
    this.index = null;
    this.positionX = 0;
    this.positionY = 0;
    this.ga0 = 100;
    this.bitcoin=0;
    this.vida=20;
  this.foneruim=0
  }

  addPlayer() {
    var playerIndex = "players/player" + this.index;

    if (this.index === 1) {
      this.positionX = width / 2 - 100;
    } else {
      this.positionX = width / 2 + 100;
    }

    database.ref(playerIndex).set({
      name: this.name,
      positionX: this.positionX,
      positionY: this.positionY,
    });
  }

  getCount() {
    var playerCountRef = database.ref("contagemdevettel");
    playerCountRef.on("value", data => {
      contagemdevettel= data.val();
    });
  }

  updateCount(count) {
    database.ref("/").update({
      contagemdevettel: count
    });
  }
  getfinal() {
    var playerCountRef = database.ref("final");
    playerCountRef.on("value", data => {
      this.foneruim= data.val();
    });
  }

  updatefinal(count) {
    database.ref("/").update({
      final: count
    });
  }
  static getPlayersInfo() {
    var playerInfoRef = database.ref("players");
    playerInfoRef.on("value", data => {
      allPlayers = data.val();
    });
 
  }
  update() {
    var playerIndex = "players/player" + this.index;
    database.ref(playerIndex).update({
      positionX: this.positionX,
      positionY: this.positionY,

    });
  }
}

