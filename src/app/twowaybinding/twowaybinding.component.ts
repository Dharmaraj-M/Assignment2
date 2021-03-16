import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-twowaybinding',
  templateUrl: './twowaybinding.component.html',
  styleUrls: ['./twowaybinding.component.css']
})
export class TwowaybindingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  twowayBindingVariable: string = '';
  myName:string = '';
  checkName() {
    if(this.twowayBindingVariable == 'Dharmaraj') {
      this.myName = 'Hi Dharmaraj!';
    }
    else {
      this.myName = 'Not my Name';
    }
  }
}
