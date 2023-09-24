import { Component } from '@angular/core';

@Component({
  selector: 'app-programs',
  templateUrl: './programs.component.html',
  styleUrls: ['./programs.component.scss']
})
export class ProgramsComponent {
  selectedTab: number = 0;
  viewMode: 'grid' | 'list' = 'grid';

  programs:  any[] = [
    {
      "name": "European Institute of Innovation",
      "country": "SPAIN",
      "program": "Illustration Design",
      "delivery": "E-learning",
      "start_date": "18th June, 2023",
      "language": "ENG",
      "duration": "Full time · Undergraduate · 4 years",
      "tuition": "$45,000/year",
      "imgUrl": "https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    },
    {
      "name": "University of Ibadan",
      "country": "NIGERIA",
      "program": "Designing for Accessibility",
      "delivery": "Hybrid",
      "start_date": "28th Dec, 2022",
      "language": "ESP",
      "duration": "Part time · Masters · 2 years",
      "tuition": "$5,000/year",
      "imgUrl": "https://images.unsplash.com/photo-1571868200845-4fe0659ffd61?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDJ8fGElMjBtYW4lMjByZWFkaW5nJTIwZnJvbSUyMGhpcyUyMGxhcHRvcHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
    },
    {
      "name": "Harvard University",
      "country": "UNITED STATES",
      "program": "Experiencing Design: Deepening Your Design Thi...",
      "delivery": "Hybrid",
      "start_date": "28th Dec, 2022",
      "language": "ENG · ESP · CHN",
      "duration": "Part time · Masters · 2 years",
      "tuition": "$45,000/year",
      "imgUrl": "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjI3fHxhJTIwbWFuJTIwcmVhZGluZyUyMGZyb20lMjBoaXMlMjBsYXB0b3B8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
    },
    {
      "name": "European Institute of Innovation",
      "country": "SPAIN",
      "program": "Illustration Design",
      "delivery": "E-learning",
      "start_date": "18th June, 2023",
      "language": "ENG",
      "duration": "Full time · Undergraduate · 4 years",
      "tuition": "$45,000/year",
      "imgUrl": "https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    },
    {
      "name": "University of Ibadan",
      "country": "NIGERIA",
      "program": "Designing for Accessibility",
      "delivery": "Hybrid",
      "start_date": "28th Dec, 2022",
      "language": "ESP",
      "duration": "Part time · Masters · 2 years",
      "tuition": "$5,000/year",
      "imgUrl": "https://images.unsplash.com/photo-1571868200845-4fe0659ffd61?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDJ8fGElMjBtYW4lMjByZWFkaW5nJTIwZnJvbSUyMGhpcyUyMGxhcHRvcHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
    },
    {
      "name": "Harvard University",
      "country": "UNITED STATES",
      "program": "Experiencing Design: Deepening Your Design Thi...",
      "delivery": "Hybrid",
      "start_date": "28th Dec, 2022",
      "language": "ENG · ESP · CHN",
      "duration": "Part time · Masters · 2 years",
      "tuition": "$45,000/year",
      "imgUrl": "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjI3fHxhJTIwbWFuJTIwcmVhZGluZyUyMGZyb20lMjBoaXMlMjBsYXB0b3B8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
    },
    {
      "name": "European Institute of Innovation",
      "country": "SPAIN",
      "program": "Illustration Design",
      "delivery": "E-learning",
      "start_date": "18th June, 2023",
      "language": "ENG",
      "duration": "Full time · Undergraduate · 4 years",
      "tuition": "$45,000/year",
      "imgUrl": "https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    },
    {
      "name": "University of Ibadan",
      "country": "NIGERIA",
      "program": "Designing for Accessibility",
      "delivery": "Hybrid",
      "start_date": "28th Dec, 2022",
      "language": "ESP",
      "duration": "Part time · Masters · 2 years",
      "tuition": "$5,000/year",
      "imgUrl": "https://images.unsplash.com/photo-1571868200845-4fe0659ffd61?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDJ8fGElMjBtYW4lMjByZWFkaW5nJTIwZnJvbSUyMGhpcyUyMGxhcHRvcHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
    },
    {
      "name": "Harvard University",
      "country": "UNITED STATES",
      "program": "Experiencing Design: Deepening Your Design Thi...",
      "delivery": "Hybrid",
      "start_date": "28th Dec, 2022",
      "language": "ENG · ESP · CHN",
      "duration": "Part time · Masters · 2 years",
      "tuition": "$45,000/year",
      "imgUrl": "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjI3fHxhJTIwbWFuJTIwcmVhZGluZyUyMGZyb20lMjBoaXMlMjBsYXB0b3B8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
    },
    {
      "name": "European Institute of Innovation",
      "country": "SPAIN",
      "program": "Illustration Design",
      "delivery": "E-learning",
      "start_date": "18th June, 2023",
      "language": "ENG",
      "duration": "Full time · Undergraduate · 4 years",
      "tuition": "$45,000/year",
      "imgUrl": "https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    },
    {
      "name": "University of Ibadan",
      "country": "NIGERIA",
      "program": "Designing for Accessibility",
      "delivery": "Hybrid",
      "start_date": "28th Dec, 2022",
      "language": "ESP",
      "duration": "Part time · Masters · 2 years",
      "tuition": "$5,000/year",
      "imgUrl": "https://images.unsplash.com/photo-1571868200845-4fe0659ffd61?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDJ8fGElMjBtYW4lMjByZWFkaW5nJTIwZnJvbSUyMGhpcyUyMGxhcHRvcHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
    },
    {
      "name": "Harvard University",
      "country": "UNITED STATES",
      "program": "Experiencing Design: Deepening Your Design Thi...",
      "delivery": "Hybrid",
      "start_date": "28th Dec, 2022",
      "language": "ENG · ESP · CHN",
      "duration": "Part time · Masters · 2 years",
      "tuition": "$45,000/year",
      "imgUrl": "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjI3fHxhJTIwbWFuJTIwcmVhZGluZyUyMGZyb20lMjBoaXMlMjBsYXB0b3B8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
    }
  ]


  selectTab(index: number) {
    this.selectedTab = index;
  }
  changeView(viewMode: 'grid' | 'list') {
    this.viewMode = viewMode;
  }
  gridView(){
    this.viewMode = 'grid';
  }
  listView(){
    this.viewMode = 'list';
  }

  
}
