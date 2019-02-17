import { Component, OnInit, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-search',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './agencies-search.html',
  styleUrls: ['./agencies-search.css']
})

export class AgenciesSearchComponent implements OnInit {

  @Output() public eventSearchAgencies = new EventEmitter();
  @Output() public eventSearchMissions = new EventEmitter();

  constructor() {}

  ngOnInit() {
  }

  onKeyAgencies(event: any) {
    const textToSearch = event.target.value;
    this.eventSearchAgencies.next(textToSearch);
  }

  onKeyMissions(event: any) {
    const textToSearch = event.target.value;
    this.eventSearchMissions.next(textToSearch);
  }


}
