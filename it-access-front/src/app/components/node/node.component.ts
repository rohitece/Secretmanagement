import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NodeBlock } from '../../model/node';
import { NodeService } from '../../service/node-service.service';

@Component({
  selector: 'app-node',
  templateUrl: './node.component.html',
  styleUrls: ['./node.component.scss']
})
export class NodeComponent implements OnInit {

  @Input() set selections(nodeBlocks: NodeBlock[]) {
    this.processNodes(nodeBlocks);
  }

  @Output() selected = new EventEmitter<NodeBlock>();

  currentNode: NodeBlock = new NodeBlock();

  constructor(private readonly nodeService: NodeService) { }

  ngOnInit(): void { }

  processNodes(selections: NodeBlock[]) {
    if (selections.length === 0) {
      this.currentNode = this.nodeService.getNode('root') as NodeBlock;
      if (!this.currentNode) {
        this.handleError('root node is not defined in config!');
      }
      this.selected.next(this.currentNode);
    }
    else {
      this.currentNode = selections[selections.length - 1];
    }
  }

  onSlectOption(nodeId: string) {
    const nextNode = this.nodeService.getNode(nodeId);
    if (!nextNode) {
      this.handleError(nodeId, 'node is not defined in config!');
    }
    this.selected.next(nextNode as NodeBlock);
  }

  handleError(...msg: string[]) {
    console.error(msg);
  }
}
