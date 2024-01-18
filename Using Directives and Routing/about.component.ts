import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {

  //String Interpolation
position = "Coach"
work_experience = 10
email = 'aronlayson79@gmail.com'
website = 'www.facebook.com'
phone = '09202206277'

//Image Interpolation/Binding
imageUrl: string = '/assets/profile.jpg';
imageW: number = 110;
imageH: number = 110;
}
