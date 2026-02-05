import { Component, signal } from '@angular/core';
import {UploadComponent} from './upload-component/upload-component';
import {SidebarComponent} from './sidebar-component/sidebar-component';

@Component({
  selector: 'app-root',
  imports: [UploadComponent, SidebarComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('mapbuilder_frontend');
}
