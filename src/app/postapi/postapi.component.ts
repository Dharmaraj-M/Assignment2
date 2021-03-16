import { Component, OnInit } from '@angular/core';
import { SampleService } from '../sample.service';

@Component({
  selector: 'app-postapi',
  templateUrl: './postapi.component.html',
  styleUrls: ['./postapi.component.css']
})
export class PostapiComponent implements OnInit {

  constructor(private sampleService: SampleService) { }

  userId: number;
  id: number;
  title: string;
  body: string;
  dataSource: any;
  displayedColumns: string[] = ['userId', 'id', 'title', 'body'];

  ngOnInit(): void {
  }
  
  postData() {
    this.sampleService.setTodo({
      'userId': this.userId,
      'id': 101,
      'title': this.title,
      'body': this.body
    }).subscribe((res)=>this.dataSource=[res]);
  }
}
