import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'univacity_task';


  currentPage = 1;
  totalPages = 20;

  onPageChange(page: number) {
    this.currentPage = page;
    // Fetch data for the new page
  }
}
