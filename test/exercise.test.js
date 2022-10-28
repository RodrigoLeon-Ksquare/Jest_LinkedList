const LinkedList = require("../exercise");

//Test for add to the head
test("add element at the beginning of the list", () => {
  const ll = new LinkedList([1, 2, 3, 4, 5]);
  const ll2 = new LinkedList([]);
  expect(ll.addAtHead).toBeDefined();
  expect(ll.addAtHead(10)).toEqual([10, 1, 2, 3, 4, 5]);
  expect(ll2.addAtHead(1)).toEqual([1]);
});
//Test for add to the middle
test("add element at the middle of the list", () => {
  const ll = new LinkedList([1, 2, 3, 4]);
  const ll2 = new LinkedList([1, 2, 3, 4, 5]);
  const ll3 = new LinkedList([]);
  expect(ll.addAtMiddle).toBeDefined();
  expect(ll3.addAtMiddle(10)).toEqual([10]);
  expect(ll.addAtMiddle(10)).toEqual([1, 2, 10, 3, 4]);
  expect(ll2.addAtMiddle(10)).toEqual([1, 2, 3, 10, 4, 5]);
});

//Test for add to the end
test("add element at the end of the list", () => {
  const ll = new LinkedList([1, 2, 3, 4, 5]);
  const ll2 = new LinkedList([]);
  expect(ll.addAtTail).toBeDefined();
  expect(ll.addAtTail(10)).toEqual([1, 2, 3, 4, 5, 10]);
  expect(ll2.addAtTail(10)).toEqual([10]);
});

//Test for delete value at the beginning
test("deleate element at the beginning of the list", () => {
  const ll = new LinkedList([1, 2, 3, 4, 5]);
  expect(ll.removeAtHead).toBeDefined();
  expect(ll.removeAtHead()).toEqual([2, 3, 4, 5]);
});

//Test for delete value at the middle
test("deleate element at the middle of the list", () => {
  const ll = new LinkedList([1, 2, 3, 4, 5]);
  const ll2 = new LinkedList([1, 2, 3, 4, 5, 6]);
  expect(ll.removeAtMiddle).toBeDefined();
  expect(ll.removeAtMiddle()).toEqual([1, 2, 4, 5]);
  expect(ll2.removeAtMiddle()).toEqual([1, 2, 3, 5, 6]);
});

//Test for delete value at the end
test("deleate element at the end of the list", () => {
  const ll = new LinkedList([1, 2, 3, 4, 5]);
  expect(ll.removeAtEnd).toBeDefined();
  expect(ll.removeAtEnd()).toEqual([1, 2, 3, 4]);
});

//Test for sort list
test("deleate element at the beginning of the list", () => {
  const ll = new LinkedList([1, 6, 2, 7, 8]);
  expect(ll.sortList).toBeDefined();
  expect(ll.sortList()).toEqual([1, 2, 6, 7, 8]);
});
//Test for reverse list
test("deleate element at the beginning of the list", () => {
  const ll = new LinkedList([1, 6, 2, 7, 8]);
  expect(ll.reverseList).toBeDefined();
  expect(ll.reverseList()).toEqual([8, 7, 2, 6, 1]);
});

//Test for the getResult method
test("This test will return an array", () => {
  const ll = new LinkedList([1, 2, 3, 4, 5, 6]);
  expect(ll.getResult()).toBeDefined();
  expect(ll.getResult()).toEqual([1, 2, 3, 4, 5, 6]);
});
