
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NodeBlock, Summary } from 'src/app/model/node';

@Component({
  selector: 'app-confirm-ticket-dialog',
  templateUrl: './confirm-ticket-dialog.component.html',
  styleUrls: ['./confirm-ticket-dialog.component.scss']
})
export class ConfirmTicketDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<ConfirmTicketDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public selections: NodeBlock[]
  ) { }

  summaries: Summary[] = [];
  recommendation = '';
  username = '';

  ngOnInit(): void {
    for (let i = 1; i < this.selections.length; i++) {
      console.log(this.selections[i - 1].text);
      this.summaries.push({
        question: this.selections[i - 1].text,
        answer: this.selections[i - 1].options.find(option => option.node === this.selections[i].id)?.text || ''
      });
      this.recommendation = this.selections[this.selections.length - 1].value;
    }
  }

  onCancelClick(): void {
    this.selections.splice(-1);
    this.selections = this.selections.map(node => node);
    this.dialogRef.close();
  }

  onConfirmClick(): void {
    this.selections.splice(-1);
    this.selections = this.selections.map(node => node);
    this.dialogRef.close({
      username: this.username,
      summaries: this.summaries,
      recommendation: this.recommendation
    });
  }

  setUsername(event: any) {
    this.username = event.target.value;
  }
}
