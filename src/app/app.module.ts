import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './views/home/home.component';
import { CampaignComponent } from './views/campaign/campaign.component';
import { EditCampaignComponent } from './views/edit-campaign/edit-campaign.component';
import { NewCampaignComponent } from './views/new-campaign/new-campaign.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { CampaignsListComponent } from './components/campaigns-list/campaigns-list.component';
import { StatisticsContainerComponent } from './components/statistics-container/statistics-container.component';
import { CampaignDetailsComponent } from './components/campaign-details/campaign-details.component';
import { EditCampaignFormComponent } from './components/edit-campaign-form/edit-campaign-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ChartComponent } from './components/chart/chart.component';
import { SwitchButtonComponent } from './components/switch-button/switch-button.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CampaignComponent,
    EditCampaignComponent,
    NewCampaignComponent,
    NavigationComponent,
    CampaignsListComponent,
    StatisticsContainerComponent,
    CampaignDetailsComponent,
    EditCampaignFormComponent,
    ChartComponent,
    SwitchButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
