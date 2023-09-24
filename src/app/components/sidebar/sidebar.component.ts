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
      title: 'country',
      searchPlaceholder: 'Search countries',
      items: [
        { name: 'Angola', checked: false },
        { name: 'Belgium', checked: false },
        { name: 'Eygpt', checked: false },
        { name: 'Finland', checked: false },
        { name: 'Mexico', checked: false },
      ],
      seeAllOptions: 'Seel all Countries',
      isOpen: false
    },
    {
      title: 'institutes',
      searchPlaceholder: 'Search institutes',
      items: [
        { name: 'Columbia University  ', checked: false },
        { name: ' Brown University ', checked: false },
        { name: 'European Institute of Innovation', checked: false },
        { name: 'Harvard University', checked: false },
        { name: 'New York University', checked: false },
      ],
      seeAllOptions: 'Seel all Institutes',
      isOpen: false
    },
    {
      title: 'languages',
      searchPlaceholder: 'Search languages',
      items: [
        { name: 'Arabic', checked: false },
        { name: ' Chinese ', checked: false },
        { name: 'English', checked: false },
        { name: 'German', checked: false },
        { name: 'Spanish', checked: false },
      ],
      seeAllOptions: 'Seel all languages',
      isOpen: false
    },
    {
      title: 'level',
      items: [
        { name: 'Associate (50)', checked: false },
        { name: 'Undergraduate (20)', checked: false },
        { name: 'Post Graduate (120)', checked: false },
        { name: 'Masters (32)', checked: false },
        { name: 'PHD (61)', checked: false },
      ],
      isOpen: false
    },
    {
      title: 'type',
      items: [
        { name: 'Full Time (20)', checked: false },
        { name: 'Part Time (61)', checked: false }
      ],
      isOpen: false
    },
    {
      title: 'duration',
      items: [
        { name: ' 6 - 12 Months (20)', checked: false },
        { name: '1 - 3 Years (61)', checked: false },
        { name: '3 - 5 Years (182)', checked: false }
      ],
      isOpen: false
    },
  ];

  toggleAccordion(accordion: any) {
    console.log('ACC', accordion)
    accordion.isOpen = !accordion.isOpen;
  }

  toggleAllCountries() {
    this.showAllCountries = !this.showAllCountries;
  }
}
