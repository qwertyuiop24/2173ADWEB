import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'bootstrap';
  clickCount=0
  clickMe(){
    this.clickCount++;
  }
  resetClickCount(){
    this.clickCount=0;
  }
  minusClickCOunt(){
    
    this.clickCount--;
  }
}
