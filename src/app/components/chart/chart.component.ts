import { Component, ElementRef, Input, ViewChild, AfterViewInit } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements AfterViewInit {

  @Input() values: number[];
  @ViewChild('chart') chart: ElementRef<HTMLCanvasElement>;

  ngAfterViewInit(): void {
    const ctx = this.chart.nativeElement.getContext('2d');
    new Chart(ctx, {
      type: 'line',
      options: {
        responsive: true,
        maintainAspectRatio: true,
      },
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
