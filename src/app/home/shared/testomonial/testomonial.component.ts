import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-testomonial',
  templateUrl: './testomonial.component.html',
  styleUrls: ['./testomonial.component.css']
})
export class TestomonialComponent implements OnInit {

  constructor(private http:HttpClient) { }

  ngOnInit() {
    // $(document).ready(function(){
    //   $(".owl-carousel").owlCarousel();
    // });
     this.getAllTestimonials();
  }
  getAllTestimonials(){
    this.http.get('/api/testimonial/getall').subscribe(this.getallCB)
  }
  Testimonials
  getallCB=(dt)=>{
    this.Testimonials=dt;
    console.log(this.Testimonials)
  }
}
