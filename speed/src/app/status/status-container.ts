import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
// import statusJson from '../../assets/data/launchstatus.json';
import launchesJson from '../../assets/data/launches.json';

@Component({
  selector: 'app-status-container',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <app-status-search
      (eventSearchStatus)="onSearchStatus($event)">
    </app-status-search>
    <app-launches-display [launches]="launchesResult"> </app-launches-display>
  `
  ,
  styles: []
})

export class StatusContainerComponent implements OnInit {

  public launch;
  public launchesResult: any[] = [];

  constructor() {}

  ngOnInit() {
  }

  onSearchStatus(id: string) {
    this.launch = [];
    let idNum;

    try {
      idNum = parseInt(id, 10);

      for (let i = 0; i < launchesJson.count; i++) {
        if (launchesJson.launches[i].status === idNum) {
          this.launch.push(launchesJson.launches[i]);
        }
      }

    } catch {

    } finally {
      this.launchesResult = this.launch;
    }
  }

}
