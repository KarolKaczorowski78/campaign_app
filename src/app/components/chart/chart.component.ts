import { Component, Input, OnInit } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {

  @Input() values: number[];

  constructor() { }

  ngOnInit(): void {
    console.log(document.getElementById('chart'))

    var ctx = (document.getElementById('chart') as HTMLCanvasElement).getContext('2d');
    new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['Beginning', 'Now'],
        datasets: [{
          label: 'Funds',
          data: this.values,
          borderColor: '#393939',
          lineTension: .8,
        }]
      }
    });
  }
}
