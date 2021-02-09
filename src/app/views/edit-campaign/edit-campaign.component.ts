import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CampaingsService } from 'src/app/services/campaigns-service/campaigns.service';
import { ICampaign } from 'src/app/__types__/ICampaign';

@Component({
  selector: 'app-edit-campaign',
  templateUrl: './edit-campaign.component.html',
  styleUrls: ['./edit-campaign.component.scss']
})
export class EditCampaignComponent implements OnInit {

  campaign: ICampaign | undefined;
  isLoading: boolean = true;

  constructor(
    private CampaignsService: CampaingsService,
    private ActiveRoute: ActivatedRoute  
  ) { }

  ngOnInit(): void {
    (async () => {
      const id = this.ActiveRoute.snapshot.paramMap.get('id');
      this.campaign = await this.CampaignsService.getById(id);
      this.isLoading = false;
    })()
  }

}
