import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-switch-button',
  templateUrl: './switch-button.component.html',
  styleUrls: ['./switch-button.component.scss']
})
export class SwitchButtonComponent implements OnInit {

  @Input() state: boolean;

  constructor() { }

  handleSwitch() {
    this.state = !this.state;
  }

  ngOnInit(): void {
    console.log(this.state);
  }

}
