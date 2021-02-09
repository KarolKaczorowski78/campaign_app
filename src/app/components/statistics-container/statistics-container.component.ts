import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-statistics-container',
  templateUrl: './statistics-container.component.html',
  styleUrls: ['./statistics-container.component.scss']
})
export class StatisticsContainerComponent {

  @Input() campaignsAmmount: number = 0;
  @Input() totalFunds: number = 0;
  @Input() activeCampaigns: number = 0;

}
