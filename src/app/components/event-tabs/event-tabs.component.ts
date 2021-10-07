import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-event-tabs',
  templateUrl: './event-tabs.component.html',
  styleUrls: ['./event-tabs.component.scss']
})
export class EventTabsComponent implements OnInit {
  @Input('venues') venues:any = '';
  @Input('priceranges') priceranges:any = '';
  @Input('dates') dates:any = '';
  @Input('name') name:any = '';
  @Input('images') images:any = '';
  
  constructor() { }

  ngOnInit(): void {
    
  }

}
