import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'my-test-phaser-page',
  templateUrl: './test-phaser-page.component.html',
  styleUrls: ['./test-phaser-page.component.less']
})
export class TestPhaserPageComponent implements OnInit {

  @ViewChild('myDiv')
  myCanvasElem: ElementRef;

  constructor() { }

  ngOnInit() {
    var game = new SimpleGame(this.myCanvasElem);
  }

}

// TODO: move to commons so this is available GLOBALLY
const nameof = <T>(name: keyof T) => name;

class MyGameStateMain extends Phaser.State {
  dButton: Phaser.Key;
  aButton: Phaser.Key;
  eagle: Phaser.Sprite;
  bgScrolling: Phaser.TileSprite;
  bgScrolling2: Phaser.TileSprite;
  player: Phaser.Sprite;
  bullets: Phaser.Group;
  cursors: Phaser.CursorKeys;
  fireButton: Phaser.Key;
  bulletTime: number;
  
  preload(game: Phaser.Game) {
    game.load.image('bg', 'assets/img/bg1.jpg');
    //game.load.image('bg-trash', 'assets/img/bg-trash.svg');
    game.load.image('bg-trash', 'assets/img/bg-trash-lizarded.svg');
    game.load.image('girl', 'assets/img/duke3d-stripper.gif');
    game.load.image('eagle', 'assets/img/eagle-villain.png');
    //game.load.image('player', 'assets/img/player.svg');
    game.load.image('player', 'assets/img/santo-gun.png');
    game.load.image('bullet', 'assets/img/bullet.svg');
    game.load.audio('music', 'assets/audio/rising-sun.mp3');
  }

  create(game: Phaser.Game) {
    this.bgScrolling = game.add.tileSprite(0, 0, 800, 600, 'bg');
    
    this.eagle = game.add.sprite(game.world.centerX+200, game.world.centerY, 'eagle');
    this.eagle.anchor.setTo(0.5, 0.5);
    game.physics.enable(this.eagle, Phaser.Physics.ARCADE);

    this.player = game.add.sprite(game.world.centerX, game.world.centerY, 'player');
    this.player.anchor.setTo(0.5, 0.5);
    game.physics.enable(this.player, Phaser.Physics.ARCADE);

    this.bgScrolling2 = game.add.tileSprite(0, 0, 800, 600, 'bg-trash');
    
    this.cursors = game.input.keyboard.createCursorKeys();

    this.bullets = game.add.group();
    this.bullets.enableBody = true;
    this.bullets.physicsBodyType = Phaser.Physics.ARCADE;
    this.bullets.createMultiple(30, 'bullet');
    this.bullets.setAll('anchor.x', 0.5);
    this.bullets.setAll('anchor.y', 1);
    this.bullets.setAll(nameof<Phaser.Sprite>('outOfBoundsKill'), true);
    this.bullets.setAll(nameof<Phaser.Sprite>('checkWorldBounds'), true);

    this.fireButton = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
    this.aButton = game.input.keyboard.addKey(Phaser.Keyboard.A);
    this.dButton = game.input.keyboard.addKey(Phaser.Keyboard.D);

    this.bulletTime = game.time.now + 200;

    let music = game.add.audio('music', 1, true);
    music.play();
    
    //var girl = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY, 'girl');
    //girl.anchor.setTo(1, 1);
    //girl.anchor.setTo(0, 0);
    //girl.anchor.setTo(0.5, 0.5);
  }

  update(game: Phaser.Game) {
    this.bgScrolling.tilePosition.x += 2;
    this.bgScrolling2.tilePosition.x += 3;
    this.player.body.velocity.x = 0;
    this.eagle.body.velocity.x = 0;
    if (this.cursors.left.isDown)
      this.player.body.velocity.x = -350;
    if (this.cursors.right.isDown)
      this.player.body.velocity.x = 350;
    if (this.aButton.isDown)
      this.eagle.body.velocity.x = -350;
    if (this.dButton.isDown)
      this.eagle.body.velocity.x = 350;
    if (this.fireButton.isDown)
      this.fireBullets(game);
  }

  fireBullets(game: Phaser.Game) {
    if (game.time.now > this.bulletTime) {
      var bullet = this.bullets.getFirstExists(false);
      if (bullet) {
        bullet.reset(this.player.x + 70, this.player.y-40);
        bullet.body.velocity.x = 300;
        this.bulletTime = game.time.now + 200;
      }
    }
  }
}

class SimpleGame {
  game: Phaser.Game;
  
  constructor(myCanvasElem: ElementRef) {
    let mainState = new MyGameStateMain();
    this.game = new Phaser.Game(800, 600, Phaser.AUTO, myCanvasElem.nativeElement, mainState);
  }
}

 