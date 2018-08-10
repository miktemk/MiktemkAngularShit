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

class MyGameStateMain extends Phaser.State {
  bgScrolling: Phaser.TileSprite;
  player: Phaser.Sprite;
  cursors: Phaser.CursorKeys;

  preload(game: Phaser.Game) {
    game.load.image('bg', 'assets/img/test-anime.jpg');
    game.load.image('girl', 'assets/img/duke3d-stripper.gif');
    game.load.image('player', 'assets/img/svg-test.svg');
  }

  create(game: Phaser.Game) {
    this.bgScrolling = game.add.tileSprite(0, 0, 800, 600, 'bg');

    this.player = game.add.sprite(game.world.centerX, game.world.centerY, 'player');
    this.player.anchor.setTo(0.5, 0.5);
    game.physics.enable(this.player, Phaser.Physics.ARCADE);

    this.cursors = game.input.keyboard.createCursorKeys();

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
  }
}

class SimpleGame {
  game: Phaser.Game;
  
  constructor(myCanvasElem: ElementRef) {
    let mainState = new MyGameStateMain();
    this.game = new Phaser.Game(800, 600, Phaser.AUTO, myCanvasElem.nativeElement, mainState);
  }
}

 