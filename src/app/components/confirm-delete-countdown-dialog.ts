import { Component, Inject } from '@angular/core';
import { MdDialog, MdDialogRef, MD_DIALOG_DATA } from '@angular/material';

@Component({
    selector: 'confirm-delete-countdown-dialog',
    templateUrl: './confirm-delete-countdown-dialog.html',
})
export class ConfirmDeleteCountDownDialog {
    constructor(
        public dialogRef: MdDialogRef<ConfirmDeleteCountDownDialog>,
        @Inject(MD_DIALOG_DATA) public data: any) { }
    onNoClick(): void {
        this.dialogRef.close();
    }
}