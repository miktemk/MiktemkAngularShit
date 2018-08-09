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

  preload(game: Phaser.Game) {
    game.load.image('bg', 'assets/img/test-anime.jpg');
    game.load.image('girl', 'assets/img/duke3d-stripper.gif');
    game.load.image('svgg', 'assets/img/svg-test.svg');
  }

  create(game: Phaser.Game) {
    this.bgScrolling = game.add.tileSprite(0, 0, 800, 600, 'bg');

    var svgTest = game.add.sprite(game.world.centerX, game.world.centerY, 'svgg');
    svgTest.anchor.setTo(0.5, 0.5);
    //var girl = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY, 'girl');
    //girl.anchor.setTo(1, 1);
    //girl.anchor.setTo(0, 0);
    //girl.anchor.setTo(0.5, 0.5);
  }

  update(game: Phaser.Game) {
    this.bgScrolling.tilePosition.y += 2;
  }
}

class SimpleGame {
  game: Phaser.Game;
  
  constructor(myCanvasElem: ElementRef) {
    let mainState = new MyGameStateMain();
    this.game = new Phaser.Game(800, 600, Phaser.AUTO, myCanvasElem.nativeElement, mainState);
  }
}

 