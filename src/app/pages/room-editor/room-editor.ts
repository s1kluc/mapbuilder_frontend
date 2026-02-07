import {Component, HostListener, inject} from '@angular/core';
import {CreateWorkspaceDialog} from '../../components/dialog/create-workspace-dialog/create-workspace-dialog';
import {MatDialog} from '@angular/material/dialog';
import {Workspace} from '../../shared/models/workspace.model';

@Component({
  selector: 'app-room-editor',
  imports: [],
  templateUrl: './room-editor.html',
  styleUrl: './room-editor.css',
})
export class RoomEditor {
  open = false;
  activeWorkspace: Workspace | null = null;

  offsetX = 0;
  offsetY = 0;

  readonly dialog = inject(MatDialog);
  workspaces: Workspace[] = [
    {
      name: 'AP1',
      description: 'Links neben Fenster',
      heigh_adjustable: false,
      x_position: 100,
      y_position: 15,
      rotation: 0,
      scale: 0
    },
    // {
    //   name: 'AP2',
    //   description: 'nichts',
    //   heigh_adjustable: true,
    //   x_position: 19,
    //   y_position: 500,
    //   rotation: 90,
    //   scale: 0
    // },
    // {
    //   name: 'AP3',
    //   description: 'An Treppe',
    //   heigh_adjustable: false,
    //   x_position: 0,
    //   y_position: 0,
    //   rotation: 45,
    //   scale: 0
    // }
  ]
  constructor() {
  }

  toggle() {
    this.open = !this.open;
  }

  openCreateWorkspaceDialog() {
    this.dialog.open(CreateWorkspaceDialog, {width: '600px'});
  }

  selectWorkspace(workspace: Workspace,event: MouseEvent) {
    this.activeWorkspace = workspace;
    this.offsetX= event.offsetX;
    this.offsetY = event.offsetY;

  }

  onMouseMove(event: MouseEvent) {
    if (!this.activeWorkspace) return;

    const container = event.currentTarget as HTMLElement;
    const rect = container.getBoundingClientRect();

    this.activeWorkspace.x_position = event.clientX - rect.left - this.offsetX;
    this.activeWorkspace.y_position = event.clientY - rect.top - this.offsetY;
  }

  deselectWorkspace() {
    this.activeWorkspace = null;
  }
}
