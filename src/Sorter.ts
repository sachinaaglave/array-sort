import { NumbersCollection } from './NumbersCollection';

export interface ISortable {
  length: number;
  compare(leftIndex: number, rightIndex: number): boolean;
  swap(leftIndex: number, rightIndex: number): void;
}

export abstract class Sorter {
  abstract length: number;
  abstract compare(leftIndex: number, rightIndex: number): boolean;
  abstract swap(leftIndex: number, rightIndex: number): void;

  sort(): void {
    let { length } = this;

    while (length--) {
      for (let index = 0; index < length; index++) {
        if (this.compare(index, index + 1)) {
          this.swap(index, index + 1);
        }
      }
    }
  }
}
