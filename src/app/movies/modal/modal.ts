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

  

  // modalOverlay: any;
  @Input() movie!: Movie;
  // constructor(movie?: Movie) {};

  @Input() isOpen = false;          // controls visibility
  @Input() title = '';              // modal title
  @Output() close = new EventEmitter<void>();

  onClose() {
    this.close.emit();
  }

  // @HostListener('document:keydown', ['$event'])
  //   onKeydown(event: KeyboardEvent) { {
  //     if (event.key === 'Escape' && this.modalOverlay.classList.contains('active')) {
  //       this.onCloseBtnClick();
  //     }
  //   }
  // }

  // onOverlayClick(){
  //   this.onCloseBtnClick()
  // }
}
