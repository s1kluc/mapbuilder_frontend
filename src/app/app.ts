import {Component, signal} from '@angular/core';
import {BaseLayout} from './base-layout/base-layout';

@Component({
  selector: 'app-root',
  imports: [
    BaseLayout
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('mapbuilder_frontend');
}
