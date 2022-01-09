export class Option {
    node: string = '';
    text: string = '';
}

export class NodeBlock {
    id: string = '';
    text: string = '';
    options: Option[] = [];
    value: string = '';
}

export interface Summary {
    question: string,
    answer: string
}