import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CampaingsService } from 'src/app/services/campaigns-service/campaigns.service';
import { ICampaign } from 'src/app/__types__/ICampaign';

@Component({
  selector: 'app-campaign',
  templateUrl: './campaign.component.html',
  styleUrls: ['./campaign.component.scss']
})
export class CampaignComponent implements OnInit {

  campaign: ICampaign | null = null;

  constructor(
    private ActiveRouter: ActivatedRoute,
    private CampaignsService: CampaingsService
  ) { }

  ngOnInit(): void {
    (async () => {
      const id = this.ActiveRouter.snapshot.paramMap.get('id');
      this.campaign = await this.CampaignsService.getById(id);
    })()
  }

}
