// pagination.component.ts
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent {
  @Input() currentPage!: number;
  @Input() totalPages!: number;
  @Output() pageChange = new EventEmitter<number>();

//   getPages(): (number | string | any)[] {
//   const pages = Array.from({ length: this.totalPages }, (_, i) => i + 1);

//   if (this.totalPages <= 5) {
//     return pages;
//   } else {
//     const visiblePages = pages.slice(0, 5);
//     if (this.currentPage <= 3) {
//       return [...visiblePages, '...', this.totalPages];
//     } else if (this.currentPage >= this.totalPages - 2) {
//       return [1, '...', ...visiblePages];
//     } else {
//       return [1, '...', this.currentPage - 1, this.currentPage, this.currentPage + 1, '...', this.totalPages];
//     }
//   }
// }


  // changePage(page: number) {
  //   if (page >= 1 && page <= this.totalPages) {
  //     this.pageChange.emit(page);
  //   }
  //   console.log("HERE", page)
  // }

  getPages(): (number | string)[] {
    const pages = Array.from({ length: this.totalPages }, (_, i) => i + 1);

    if (this.totalPages <= 5) {
      return pages;
    } else {
      const visiblePages = pages.slice(0, 5);
      if (this.currentPage <= 3) {
        return [...visiblePages, '...', this.totalPages];
      } else if (this.currentPage >= this.totalPages - 2) {
        return [1, '...', ...visiblePages];
      } else {
        return [
          1,
          '...',
          this.currentPage - 1,
          this.currentPage,
          this.currentPage + 1,
          '...',
          this.totalPages
        ];
      }
    }
  }

  changePage(page: number | string) {
    if (typeof page === 'number') {
      if (page >= 1 && page <= this.totalPages) {
        this.pageChange.emit(page);
      }
    }
  }


}
