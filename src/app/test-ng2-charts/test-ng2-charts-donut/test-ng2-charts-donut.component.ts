import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-test-ng2-charts-donut',
  templateUrl: './test-ng2-charts-donut.component.html',
  styleUrls: ['./test-ng2-charts-donut.component.less']
})
export class TestNg2ChartsDonutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  // FROM: https://valor-software.com/ng2-charts/

  // Doughnut
  public doughnutChartLabels:string[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
  public doughnutChartData:number[] = [350, 450, 100];
  public doughnutChartType:string = 'doughnut';
 
  // events
  public chartClicked(e:any):void {
    console.log(e);
  }
 
  public chartHovered(e:any):void {
    console.log(e);
  }
}
