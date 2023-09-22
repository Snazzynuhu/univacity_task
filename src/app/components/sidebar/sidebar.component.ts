import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
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
    }
  ];

  toggleAccordion(accordion: any) {
    console.log('ACC', accordion)
    accordion.isOpen = !accordion.isOpen;
  }
}
