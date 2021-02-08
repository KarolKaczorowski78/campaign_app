import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ICampaign } from 'src/app/__types__/ICampaign';

@Component({
  selector: 'app-campaign-details',
  templateUrl: './campaign-details.component.html',
  styleUrls: ['./campaign-details.component.scss']
})
export class CampaignDetailsComponent {

  @Input() campaign: ICampaign | null = null;

  constructor(
    private ActivatedRoute: ActivatedRoute, 
    private Router: Router
  ) { }

  moveToUpdateView() {
    this.Router.navigate(['update'], { relativeTo: this.ActivatedRoute });
  }
}
