import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SampleService } from '../sample.service';

@Component({
  selector: 'app-getapi',
  templateUrl: './getapi.component.html',
  styleUrls: ['./getapi.component.css']
})

export class GetapiComponent implements OnInit {

  constructor(private sampleService: SampleService, private route: ActivatedRoute) { 
  }
  
  displayedColumns: string[] = ['id', 'title', 'completed'];
  dataSource: any;
  ngOnInit(): void {
    if(this.route.snapshot.params['id']) {
      this.sampleService.getTodo(this.route.snapshot.params['id']).subscribe((res)=>this.dataSource=[res]);
    }
    else {
      this.sampleService.getTodo().subscribe((res)=>this.dataSource=res);
    }
  }
}
