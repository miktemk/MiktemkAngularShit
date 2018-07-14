import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import * as visjs from 'ngx-vis';

import * as _ from 'lodash';
import { MyVisjsEgde } from './my-hacked-models';


@Component({
  selector: 'my-test-visjs-page',
  templateUrl: './test-visjs-page.component.html',
  styleUrls: ['./test-visjs-page.component.less']
})
export class TestVisjsPageComponent implements OnInit {

  visNetworkData: visjs.VisNetworkData;
  visNetworkId:string;

  @Output()
  onNodeSelected = new EventEmitter<any>();

  visNetworkOptions: visjs.VisNetworkOptions = {};
  internalVisNetworkData: visjs.VisNetworkData;

  constructor(
    private visNetworkService: visjs.VisNetworkService,
  ){
    this.visNetworkId = 'networkId1';
  }

  ngOnInit(){
    // .... simple test
    // this.internalVisNetworkData = <VisNetworkData>{
    //   nodes: [
    //     {id: 1, label: 'Node 1'},
    //     {id: 2, label: 'Node 2'},
    //     {id: 3, label: 'Node 3'},
    //     {id: 4, label: 'Node 4'},
    //     {id: 5, label: 'Node 5'}
    //   ],
    //   edges: [
    //     {from: 1, to: 3},
    //     {from: 1, to: 2},
    //     {from: 2, to: 4},
    //     {from: 2, to: 5},
    //     {from: 3, to: 3},
    //   ],
    // };
    // .... margin offsets
    // this.internalVisNetworkData = <VisNetworkData>{
    //   nodes:[
    //     { id: 1, label: 'Default Value\n(5)', x: -150, y: -150 },
    //     { id: 2, label: 'Single Value\n(25)', margin: 20, x: 0, y: 0 },
    //     { id: 3, label: 'Different Values\n(10, 20, 40, 30)', margin: { top: 10, right: 20, bottom: 40, left: 30 }, x: 120, y: 120},
    //     { id: 4, label: 'A Negative Value\n(10, 20, 40, -50)', margin: { top: 10, right: 20, bottom: 30, left: -20 }, x: 300, y: -300}
    //   ],
    //   edges:[
    //     {from: 1, to: 2},
    //     {from: 2, to: 3},
    //     {from: 3, to: 4}
    //   ],
    // };
    // .... colors
    this.internalVisNetworkData = <visjs.VisNetworkData> {
      nodes: [
        {id: 1, label:'html color', color: 'lime'},
        {id: 2, label:'rgb color', color: 'rgb(255,168,7)'},
        {id: 3, label:'hex color', color: '#7BE141'},
        {id: 4, label:'rgba color', color: 'rgba(97,195,238,0.5)'},
        {id: 5, label:'colorObject', color: {background:'pink', border:'purple'}},
        {id: 6, label:'colorObject + highlight', color: {background:'#F03967', border:'#713E7F',highlight:{background:'red',border:'black'}}},
        {id: 7, label:'colorObject + highlight + hover', color: {background:'cyan', border:'blue',highlight:{background:'red',border:'blue'},hover:{background:'white',border:'red'}}}
      ],
      edges: [
        <MyVisjsEgde> {from: 1, to: 3, id: 'shit', label: 'shits', width: 2},
        <MyVisjsEgde> {from: 3, to: 1, id: 'shit2', width: 4},
        <MyVisjsEgde> {from: 1, to: 2, arrows:'to', dashes:true},
        <MyVisjsEgde> {from: 2, to: 4, arrows:'to, from'},
        <MyVisjsEgde> {from: 2, to: 5, arrows:{to:{scaleFactor:2}}, width: 5},
        <MyVisjsEgde> {from: 2, to: 6, arrows:{middle:{scaleFactor:0.5},from:true}},
        <MyVisjsEgde> {from: 4, to: 7},
      ]
    };
    // .... TODO
    // this.internalVisNetworkData = <VisNetworkData>{
    //   nodes: [
    //   ],
    //   edges:[
    //   ]
    // };
    this.visNetworkOptions = <visjs.VisNetworkOptions> {
      nodes: {
        shape: 'box', // CODE: this is how to make nodes rectangular
        borderWidth: 2,
      },
      edges: {
        arrows: {
          to: true
        }
      },
      interaction: {
        hover: true,
      }
    };
  }

  ngOnChanges(){

    //this.setToEmptyNetwork();
    // setTimeout(()=>{
    //   if(!this.visNetworkData || (this.visNetworkData as any)== ""){
    //     this.setToEmptyNetwork();
    //   }
    //   else{
    //     this.internalVisNetworkData = this.visNetworkData as VisNetworkData;
    //   }
    //   if(this.internalVisNetworkData && this.internalVisNetworkData.nodes && this.internalVisNetworkData.nodes.length>0){
    //     this.isNetworkEmpty = false;
    //   }
    // });

  }

  public networkInitialized(): void {

    // now we can use the service to register on events
    this.visNetworkService.on(this.visNetworkId, 'click');

    // open your console/dev tools to see the click params
    this.visNetworkService.click
      .subscribe((eventData: any[]) => {
        if (eventData[0] === this.visNetworkId) {
          let nodeId = eventData[1].nodes[0];
          // let visNode = _.find(this.visNetworkData.nodes, n => n.id == nodeId);
          // this.onNodeSelected.emit(visNode);
        }
      });
  }

  fitNetwork(){
    if(this.visNetworkData){
      this.visNetworkService.fit( this.visNetworkId);
    }
  }

}

