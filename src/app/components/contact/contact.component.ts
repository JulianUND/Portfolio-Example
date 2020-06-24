import { Component, OnInit, ViewChild } from '@angular/core';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  public widthSlider: number;
  public anchuraToSlider: any;
  public captions: boolean;
  public autor: any;
  
  // sirve para trabajar con plantillas creadas y se llaman por el viewchild
  @ViewChild('textos') textos;

  constructor() { 
    this.captions = true;
  }

  ngOnInit(): void {
    var opcionClasica = document.querySelector('#texto').innerHTML;
    // alert(opcionClasica);
  }
   cargarSlider(){
     this.anchuraToSlider = this.widthSlider;
   }

   resetSlider(){
     this.anchuraToSlider = false;  
   }

   getAutor(event){ 
     this.autor = event;
   }

}
