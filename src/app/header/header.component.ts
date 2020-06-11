import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
    value: string
    label: string

    submitSearch(event){
      console.log('search button was clicked!',event)
    }
  constructor() { }

  ngOnInit(): void {
    
  }

}
