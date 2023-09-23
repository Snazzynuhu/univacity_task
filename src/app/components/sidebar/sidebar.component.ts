import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  searchTerm: string = '';
  showAllCountries!: boolean;

  accordions = [
    {
      title: 'Attendance',
      items: [
        { name: 'on campus', checked: false },
        { name: 'e-learning', checked: false },
        { name: 'hybrid', checked: false }
      ],
      isOpen: false
    },
    {
      title: 'Tuition Fee',
      range: { min: 5000, max: 60000 },
      isOpen: false
    },
    {
      title: 'Country',
      searchPlaceholder: 'Search countries',
      countries: [
        { name: 'Country 1', checked: false },
        { name: 'Country 2', checked: false },
        { name: 'Country 3', checked: false },
        { name: 'Country 4', checked: false },
        { name: 'Country 5', checked: false },
      ],
      seeAllOptions: ['Option 1', 'Option 2', 'Option 3'],
      isOpen: false
    }
  ];

  toggleAccordion(accordion: any) {
    console.log('ACC', accordion)
    accordion.isOpen = !accordion.isOpen;
  }

  toggleAllCountries() {
    this.showAllCountries = !this.showAllCountries;
  }
}
