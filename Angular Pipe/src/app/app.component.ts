import { Component, OnInit } from '@angular/core';
import { Observable, map, interval } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  price : number = 20000;
  Fruits = ["Apple", "Orange", "Grapes", "Mango", "Kiwi", "Pomegranate"];
  decimalNum1: number = 8.7589623;
  decimalNum2: number = 5.43;
  decimalNum3: number = 42.1203123; 
  ngOnInit(){
  }
  a: number = 0.259;
  b: number = 1.3495;
  c: number = 4.324;
  time$: Observable<Date>;
  title = 'angular_pipe';
  presentDate = new Date();
  constructor(){
    this.time$ = interval(1000).pipe (map (()=> new Date()))
  } 
  object: Object = {foo: 'bar', baz: 'qux', nested: {xyz: 3, numbers: [1, 2, 3, 4, 5]}};
}
