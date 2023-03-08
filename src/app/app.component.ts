import { Component } from '@angular/core';
import * as $ from 'jquery';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'webpage';
  ngOnInit() {
    $(document).ready(function () {
      $('.toggle').click(function () {
        // click
        if ($('input:checked').val()) {
          document.documentElement.setAttribute('data-theme', 'dark');
          // $.cookie('theme', 'dark');
          setCookie('theme', 'dark', 365);
        } else {
          document.documentElement.setAttribute('data-theme', 'light');
          setCookie('theme', 'light', 365);
        }
      });
      var theme = getCookie('theme');
      if (theme) {
        if (theme == 'dark') {
          document.documentElement.setAttribute('data-theme', 'dark');
          $('#switch').prop('checked', true);
        } else {
          document.documentElement.setAttribute('data-theme', 'light');
          $('#switch').prop('checked', false);
        }
      } else {
        const darkThemeMq = window.matchMedia('(prefers-color-scheme: dark)');
        if (darkThemeMq.matches) {
          document.documentElement.setAttribute('data-theme', 'dark');
          $('#switch').prop('checked', 'true');
        } else {
          document.documentElement.setAttribute('data-theme', 'light');
        }
      }
      if (
        window.matchMedia &&
        window.matchMedia('(prefers-color-scheme: dark)').matches
      ) {
        document.documentElement.setAttribute('data-theme', 'dark');
        document.documentElement.setAttribute('data-theme', 'dark');
        $('#switch').prop('checked', 'true');
      }
    });

    $(document).ready(function () {
      $('.remove').each(function () {
        $(this).click(function () {
          $('.index').hide(1000);
        });
      });
      $('.active, .navbar-brand').click(function () {
        $('.index').show(1000);
      });
    });
  }

  constructor() {
    $(document).ready(function () {
      let path = window.location.pathname;
      if (path == '/') {
        $('.index').show(1000);
      } else {
        $('.index').hide(1000);
      }
    });
  }
}
function setCookie(cname: string, cvalue: string, exdate: number) {
  const d = new Date();
  d.setTime(d.getTime() + exdate * 24 * 60 * 60 * 100);
  let expires = 'expires' + d.toUTCString();
  document.cookie = cname + '=' + cvalue + ';' + expires + ';path=/';
}

function getCookie(cname: string) {
  let name = cname + '=';
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return '';
}
