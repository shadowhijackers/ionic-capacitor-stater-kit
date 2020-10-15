import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styles: [
    `
    .tab-selected{
      color: var(--ion-color-secondary) !important;
    }
    `
  ],
})
export class TabsPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
