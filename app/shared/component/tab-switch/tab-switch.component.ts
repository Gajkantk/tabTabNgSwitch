import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab-switch',
  templateUrl: './tab-switch.component.html',
  styleUrls: ['./tab-switch.component.scss']
})
export class TabSwitchComponent implements OnInit {
  public price:string = "5"
  public value:string = "5"

  constructor() { }

  ngOnInit(): void {
  }

}
