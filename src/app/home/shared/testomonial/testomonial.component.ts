import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-testomonial',
  templateUrl: './testomonial.component.html',
  styleUrls: ['./testomonial.component.css']
})
export class TestomonialComponent implements OnInit {
  Testimonials
  constructor(private http:HttpClient) {
   }

  ngOnInit() {

    this.Testimonials= [
      {
        "_id": "5d84a1a7a82e0e2eccb3e353",
        "title": "Sr Psychatric",
        "image": "https://firebasestorage.googleapis.com/v0/b/myapp-345d5.appspot.com/o/mentcom1568973121?alt=media&token=2b72e091-f62d-46e1-a652-38f6fbe10e93",
        "name": "Gorav Gupta",
        "text": "lorem ispum de emit the lorem ispum de emit the lorem ispum de emit the lorem ispum de emit the lorem ispum de emit the lorem ispum de emit the lorem ispum de emit the lorem ispum de emit the lorem ispum de emit the lorem ispum de emit the lorem ispum de emit the lorem ispum de emit the lorem ispum de emit the lorem ispum de emit the lorem ispum de emit the lorem ispum de emit the lorem ispum de emit the lorem ispum de emit the lorem ispum de emit the lorem ispum de emit the lorem ispum de emit the lorem ispum de emit the lorem ispum de emit the lorem ispum de emit the lorem ispum de emit the lorem ispum de emit the lorem ispum de emit the lorem ispum de emit the ",
        "__v": 0
      },
      {
        "_id": "5d84a2e6a82e0e2eccb3e355",
        "title": "psychologist",
        "image": "https://firebasestorage.googleapis.com/v0/b/myapp-345d5.appspot.com/o/mentcom1568973538?alt=media&token=6d715606-4ece-45be-96c3-0753b4fea73f",
        "name": "radhi",
        "text": "m ispum de emit the lorem ispum de emit the lorem ispum de emit the lorem ispum de emit the lorem ispum de emit the lorem ispum de emit the lorem ispum de emit the lorem ispum de emit the lorem ispum de emit the lorem ispum de emit the lorem ispum de emit the lorem ispum de emit the lorem ispum de emit the lorem ispum de emit the lorem",
        "__v": 0
      },
      {
        "_id": "5d885a4edb060a38805ab476",
        "title": "kdjfhskdjfh",
        "image": "https://firebasestorage.googleapis.com/v0/b/myapp-345d5.appspot.com/o/mentcom1569217090?alt=media&token=6a7c52e4-24d0-420f-8d83-8a9dae2bda9d",
        "name": "aekrhwekjrhew1",
        "text": "kdjfhskdjfhksjdfsd",
        "__v": 0
      },
      {
        "_id": "5d885a87db060a38805ab477",
        "title": "kjhgkjgh",
        "image": "https://firebasestorage.googleapis.com/v0/b/myapp-345d5.appspot.com/o/mentcom1569217150?alt=media&token=f11279c0-dfd2-4976-b8db-69c636f4dc4a",
        "name": "kgjhg",
        "text": "kjhkjhkjhkjh",
        "__v": 0
      }
    ]

  }

  getAllTestimonials(){
    this.http.get('/api/testimonial/getall').subscribe(res=>{
      this.Testimonials = res;
    })
  }
  

}
