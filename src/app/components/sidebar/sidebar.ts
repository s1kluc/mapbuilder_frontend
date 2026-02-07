import {Component, signal} from '@angular/core';

@Component({
  selector: 'app-sidebar',
  imports: [],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css',
})
export class Sidebar {

  selectedPage = signal(1);

   setPage(page: number):void {
    this.selectedPage.set(page);
  }

}
