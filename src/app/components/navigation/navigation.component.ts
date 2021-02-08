import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { ERoutePaths } from 'src/app/__types__/ERoutePaths';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  title: string = '';

  constructor(private Router: Router) { }


  handleRouteChange() {
    switch (true) {
      case /\/campaigns\/.*\/update/.test(this.Router.url):
        return 'Update campaign'
      case /\/campaigns\/.*\/?/.test(this.Router.url):
        return 'Campaign details';
      case this.Router.url.includes(ERoutePaths.NEW_CAMPAIGN):
        return 'Create campaign';
      default:
        return 'Home';
    }
  }

  goHome() {
    this.Router.navigate([ERoutePaths.HOME]);
  }

  goToAddCampaign() {
    this.Router.navigate([ERoutePaths.NEW_CAMPAIGN])
  }

  ngOnInit() {
    this.Router.events.subscribe(() => { 
      this.title = this.handleRouteChange();
     })
  }
}