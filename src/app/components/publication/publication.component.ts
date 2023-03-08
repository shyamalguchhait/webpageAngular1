import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { data } from 'jquery';
import { delay, Observable } from 'rxjs';
interface publication {
  title: String;
  author: String;
  journal: String;
  volume: Number;
  number: Number;
  pages: String;
  year: Number;
  publisher: String;
  url: String;
}

@Component({
  selector: 'app-publication',
  templateUrl: './publication.component.html',
  styleUrls: ['./publication.component.scss']
})
export class PublicationComponent implements OnInit {
  public data: any = [];
  constructor(private http: HttpClient) {
    var path = '../../../assets/' + 'publications.json';
    this.getJSON(path).subscribe((res) => {
      // console.log(data);
      this.data = res;
      console.log(this.data);
    })
  }

  ngOnInit(): void {

  }

  public getJSON(path: any): Observable<any> {
    return this.http.get(path);
  }
}
