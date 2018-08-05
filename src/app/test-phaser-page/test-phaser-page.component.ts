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


class SimpleGame {

  constructor(myCanvasElem: ElementRef) {
    this.game = new Phaser.Game(800, 600, Phaser.AUTO, myCanvasElem.nativeElement, { preload: this.preload, create: this.create });
  }

  game: Phaser.Game;

  preload() {
    this.game.load.image('bg', 'assets/img/test-anime.jpg');
    this.game.load.image('girl', 'assets/img/duke3d-stripper.gif');
    this.game.load.image('svgg', 'assets/img/svg-test.svg');
  }

  create() {
    var bg = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY, 'bg');
    bg.anchor.setTo(0.5, 0.5);
    var svgTest = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY, 'svgg');
    svgTest.anchor.setTo(0.5, 0.5);
    // var girl = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY, 'girl');
    // girl.anchor.setTo(0.5, 0.5);
  }

}

