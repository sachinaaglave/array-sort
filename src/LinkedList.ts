import { Sorter } from './Sorter';

class LinkedListNode {
  next: LinkedListNode | null = null;

  constructor(public data: number) {}
}

export class LinkedList extends Sorter {
  head: LinkedListNode | null = null;

  constructor(data: number[]) {
    super();
    for (let nodeVal of data) {
      this.add(nodeVal);
    }
  }

  add(data: number): void {
    const node = new LinkedListNode(data);

    if (!this.head) {
      this.head = node;
      return;
    }

    let tail = this.head;
    while (tail.next) {
      tail = tail.next;
    }
    tail.next = node;
  }

  get length(): number {
    let length = 0;

    let node = this.head;
    while (node) {
      length++;
      node = node.next;
    }

    return length;
  }

  at(index: number): LinkedListNode {
    if (!this.head) {
      throw new Error('Index out of bound');
    }

    let counter = 0;
    let node: LinkedListNode | null = this.head;
    while (node) {
      if (counter === index) {
        return node;
      }

      counter++;
      node = node.next;
    }
    throw new Error('Index out of bounds');
  }

  compare(leftIndex: number, rightIndex: number): boolean {
    return this.at(leftIndex).data > this.at(rightIndex).data;
  }

  swap(leftIndex: number, rightIndex: number): void {
    if (leftIndex > rightIndex) {
      return this.swap(rightIndex, leftIndex);
    }

    let preLeftNode = leftIndex === 0 ? null : this.at(leftIndex - 1);
    let leftNode = this.at(leftIndex);

    let preRightNode = rightIndex === 0 ? null : this.at(rightIndex - 1);
    let rightNode = this.at(rightIndex);
    const rightNext = rightNode ? rightNode.next : null;

    if (leftNode.next === rightNode) {
      // Consecutive nodes
      if (preLeftNode) {
        preLeftNode.next = rightNode;
      } else {
        this.head = rightNode;
      }
      leftNode.next = rightNode.next;
      rightNode.next = leftNode;
      return;
    }

    if (preLeftNode) {
      preLeftNode.next = rightNode;
    } else {
      this.head = rightNode;
    }
    rightNode.next = leftNode ? leftNode.next : null;

    if (preRightNode) {
      preRightNode.next = leftNode;
    }
    leftNode.next = rightNext;
  }

  print(): void {
    for (let index = 0; index < this.length; index++) {
      console.log(this.at(index).data);
    }
  }
}
