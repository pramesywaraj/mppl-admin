import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-datastok',
  templateUrl: './datastok.component.html',
  styleUrls: ['./datastok.component.scss']
})
export class DatastokComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    window.dispatchEvent(new Event('resize'));
    document.body.className = 'hold-transition skin-blue sidebar-mini';
  }

}
