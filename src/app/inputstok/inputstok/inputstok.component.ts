import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inputstok',
  templateUrl: './inputstok.component.html',
  styleUrls: ['./inputstok.component.scss']
})
export class InputstokComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    window.dispatchEvent(new Event('resize'));
    document.body.className = 'hold-transition skin-blue sidebar-mini';
  }

}
