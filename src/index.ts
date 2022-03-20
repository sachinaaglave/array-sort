import { CharactersCollection } from './CharactersCollection';
import { LinkedList } from './LinkedList';
import { NumbersCollection } from './NumbersCollection';

const numbersCollection = new NumbersCollection([10, 3, -5, 0]);
numbersCollection.sort();

console.log(numbersCollection.data);

const stringCollection = new CharactersCollection('dsa');
stringCollection.sort();
console.log(stringCollection.data);

const linkedList = new LinkedList([4, 3, 1, 2]);
linkedList.sort();
linkedList.print();
