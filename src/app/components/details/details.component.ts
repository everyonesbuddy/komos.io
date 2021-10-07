import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { EventService } from 'src/app/services/event.service';
import { Event } from '../../Event';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  eventId: string | any ;
  event: any;//Event | undefined;
  eventvenue: any;
  sub: any;

  constructor(private eventService: EventService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.getEventDetails();
     
  }

  getEventDetails() {
    
    this.activatedRoute.params.subscribe(
      params => {
        let id = params['id'];        
        this.eventService.getEventDetails(id).subscribe((eventResp: Event) => {
             this.event = eventResp;
        });
      }
   );
    
  }

  onSearch(search: any) {
    this.sub = search;
  }

}
