import {Component, inject} from '@angular/core';
import {Workspace} from '../../../shared/models/workspace.model';
import {FormsModule} from '@angular/forms';
import {MatDialogModule, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-create-workspace-dialog',
  standalone: true,
  imports: [
    FormsModule,
    MatDialogModule
  ],
  templateUrl: './create-workspace-dialog.html',
  styleUrls: ['./create-workspace-dialog.css'],
})
export class CreateWorkspaceDialog {

  name: string = '';
  description: string = '';
  heightAdjustable: boolean = false;

  constructor(private dialogRef: MatDialogRef<CreateWorkspaceDialog>) {
  }

  onSubmit(): void {
    if(!this.validateForm()){
      return;
    }

    const newWorkspace: Workspace = {
      name: this.name,
      description: this.description,
      heigh_adjustable: this.heightAdjustable,
      x_position: 0,
      y_position: 0,
      rotation: 0,
      scale: 0,
    }

    const existingWorkspace = localStorage.getItem('workspace');
    const workspaces: Workspace[] = existingWorkspace ? JSON.parse(existingWorkspace) : [];

    workspaces.push(newWorkspace)
    localStorage.setItem('workspace', JSON.stringify(workspaces));

    console.log('workspace', newWorkspace, 'localstorage', localStorage.getItem('workspace'));
    this.dialogRef.close();
  }

  onAbort(): void {
    this.dialogRef.close();
  }

  validateForm(): boolean{
    if(this.name === '' || this.description === ''){
      alert('Felder dürfen nicht leer sein.');
      return false;
    }
    return true;
  }

}
