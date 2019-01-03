import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  selectedPage: string;
  onSelectedPage (selectedPage) {
    this.selectedPage = selectedPage;
  }

  // TODo: use ngOnInit() here to fetch data when app loads - from server.
}
