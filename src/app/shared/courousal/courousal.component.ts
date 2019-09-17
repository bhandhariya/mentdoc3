import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { HttpClient } from "@angular/common/http";
@Component({
  selector: 'app-courousal',
  templateUrl: './courousal.component.html',
  styleUrls: ['./courousal.component.css'],
  providers: [NgbCarouselConfig]
})
export class CourousalComponent implements OnInit {
  images = [1, 2, 3, 4].map(() => `https://picsum.photos/900/500?random&t=${Math.random()}`);
  constructor(config: NgbCarouselConfig,private http:HttpClient) { 
    config.interval = 10000;
    config.wrap = false;
    config.keyboard = false;
    config.pauseOnHover = false;
  }

  ngOnInit() {
    console.log(this.images);
    this.http.get('http://localhost:8080/cor/many').subscribe(r=>{
      console.log(r)
    })
  }

}
