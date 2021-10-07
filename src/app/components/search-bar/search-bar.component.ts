import { Component, OnInit, SimpleChanges, Input, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {
 
  search: any;

  constructor(private router: Router) { }
  //@Input()  name = '';
  @Output() srchtxt = new EventEmitter<boolean>();

  ngOnInit(): void {
  }

  clearSearch(){
    this.search = '';
    this.srchtxt.emit(false);
  }

  runSearch(){
    this.srchtxt.emit(this.search);
  }
  
  onSubmit(form: NgForm) {
    this.srchtxt.emit(form.value.search);
    
  }
}
