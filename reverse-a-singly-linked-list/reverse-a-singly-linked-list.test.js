import reverseTheList from './reverse-a-singly-linked-list';

class LinkedListNode {
  constructor(val, next) {
    this.val = val;
    this.next = next || null;
  }
}

test('test1', () => {
  const list = new LinkedListNode(7);
  list.next = new LinkedListNode(14);
  list.next.next = new LinkedListNode(21);
  list.next.next.next = new LinkedListNode(28);
  const expected = new LinkedListNode(28);
  expected.next = new LinkedListNode(21);
  expected.next.next = new LinkedListNode(14);
  expected.next.next.next = new LinkedListNode(7);
  const result = reverseTheList(list);
  expect(result).toEqual(expected);
});
