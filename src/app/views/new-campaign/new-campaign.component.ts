import { Component } from '@angular/core';
import { emptyCampaign } from 'src/app/data/emptyCampaign';

@Component({
  selector: 'app-new-campaign',
  templateUrl: './new-campaign.component.html',
  styleUrls: ['./new-campaign.component.scss']
})
export class NewCampaignComponent {

  campaign = emptyCampaign;

}
