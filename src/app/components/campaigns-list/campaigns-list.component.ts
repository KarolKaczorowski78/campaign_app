import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ICampaign } from 'src/app/__types__/ICampaign';

@Component({
  selector: 'app-campaigns-list',
  templateUrl: './campaigns-list.component.html',
  styleUrls: ['./campaigns-list.component.scss']
})
export class CampaignsListComponent {
  
  @Input() campaigns: ICampaign[] = [];
  @Output() removeCampaign = new EventEmitter<number>();

}
