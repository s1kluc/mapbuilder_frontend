import { Component } from '@angular/core';
import {Sidebar} from '../components/sidebar/sidebar';
import {HeaderBar} from '../components/header-bar/header-bar';
import {SettingsView} from '../components/settings-view/settings-view';

@Component({
  selector: 'app-base-layout',
  imports: [
    Sidebar,
    HeaderBar,
    SettingsView
  ],
  templateUrl: './base-layout.html',
  styleUrl: './base-layout.css',
})
export class BaseLayout {

}
