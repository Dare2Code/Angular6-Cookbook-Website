import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  @Output() selectedPage = new EventEmitter<string>();
  onPageSelect(selectedPage: string) {
    this.selectedPage.emit(selectedPage);
  }
}
