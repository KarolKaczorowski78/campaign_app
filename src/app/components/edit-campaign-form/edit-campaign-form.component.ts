import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CampaingsService } from 'src/app/services/campaigns-service/campaigns.service';
import { ICampaign } from 'src/app/__types__/ICampaign';
import { keywords } from 'src/app/data/Keywords';
import { Towns } from 'src/app/data/Towns';
import { emptyCampaign } from 'src/app/data/emptyCampaign';

@Component({
  selector: 'app-edit-campaign-form',
  templateUrl: './edit-campaign-form.component.html',
  styleUrls: ['./edit-campaign-form.component.scss']
})
export class EditCampaignFormComponent implements OnInit {
  
  @Input() campaign: ICampaign;

  availableTowns: string[] = Towns;
  keywords: string[] = keywords;
  chosenKeywords: string[] = []
  isSubmitted = false;
  status = true;

  form: FormGroup;

  appendKeyword(keyword: string) {
    this.chosenKeywords.push(keyword);
  }

  removeKeyword(keyword: string) {
    this.chosenKeywords = this.chosenKeywords.filter(key => key !== keyword);
  }

  setStatus() {
    this.status = !this.status;
  }

  async onSubmit() {
    this.isSubmitted = true;

    if (this.form.valid) {
      const newCampaign: ICampaign = {
        id: this.campaign.id,
        name: this.form.controls.name.value,
        bid_ammount: parseInt(this.form.controls.bid_ammount.value),
        funds: [...this.campaign.funds, parseInt(this.form.controls.funds.value)],
        keywords: this.chosenKeywords,
        radius: parseFloat(this.form.controls.radius.value),
        town: this.form.controls.town.value,
        status: this.status,
      } as ICampaign;

      if (this.campaign === emptyCampaign) { // means that it's role is to create
        await this.CampaignsService.create(newCampaign);
        this.Router.navigate(['/campaigns'])
      } else {
        await this.CampaignsService.update(this.campaign.id, newCampaign);
        this.Router.navigate([`/campaigns/${newCampaign.id}`])
      }
    }
  }

  constructor(
    private FormBuilder: FormBuilder,
    private CampaignsService: CampaingsService,
    private Router: Router
  ) { }

  get registerFormControls() {
    return this.form.controls;
  }

  ngOnInit(): void {
    this.campaign = this.campaign ? this.campaign : emptyCampaign;

    this.chosenKeywords = [...this.campaign.keywords];
    this.initForm();
  }

  initForm() {
    this.form = this.FormBuilder.group({
      name: [this.campaign.name, Validators.required],
      funds: [this.campaign.funds[this.campaign.funds.length - 1], Validators.pattern(/^[0-9]*$/)],
      bid_ammount: [this.campaign.bid_ammount, Validators.pattern(/^[0-9]*$/)],
      radius: [this.campaign.radius, Validators.pattern(/^[0-9]*$/)],
      town: [this.campaign.town, Validators.required],
    })
  }
}