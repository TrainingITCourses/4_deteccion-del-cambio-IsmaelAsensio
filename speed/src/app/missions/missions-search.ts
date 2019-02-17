import { Component, OnInit, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-missions-search',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './missions-search.html',
  styleUrls: ['./missions-search.css']
})

export class MissionsSearchComponent implements OnInit {

  @Output() public eventSearchMissions = new EventEmitter();

  constructor() {}

  ngOnInit() {
  }

  onKey(event: any) {
    const textToSearch = event.target.value;
    this.eventSearchMissions.next(textToSearch);
  }

}
