import {Component} from '@angular/core';
import {RoomEditor} from '../../pages/room-editor/room-editor';

@Component({
  selector: 'app-settings-view',
  imports: [
    RoomEditor
  ],
  templateUrl: './settings-view.html',
  styleUrl: './settings-view.css',
})
export class SettingsView {

}
