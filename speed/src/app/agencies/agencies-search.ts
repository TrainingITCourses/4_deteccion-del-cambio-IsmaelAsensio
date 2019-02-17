import { Component, OnInit, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-agencies-search',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './agencies-search.html',
  styleUrls: ['./agencies-search.css']
})

export class AgenciesSearchComponent implements OnInit {

  @Output() public eventSearchAgencies = new EventEmitter();

  constructor() {}

  ngOnInit() {
  }

  onKey(event: any) {
    const textToSearch = event.target.value;
    this.eventSearchAgencies.next(textToSearch);
  }

}
