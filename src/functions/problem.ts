class Node<T> {
  public next: Node<T> | null = null;
  public prev: Node<T> | null = null;

  constructor(public data: T) {
    // empty constructor
  }
}

interface ILinkedList<T> {
  insert(data: T): Node<T>;
  traverse(): T[];
  size(): number;
}

class LinkedList<T> implements ILinkedList<T> {
  private head: Node<T> | null = null;
  
  // Inserts a new node at the start of the linked list
  public insert(data: T): Node<T> {

    // Initialize node for return value
    const node = new Node(data);

    if (!this.head) {
      this.head = node;
    } else {
      this.head.prev = node;
      node.next = this.head;
      this.head = node;
    }
    return node;
  }

  // Returns the linked list as a JS array
  public traverse(): T[] {
    const list: T[] = [];
    if (!this.head) {
      return [];
    }

    // Recursive function to iterate over the linked list and add to the empty array
    const addToArray = (node: Node<T>): T[] => {
      list.push(node.data);
      return node.next ? addToArray(node.next) : list;
    }

    return addToArray(this.head);
  }

  // Returns the size of the linked list
  public size(): number {
    return this.traverse.length;
  }
  
}

interface IRandomDrawers {

}

class RandomDrawers {
  private drawer: Array<LinkedList<number>> | null = null;

  constructor(public prisoners: number) {
    const drawerSet = new Set();
    while(drawerSet.size !== prisoners) {
      drawerSet.add(Math.floor(Math.random() * prisoners) + 1);
    }
  }
}

export {}