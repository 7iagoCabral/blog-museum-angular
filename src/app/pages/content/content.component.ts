import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { data } from '../../data/data'

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent {
  
  @Input()
  cardType: String = "big"
  @Input()
  category: String = "not found" 
  @Input()
  title: String = "404 Not found"
  @Input()
  image: String = ""
  @Input()
  content: String = ""

  private id:string | null = '0'
  

  
  constructor(
    private route:ActivatedRoute
  ){

  }
  ngOnInit(): void {
    this.route.paramMap.subscribe( value =>
      this.id = value.get("id"))

      this.setValueToComponent(this.id)
  }

  setValueToComponent(id: string | null){
    const result = data.filter(article => article.id == id)[0]
   
    this.title = result.title
    this.cardType = result.cardType
    this.category = result.category
    this.image = result.image
    this.content = result.content
  }
}
