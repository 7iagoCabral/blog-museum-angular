import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit{

  @Input()
  Id: String = ""
  @Input()
  cardType: String = ""
  @Input()
  category: String = "null" 
  @Input()
  title: String = ""
  @Input()
  image: String = ""
  @Input()
  resume: String = ""
  @Input()
  link: String = ""

  constructor(){
  }

  ngOnInit(): void {
    
  }
}
