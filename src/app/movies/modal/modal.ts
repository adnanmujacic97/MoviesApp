import { Component, Input, HostListener, Output, EventEmitter } from '@angular/core';
import { Movie } from '../movie.model';
import { MoviesComponent } from '../movies.component';

@Component({
  selector: 'app-modal',
  imports: [],
  templateUrl: './modal.html',
  styleUrl: './modal.css'
})
export class Modal {

  

  @Input() movie!: Movie;

  @Input() isOpen = false;          
  // @Input() title = '';              
  @Output() close = new EventEmitter<void>();

  onClose() {
    this.close.emit();
  }

//   @HostListener('document:keydown', ['$event'])
//     onKeydown(event: KeyboardEvent) { {
//       if (event.key === 'Escape' && this.isOpen) {
//         this.onClose();
//       }
//     }
//   }
// }

  @HostListener('document:keydown.escape')
  onEscapeKey() {
    if (this.isOpen) {
      this.onClose();
    }
  }
  
}