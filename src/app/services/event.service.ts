import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Event } from '../Event';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment as env } from 'src/environments/environment'

@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor( private http: HttpClient) { }

  getAllEvents(): Observable<Event[]> {
    return this.http.get<Event[]>(
      `${env.BASE_URL}`
    )
  }


  getEventDetails(id: string): Observable<any> {
    return this.http.get(`https://app.ticketmaster.com/discovery/v2/events/${id}.json?apikey=${env.API_KEY}`);
  }

}
