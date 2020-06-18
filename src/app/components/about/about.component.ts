import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  public title: string;
  public subtitle: string;
  public email: string;

  constructor() {
    this.title = 'Julian Soto';
    this.subtitle = 'Front and Back Developer';
    this.email = 'Jdsoto95@hotmail.com';
  }

  ngOnInit(): void {
  }

}
