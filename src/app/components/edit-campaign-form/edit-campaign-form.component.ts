import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CampaingsService } from 'src/app/services/campaigns-service/campaigns.service';
import { ICampaign } from 'src/app/__types__/ICampaign';
import { keywords } from 'src/app/__types__/Keywords';
import { Towns } from 'src/app/__types__/Towns';
import { emptyCampaign } from 'src/emptyCampaign';

@Component({
  selector: 'app-edit-campaign-form',
  templateUrl: './edit-campaign-form.component.html',
  styleUrls: ['./edit-campaign-form.component.scss']
})
export class EditCampaignFormComponent implements OnInit, OnChanges {
  
  @Input() campaign: ICampaign;
  // @Input() role: 'update' | 'create';

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

      // if (this.role === 'create') {
      //   await this.CampaignsService.create(newCampaign);
      //   this.Router.navigate(['/campaigns'])
      // } else {
      //   await this.CampaignsService.update(this.campaign.id, newCampaign);
      //   this.Router.navigate([`/campaigns/${newCampaign.id}`])
      // }
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

  ngOnChanges(changes: SimpleChanges) {
    if (changes.campaign.previousValue !== changes.campaign.currentValue) {
      this.chosenKeywords = [...this.campaign.keywords];
      this.status = this.campaign.status;
      this.initForm();
    }
  }

  initForm() {
    this.form = this.FormBuilder.group({
      name: [this.campaign.name, Validators.required],
      funds: [this.campaign.funds[this.campaign.funds.length - 1], Validators.required],
      bid_ammount: [this.campaign.bid_ammount, Validators.required],
      radius: [this.campaign.radius, Validators.required],
      town: [this.campaign.town, Validators.required],
    })
  }
}