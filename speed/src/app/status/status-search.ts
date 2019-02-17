import { Component, OnInit, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-status-search',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './status-search.html',
  styleUrls: ['./status-search.css']
})

export class StatusSearchComponent implements OnInit {

  @Output() public eventSearchStatus = new EventEmitter();

  constructor() {}

  ngOnInit() {
  }

  onKey(event: any) {
    const textToSearch = event.target.value;
    this.eventSearchStatus.next(textToSearch);
  }

}
