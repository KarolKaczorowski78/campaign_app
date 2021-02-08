import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CampaignComponent } from './views/campaign/campaign.component';
import { EditCampaignComponent } from './views/edit-campaign/edit-campaign.component';
import { HomeComponent } from './views/home/home.component';
import { NewCampaignComponent } from './views/new-campaign/new-campaign.component';
import { ERoutePaths } from './__types__/ERoutePaths';

const routes: Routes = [
  { path: '', redirectTo: ERoutePaths.HOME, pathMatch: 'full' },
  { path: ERoutePaths.HOME, component: HomeComponent },
  { path: ERoutePaths.CAMPAIGN, component: CampaignComponent },
  { path: ERoutePaths.NEW_CAMPAIGN, component: NewCampaignComponent },
  { path: ERoutePaths.UPDATE_CAMPAIGN, component: EditCampaignComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
