import { Component, OnInit } from '@angular/core';
import { CampaingsService } from 'src/app/services/campaigns-service/campaigns.service';
import { ICampaign } from 'src/app/__types__/ICampaign';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  campaigns: ICampaign[] = [];
  isLoading: boolean = true;

  constructor(private campaignsService: CampaingsService) { }

  async removeCampaign(id: string) {
    this.isLoading = true;
    await this.campaignsService.delete(id);
    this.campaigns = await this.campaignsService.getAll();
    this.isLoading = false;
  }

  getTotalFunds() {
    return this.campaigns.length === 0 ? 0 : this.campaigns.map(({ funds }) => funds[funds.length - 1]).reduce((acc, curr) => acc + curr)
  }

  getActive() {
    return this.campaigns.filter(({ status }) => status).length;
  }

  ngOnInit(): void {
    (async () => {
      this.campaigns = await this.campaignsService.getAll();
      this.isLoading = false;
    })()
  }

}
