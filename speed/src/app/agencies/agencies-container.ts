import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import launchesJson from '../../assets/data/launches.json';

@Component({
  selector: 'app-agencies-container',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <app-search
      (eventSearchAgencies)="onSearchAgencies($event)">,
      (eventSearchMissions)="onSearchMissions($event)">
    </app-search>
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

  onSearchMissions(textToSearch: string) {
    this.launch = [];

    if (textToSearch.length) {
      for (let i = 0; i < launchesJson.count; i++) {
        if (launchesJson.launches[i].missions){
          for (let x = 0; x < launchesJson.launches[i].missions.length; x++) {
            if ((launchesJson.launches[i].missions[x].name.toLowerCase().search(textToSearch.toLowerCase()) !== -1)
             || (launchesJson.launches[i].missions[x].description.toLowerCase().search(textToSearch.toLowerCase()) !== -1)){
              this.launch.push(launchesJson.launches[i]);
            }
          }
        }
      }
    }

    this.launchesResult = this.launch;
  }

}
