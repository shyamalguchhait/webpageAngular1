import { Component, OnInit } from "@angular/core";
import * as $ from "jquery";
@Component({
  selector: "app-contact",
  templateUrl: "./contact.component.html",
  styleUrls: ["./contact.component.scss"],
})
export class ContactComponent implements OnInit {
  constructor() {
    $(document).ready(function () {
      $(".index").hide(1000);
    });
  }

  ngOnInit(): void {}
}
