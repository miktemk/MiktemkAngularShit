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
  bgScrolling: Phaser.TileSprite;
  player: Phaser.Sprite;
  bullets: Phaser.Group;
  cursors: Phaser.CursorKeys;
  fireButton: Phaser.Key;
  bulletTime: number;
  
  preload(game: Phaser.Game) {
    game.load.image('bg', 'assets/img/test-anime.jpg');
    game.load.image('girl', 'assets/img/duke3d-stripper.gif');
    game.load.image('player', 'assets/img/player.svg');
    game.load.image('bullet', 'assets/img/bullet.svg');
  }

  create(game: Phaser.Game) {
    this.bgScrolling = game.add.tileSprite(0, 0, 800, 600, 'bg');

    this.player = game.add.sprite(game.world.centerX, game.world.centerY, 'player');
    this.player.anchor.setTo(0.5, 0.5);
    game.physics.enable(this.player, Phaser.Physics.ARCADE);

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

    this.bulletTime = game.time.now + 200;
    
    //var girl = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY, 'girl');
    //girl.anchor.setTo(1, 1);
    //girl.anchor.setTo(0, 0);
    //girl.anchor.setTo(0.5, 0.5);
  }

  update(game: Phaser.Game) {
    this.bgScrolling.tilePosition.y += 2;
    this.player.body.velocity.x = 0;
    if (this.cursors.left.isDown)
      this.player.body.velocity.x = -350;
    if (this.cursors.right.isDown)
      this.player.body.velocity.x = 350;
    if (this.fireButton.isDown)
      this.fireBullets(game);
  }

  fireBullets(game: Phaser.Game) {
    if (game.time.now > this.bulletTime) {
      var bullet = this.bullets.getFirstExists(false);
      if (bullet) {
        bullet.reset(this.player.x, this.player.y);
        bullet.body.velocity.y = -300;
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

 