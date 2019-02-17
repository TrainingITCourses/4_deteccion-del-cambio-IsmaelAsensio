import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import launchesJson from '../../assets/data/launches.json';

@Component({
  selector: 'app-agencies-container',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <app-agencies-search
      (eventSearchAgencies)="onSearchAgencies($event)">
    </app-agencies-search>
    <app-launches-display [launches]="launchesResult"> </app-launches-display>
  `
  ,
  styles: []
})

export class AgenciesContainerComponent implements OnInit {

  public launch;
  public launchesResult: any[] = [];

  constructor() {}

  ngOnInit() {
  }

  onSearchAgencies(textToSearch: string) {
    this.launch = [];

    if (textToSearch.length) {
      for (let i = 0; i < launchesJson.count; i++) {
        if (launchesJson.launches[i].lsp){
          if (launchesJson.launches[i].lsp.name.toLowerCase().search(textToSearch.toLowerCase()) !== -1) {
            this.launch.push(launchesJson.launches[i]);        }
        }
      }
    }

    this.launchesResult = this.launch;

  }
}
