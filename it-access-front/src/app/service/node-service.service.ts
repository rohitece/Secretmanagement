import { Injectable } from '@angular/core';
import nodes from '../../assets/node.config.json';
import { NodeBlock } from '../model/node';

@Injectable({
  providedIn: 'root'
})
export class NodeService {

  public nodes: NodeBlock[] = nodes as unknown as NodeBlock[];

  constructor() { }

  getNode(nodeId: string) {
    return this.nodes.find(node => node.id === nodeId);
  }
}
