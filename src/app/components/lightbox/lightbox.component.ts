import {
  Component,
  Injectable,
  Input,
  NgModule,
  OnInit,
  AfterViewInit,
} from "@angular/core";
import { Lightbox } from "ngx-lightbox";
import { HttpClient } from "@angular/common/http";
import { delay, Observable } from "rxjs";
import * as $ from "jquery";

interface album {
  src: string;
  caption: string;
  thumb: string;
}
@Component({
  selector: "app-lightbox",
  templateUrl: "./lightbox.component.html",
  styleUrls: ["./lightbox.component.scss"],
})
@Injectable()
export class LightboxComponent implements OnInit, AfterViewInit {
  _albums: album[] = [];
  albums: album[][] = new Array([], [], [], [], [], []);
  //private apiURL = 'http://www.mocky.io/v2/5ea172973100002d001eeada';
  public response: any;
  ngAfterViewInit(): void {
    $(document).ready(function () {
      var list = document.getElementsByClassName("gallery-img");
      console.log(list);
    });
  }
  ngOnInit(): void {
    const dir = "../../../assets/lightbox";
    //const files = fs.readdirSync(dir);
    //console.log(files[0]);
    $(document).ready(function () {
      $(".gallery-img").each(function (index) {
        //console.log(index);
        const value = ".gallery-img" + ":nth-child(" + index + ")";
        const anim = [
          "bounce",
          "flash",
          "pulse",
          "rubberBand",
          "shakeX",
          "shakeY",
          "headShake",
          "swing",
          "tada",
          "wobble",
          "jello",
          "heartBeat",
          "flip",
          "flipInX",
          "flipInY",
          "hinge",
          "jackInTheBox",
          "rollIn",
          "zoomIn",
          "zoomInDown",
          "zoomInLeft",
          "zoomInRight",
          "zoomInUp",
        ];
        //console.log(value);
        $(value)
          .mouseenter(function () {
            $(this).css("animation", anim[index] + " 1s");
          })
          .mouseleave(function () {
            $(this).css("animation", "");
          });
        $(this).hover(function () {
          $(this).attr("title", "Click to view the image");
        });
      });
    });
    // this.http.get(this.apiURL).subscribe((Response) => {
    //   console.log(Response);
    // });
  }

  constructor(private _lightbox: Lightbox, private http: HttpClient) {
    //const albums: album[] = [];
    /*
    for (let i = 0; i <= 19; i++) {
      const src = '../../../assets/lightbox/0/' + i + '.jpg';
      const caption = 'Image ' + i + ' caption here';
      const thumb = '../../../assets/lightbox/' + i + '.jpg';
      const album = {
        src: src,
        caption: caption,
        thumb: thumb,
      };

      this._albums.push(album);
    }
    */
    var folder = new Array("0", "1", "2", "3", "4", "5");
    for (let i in folder) {
      var path = "../../../assets/lightbox/" + folder[i] + ".json";
      //console.log(folder[i]);
      this.getJSON(path).subscribe((data) => {
        //console.log(data);
        for (let key in data) {
          //  console.log(data[key]);
          const src = "../../../assets/lightbox/" + folder[i] + "/" + data[key];
          const caption = " ";
          const thumb =
            "../../../assets/lightbox/" + folder[i] + "/" + data[key];
          const album = {
            src: src,
            caption: caption,
            thumb: thumb,
          };
          this._albums.push(album); // html index properly when add new image
          this.albums[i].push(album);
        }
      });
    }
    console.log(this._albums);
    console.log(this.albums);
    $(document).ready(function () {
      $(".index").hide(1000);
    });
  }

  open(index: number): void {
    this._lightbox.open(this._albums, index);
    console.log(index);
  }
  close(): void {
    this._lightbox.close();
  }
  /*
  async fetchData() {
    this.response = '';
    this.response = await this.http
      .get<any>(this.apiURL)
      .pipe(delay(1000))
      .toPromise();
  }
  */
  public getJSON(path: any): Observable<any> {
    return this.http.get(path);
  }
}
