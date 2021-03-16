import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SampleService {

  constructor(private httpClient: HttpClient) { }
  
  getTodo(data = null): Observable<any> {
    if(data) {
      return this.httpClient.get('https://jsonplaceholder.typicode.com/todos/' + data);  
    }
    else
      return this.httpClient.get('https://jsonplaceholder.typicode.com/todos');
  }
  
  setTodo(data): Observable<any> {
    return this.httpClient.post('https://jsonplaceholder.typicode.com/posts', data);
  }
}
