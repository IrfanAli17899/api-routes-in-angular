import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'api-routes-in-angular';

  constructor(@Inject(PLATFORM_ID) private platformId: string) { }

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.getData();
    }
  }

  getData() {
    fetch('/api/hello')
      .then(response => response.json())
      .then(json => console.log(json))
  }
}
