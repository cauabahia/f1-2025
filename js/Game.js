class Game {
  constructor() {this.r = createButton("re");
this.bobs=false
}
botaor(){
this.r.position(20,20)
this.r.class("customButtom")

}
press(){
  this.r.mousePressed(() => {
    database.ref("/").set({
      contagemdevettel:0,
      estadobob:0,
      players:{},final:0
    })
    window.location.reload()  
  })
    }

  getState() {
    var gameStateRef = database.ref("estadobob");
    gameStateRef.on("value", function(data) {
      estadobob = data.val();
    });
  }

  update(state) {
    database.ref("/").update({
      estadobob: state
    });
  }

  start() {
    player = new Player();
    contagemdevettel = player.getCount();
    capa=new Group()
    gaz=new Group()
    coin=new Group()
    form = new Form();
    form.display();
    this.bob(gaz,10,a,0.5)
    this.bob(coin,3,b,0.5)
    this.bob(capa,10,c,0.5)
    car1 = createSprite(width / 2 - 50, height - 100);
    car1.addImage("car1", car1_img);
    car1.scale = 0.6;

    car2 = createSprite(width / 2 + 100, height - 100);
    car2.addImage("car2", car2_img);
    car2.scale = 0.6;

    cars = [car1, car2];
  }

  handleElements() {
    form.hide();
    form.titleImg.position(40, 50);
    form.titleImg.class("gameTitleAfterEffect");
  }

  play() {
    this.handleElements();
this.botaor()
this.press()
Player.getPlayersInfo();
player.getfinal()
    if (allPlayers !== undefined) {
      image(track, 0, -height * 29, width, height * 30);
this.bobo()
this.bo()
      var index = 0;
      for (var plr in allPlayers) {
        //adicione 1 ao índice para cada loop
        index = index + 1;

        //use os dados do banco de dados para exibir os carros nas direções x e y
        var x = allPlayers[plr].positionX;
        var y = height - allPlayers[plr].positionY;

        cars[index - 1].position.x = x;
        cars[index - 1].position.y = y;

        if (index === player.index) {
          stroke(10);
          fill("red");
          ellipse(x, y, 60, 60);
         this.gasoza(index)
         this.bitcoin(index)
         this.poça(index)
          //alterar a posição da câmera na direção
          //camera.position.x = cars[index - 1].position.x;
          camera.position.y = cars[index - 1].position.y;
        }
      }
      const linha=height*30-200
      if(player.positionY>linha){
      estadobob=2
player.foneruim+=1
player.updatefinal(player.foneruim)
player.update()
this.showrank()
      }
      this.handlePlayerControls();
      drawSprites();
    }
  }
bob(grupo,quantidade,img,scale){
for(var i=0;i<quantidade;i++){
var alonso
var lewis
alonso= random(width/2+150,width/2-150)
lewis= random(-height*29.0,height-400)
var bobao
bobao=createSprite(alonso,lewis)
bobao.addImage(img)
bobao.scale=scale
grupo.add(bobao)
}



}
gasoza(indice){
cars[indice-1].overlap(gaz,function(colector,colected){
colected.remove()
player.ga0=100

})
if(player.ga0>0 && this.bobs==true){
player.ga0-=0.1
}
if(player.ga0<=0){
estadobob=2
this.gameOver()
  
}
}
bitcoin(indice){
  cars[indice-1].overlap(coin,function(colector,colected){
  colected.remove()
  player.bitcoin+=100
  
  })}

  poça(indice){
    cars[indice-1].overlap(capa,function(colector,colected){
    colected.remove()
    player.vida-=5
    
    })
    if(player.vida<=0){
estadobob=2
this.gameOver()
    }
}
  handlePlayerControls() {
    // manipulando eventos de teclado
    if (keyIsDown(UP_ARROW)) {
      player.positionY += 10;
      player.update();
    this.bobs=true
    }
    if (keyIsDown(LEFT_ARROW )&& player.positionX>413) {
      player.positionX -= 10;
      player.update();
    this.bobs=true
    }
    if (keyIsDown(RIGHT_ARROW)&& player.positionX<913) {
      player.positionX += 10;
      player.update();
    this.bobs=true
    }
  }
  bobo(){
image(pizza,width/2-400,height-player.positionY,20,20)
rect(width/2-450,height-player.positionY,player.vida,20)


  }
  bo(){
    image(a,width/2-400,height-player.positionY-100,20,20)
    rect(width/2-500,height-player.positionY-100,player.ga0,20)
  }
  showrank() {
    swal({
      title: `Incrível!${"\n"}Rank${"\n"}${player.final}`,
      text: "Você alcançou a linha de chegada com sucesso!",
      imageUrl:
        "https://raw.githubusercontent.com/vishalgaddam873/p5-multiplayer-car-race-game/master/assets/cup.png",
      imageSize: "100x100",
      confirmButtonText: "Ok"
    });
  }

  gameOver() {
    swal({
      title: `Fim de Jogo`,
      text: "Oops você perdeu a corrida!",
      imageUrl:
        "https://cdn.shopify.com/s/files/1/1061/1924/products/Thumbs_Down_Sign_Emoji_Icon_ios10_grande.png",
      imageSize: "100x100",
      confirmButtonText: "Obrigado por jogar"
    });
  }
}
