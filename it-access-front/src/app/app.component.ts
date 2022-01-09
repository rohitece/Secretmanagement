import { Component } from '@angular/core';
import { NodeBlock, Summary } from './model/node';
import { NodeService } from './service/node-service.service';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmTicketDialogComponent } from './components/confirm-ticket-dialog/confirm-ticket-dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  selectedNodes: NodeBlock[] = [];
  username = '';
  summaries: Summary[] = [];
  recommendation = '';

  constructor(private readonly nodeService: NodeService,
    public dialog: MatDialog) { }

  onSelectNode(nodeBlock: NodeBlock) {
    this.selectedNodes.push(nodeBlock);
    if (nodeBlock.value) {
      this.showConfirmation();
    } else {
      this.selectedNodes = this.selectedNodes.map(node => node);
    }
  }

  showConfirmation(): void {
    const dialogRef = this.dialog.open(ConfirmTicketDialogComponent, {
      width: '500px',
      data: this.selectedNodes,
    });

    dialogRef.afterClosed().subscribe(result => {
      this.processResult(result);
    });
  }

  processResult(result: any) {
    if (result) {
      this.username = result.username;
      this.summaries = result.summaries;
      this.recommendation = result.recommendation;
      this.selectedNodes = [];
    }
  }

  gotoPreviousNode() {
    this.selectedNodes.splice(-1);
    this.selectedNodes = this.selectedNodes.map(node => node);
  }

  resetSelections() {
    this.selectedNodes = [];
    this.username = '';
    this.summaries = [];
    this.recommendation = '';
  }

  handleError(...msg: string[]) {
    console.error(msg);
  }
}
