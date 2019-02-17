import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import launchesJson from '../../assets/data/launches.json';

@Component({
  selector: 'app-missions-container',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <app-missions-search
      (eventSearchMissions)="onSearchMissions($event)">
    </app-missions-search>
    <app-launches-display [launches]="launchesResult"> </app-launches-display>
  `
  ,
  styles: []
})

export class MissionsContainerComponent implements OnInit {

  public launch;
  public launchesResult: any[] = [];

  constructor() {}

  ngOnInit() {
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
