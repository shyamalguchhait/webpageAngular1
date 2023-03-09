import { Component, AfterViewInit, OnInit } from "@angular/core";
import * as $ from "jquery";
declare var anime: any;
@Component({
  selector: "app-research",
  templateUrl: "./research.component.html",
  styleUrls: ["./research.component.scss"],
})
export class ResearchComponent implements OnInit {
  constructor() {
    $(document).ready(function () {
      $(".index").hide(1000);
    });
  }
  ngOnInit(): void {}
}
