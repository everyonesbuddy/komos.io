import { Component, OnInit, OnChanges } from '@angular/core';
import { Router } from '@angular/router';
import { EventService } from 'src/app/services/event.service';
import { Event } from '../../Event';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  events: Event[] = [];
  sub: any;
  msg: any;
 
  constructor(private eventService: EventService, private router: Router) { }

  ngOnInit(): void {
    this.msg="Loading...";
    this.eventService.getAllEvents().subscribe((events:any) => {
      this.events = events._embedded.events;
      this.msg="No Events";

    });    
  }

  
  openEventDetails(id: string): void {
    this.router.navigate(['details', id]);   
  }

  onSearch(search: any) {
    this.sub = search;
  }

}
