//Class to create a new Linked List
class LinkedList {
  //Data is using for past an array of values to the constructor for set values
  constructor(data) {
    //Basic properties
    this.head = null;
    this.tail = null;
    this.length = 0;
    if (data) {
      //Assign value to the head equal to the value of the array at position 0
      this.head = new Node(data[0]);
      //Assign the length value equal to the length value of the array
      this.length = data.length;

      if (data[1]) {
        let current;
        current = this.head;
        //for loop to set the other values of the list equal to each array position
        for (let i = 1; i < data.length; i++) {
          const newNode = new Node(data[i]);
          current.next = newNode;
          current = current.next;
        }
        current = this.tail;
      } else {
        this.head = this.tail;
      }
    }
  }
  //Method to insert a new node at the beggining of the list
  addAtHead(data) {
    //Create new node
    const newNode = new Node(data);
    //Switch new value of head
    newNode.next = this.head;
    this.head = newNode;

    //Increase the length
    this.length++;
    //return result
    return this.getResult();
  }

  //Method to insert a new node at the middle of the list
  addAtMiddle(data) {
    //create a new node
    const newNode = new Node(data);
    //Check if the list is empty
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      let current = this.head;
      this.length = 0;
      //check the length of the list
      while (current !== null) {
        this.length++;
        current = current.next;
      }
      //create a variable counter to determine if the length is pair or impair
      let counter =
        this.length % 2 == 0 ? this.length / 2 : (this.length + 1) / 2;
      current = this.head;

      //position that the new node is to be inserted
      while (counter-- > 1) {
        current = current.next;
      }

      //insert the new node and adjust the rest of the nodes
      newNode.next = current.next;
      current.next = newNode;
      //increase length
      this.length++;
    }
    //return the result
    return this.getResult();
  }

  //Method to insert a new node at the end of the list
  addAtTail(data) {
    //Create a new node
    const newNode = new Node(data);
    //Create a variable to walk the list
    let current;

    //if empty make head and tail the new node
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      current = this.head;
      //Loop for iterate the list
      while (current.next) {
        current = current.next;
      }
      //When the loop finish assign the new node value at the end
      current.next = newNode;
    }
    //Increase 1 the length of the list
    this.length++;
    //return result
    return this.getResult();
  }

  //Method to delate the value of the first node
  removeAtHead() {
    //Assign the new head value
    this.head = this.head.next;
    //Decrase the list length
    this.length--;
    //return result
    return this.getResult();
  }

  //Mehod to delate the value of the middle node
  removeAtMiddle() {
    //Create two pointer to iterate and another variable to storage the previous value
    let slowPointter = this.head;
    let fastPointer = this.head;
    let previous = null;
    //loop to store the previous
    while (fastPointer !== null && fastPointer.next !== null) {
      fastPointer = fastPointer.next.next;
      previous = slowPointter;
      slowPointter = slowPointter.next;
    }
    //remove the middle node
    previous.next = slowPointter.next;
    //decrease length
    this.length--;

    //return the result
    return this.getResult();
  }

  //Method to delate the value of the last node
  removeAtEnd() {
    //Create a new variable that start in the head
    let temp = this.head;
    //Loop to iterate the list, Used .next.next for iterate the list with two pointers
    while (temp.next.next !== null) {
      //Reasign the value of temp
      temp = temp.next;
    }
    //Reasign the value of temp.next to null
    temp.next = null;
    //Decrease the list length
    this.length--;
    return this.getResult();
  }

  //Method to sort the list
  sortList() {
    //Use first the method getResult for convert the values of the list in to an array and then use sort method
    const result = this.getResult().sort((a, b) => a - b);
    //return the result
    return result;
  }

  //Method to reverse the list
  reverseList() {
    //Use first the method getResult for convert the values of the list in to an array and then use reverse method
    const result = this.getResult().reverse();
    //return the result
    return result;
  }

  //Method to return the linked list as an array
  getResult() {
    //create new array to storage the resuñt
    let result = [];
    //Create a new pointer that start in the head
    let current = this.head;

    //If current is true start to push the values in the resul array
    if (current) {
      result.push(current.value);

      while (current.next) {
        current = current.next;
        result.push(current.value);
      }
    }

    //Return the result
    return result;
  }
}

//Class for create a single node
class Node {
  constructor(data) {
    this.value = data;
    this.next = null;
  }
}

//Need to use in test
module.exports = LinkedList;
